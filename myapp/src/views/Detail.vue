<template>
    <div v-if="filmInfo"  class="detail">
        <detail-header v-top :title="filmInfo.name"  ></detail-header>
        <div style="width:100%;height:200px;background-size: cover;" :style="{backgroundImage:'url('+filmInfo.poster+')'}" ></div>
        <h3>{{filmInfo.name}}</h3>
        <div>{{filmInfo.category}}</div>
        <div>{{filmInfo.premiereAt |dateFilter}}上映</div>
        <div>{{filmInfo.nation}}|{{filmInfo.runtime}}</div>  
        <div>{{isshow?filmInfo.synopsis:filmInfo.synopsis.slice(0,50)}}</div>
        <div style="text-align:center" @click="isshow=!isshow"><img :src="isshow? require('@/assets/up.png'):require('@/assets/down.png')" alt=""></div>
        <h4>演职人员</h4>
        <div style="width:100%;height:160px;overflow: hidden;">
            <ul style="display:flex ;text-align: center;overflow-x:scroll;height:180px;"><li style="padding:10px"  v-for="(item,index) of filmInfo.actors" :key="index">
                <img style="width:85px;height:85px" :src="item.avatarAddress" alt="">
                <div>{{item.name}}</div>
                <div>{{item.role}}</div>
            </li></ul>
        </div>
        <h4>剧照</h4>
        <div style="width:100%;height:120px;overflow: hidden;">
            <ul style="display:flex ;text-align: center;overflow-x:scroll;height:130px;"><li style="padding:10px"  v-for="(item,index) of filmInfo.photos" :key="index">
                <img style="width:150px;height:100px;" :src="item" alt="">
            </li></ul>
        </div>
        <button @click="btnClick">选座购票</button>
    </div>
</template>
<script>
import api from '@/util/app'
import Vue from 'vue'
import DetailHeader from './detail/DetailHeader.vue'
Vue.directive('top',{
    inserted(el){
        el.style.display='none'
        window.onscroll=()=>{
            console.log(111111111);
            if(document.documentElement.scrollTop || document.documentElement.scrollTop>50){
                el.style.display='block'
            }else{
                el.style.display='none'
            }
        }        
    },
    unbind(){
        window.onscroll=null
    }
})
export default{
    components:{DetailHeader},
data(){
    return {
        filmInfo:null,
        isshow:false
    }
},
mounted(){
    api({
        url:'/api/gateway?filmId=6026&k=2642501',
        headers:{
           'X-Host' : 'mall.film-ticket.film.info'
        }
    }).then(res=>{
        console.log(res.data.data);
        this.filmInfo=res.data.data.film
    })

},
methods:{
    btnClick(){

    }
}
}
</script>
<style lang='less' scoped>
.detail{
    margin-bottom:50px;
    div:not(:nth-child(1)){
        padding:4px ;
        color:#666;
        box-sizing: border-box;
    }
    h3,h4{
        color:#333;
        margin:0
    }
    button{
        background: orangered;
        position: fixed;
        bottom:0;
        color:#fff;
        width:100%;
        font-size: 20px;
        height:50px;
        border:0
    }
}
</style>
<template>
  <ul>
    <li class="tag-li" v-for="item of dataList" :key="item.id" @click="handleClick(item)">
        <img style="position: absolute;width:66px" :src="item.poster" alt="">
        <div >
            <span>{{item.name}}<span style="font-size:14px;background: #d2d6dc;color:#fff"> {{item.item.name}}</span></span>
         
            <div>
                <div style="width:260px; overflow: hidden;white-space: nowrap;text-overflow: ellipsis;"><span style="white-space:nowrap">主演：{{item.actors| actorsFilter}}</span></div>
                <div>{{item.nation}} | {{item.runtime}}分钟</div>
            </div>
       
        </div>
        <button>购票</button>
    </li>
  </ul>
</template>

<script>
import api from '@/util/app'
import Vue from 'vue'
Vue.filter('actorsFilter',(data)=>{
  return data?data.map(item=>item.name).join(' '):'暂无主演'
})
export default {
    data:()=>{
        return {
            dataList:[]
        }
    },
    mounted(){
    api({
      url:'/api/gateway?cityId=420100&pageNum=3&pageSize=10&type=1&k=2076142',
      headers:{
      'X-Host': 'mall.film-ticket.film.list'
      }
    }).then((res)=>{
      console.log(res.data);
      this.dataList=res.data.data.films
    })
  },
  methods:{
    handleClick(film){
      this.$router.push({path:`/films/${film.filmId}`,params:{k:'',filmId:film.filmId}})
    }
  }
}
</script>

<style scoped lang="less">
.tag-li{
    padding: 15px;
    height: 94px;
    position: relative;
    &>div{
        position: absolute;
        left:90px;
        &>div:nth-child(2){
            padding-top:20px;
            font-size:14px
        }
    }
    button{
        position: absolute;
        border:1px solid orangered;
        color:orangered;
        background: #fff;
        border-radius: 4px;
        right:20px;
    }
}
</style>
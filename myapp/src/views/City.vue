<template>
    <div>
        <van-index-bar :index-list="indexList" @select="handleSelect">
            <div v-for="item of cityList" :key="item.type">
                <van-index-anchor :index="item.type" />
                    <van-cell :title="city.name" v-for="city of item.list" :key='city.cityId' @click="handleChangePage(item.list)"/>
            </div>
        </van-index-bar>

    </div>
</template>
<script>
import { IndexBar, IndexAnchor } from 'vant';
import api from '../util/app'
export default{
data(){
    return {
        cityList:[],
    }
},
mounted(){
    api({
       url:'https://m.maizuo.com/gateway?k=6808526' ,
       headers:{
        'X-Host': 'mall.film-ticket.city.list'
       }
    }).then(res=>{
        // console.log(res)
        this.cityList=this.handleCityData(res.data.data.cities)
    })
},
computed:{
    indexList(){
        return this.cityList.map(item=>item.type)
    }
},
methods:{
    handleCityData(data){
        let arr=[]
        let cities=[]
        for(let code=65;code<91;code++){
            arr.push(String.fromCharCode(code))
        }
        // console.log(arr)
        arr.forEach(el => {
          let list=data.filter(item=>{
               return item.pinyin.slice(0,1).toUpperCase()==el
            })
            if(list.length>0){
                cities.push({type:el,list:list})
            }
        });
        return cities
    },
    handleSelect(){

    },
    handleChangePage(list){//跳转回影院
        
    }
}
}
</script>
<style lang=''>
</style>
<template>
    <div>
        <van-index-bar>
            <div v-for="item of cityList" :key="data.type">
                <van-index-anchor :index="item.type" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
                    <van-cell title="文本" />
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
        cityList:[]
    }
},
mounted(){
    api({
       url:'https://m.maizuo.com/gateway?k=6808526' ,
       headers:{
        'X-Host': 'mall.film-ticket.city.list'
       }
    }).then(res=>{
        this.handleCityData(res.data.data.cities)
    })
},
methods:{
    handleCityData(data){

    }
}
}
</script>
<style lang=''>
</style>
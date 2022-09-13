<template>
    <div class="cinema" :style="{height:height+'px'}">
        <van-nav-bar title="影院"   left-text="返回"
             left-arrow 
             @click-left="onClickLeft"
            @click-right="onClickRight"
             >  
             <template #left>
                上海<van-icon name="arrow-down" color="#000" />
            </template>
            <template #right>
                <van-icon name="search" size="18" color="#000" />
            </template>
  </van-nav-bar>
        <ul>
            <li v-for="item of cinemaList" :key="item.cinemaId">
            <div>{{item.name}}{{item.lowPrice}}</div>
            <div >{{item.address}}</div>
        </li>
        </ul>
        <NavBar/>
    </div>
</template>
<script>
import NavBarVue from '@/components/NavBar.vue';
import api from '@/util/app'
import BScroll from 'better-scroll'
export default {
    components:{ NavBarVue},
    data(){
    return {
        cinemaList:[],
        height:0
    }
    },
    mounted(){
        this.height=document.documentElement.clientHeight-50
        api({
            url:'/api/gateway?cityId=310100&ticketFlag=1&k=1729500',
            headers:{'X-Host': 'mall.film-ticket.cinema.list'}
        }).then(res=>{
            this.cinemaList=res.data.data.cinemas
            this.$nextTick(()=>{
                new BScroll('.cinema',{
                    scrollbar:{fade:true}
                })
            })
        })
    },
    methods:{
        onClickLeft(){
            console.log('//');
            this.$router.push('/city')
        },
        onClickRight(){
            
        }
    }
}
</script>
<style lang='less'>
    .cinema{overflow: hidden;
        position: relative;/*修正滚动条的位置 */
    }
</style>
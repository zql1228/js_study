<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
           <slot></slot>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper,{Pagination} from 'swiper'
import 'swiper/swiper-bundle.min.css'
Swiper.use([Pagination]);
export default{
    data(){
    return {

    }
    },
    mounted(){
        new Swiper('.swiper-container',{
            loop: true, // 循环模式选项 
            // 如果需要分页器
            pagination: {
            el: ".swiper-pagination",
            clickable:true,
        },
        })
    }
}
</script>
<style lang=''>
</style>
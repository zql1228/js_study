<template>
  <div class="home">
    <film-swiper>
      <div class="swiper-slide" v-for="(item,index) of imgList" :key="index">
        <div :style="{backgroundImage:'url('+item+')'}"
        style="height:200px;background-size: cover;"></div>
      </div>
    </film-swiper>
    <FilmHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import FilmHeader from './films/FilmHeader.vue';
import FilmSwiper from './films/FilmSwiper.vue';
export default {
  name: 'HomeView',
  components: {
    FilmHeader,
    FilmSwiper,
   
  },
  data:()=>{
    return {
      dataList:[],
      imgList:[	'https://static.maizuo.com/pc/v5/usr/movie/88cedab84c72eba9cb2970533679c697.jpg?x-oss-process=image/quality,Q_70',
    	'https://static.maizuo.com/pc/v5/usr/movie/cb9742861d19ae2fc11554cc41fb09c6.jpg?x-oss-process=image/quality,Q_70',
      'https://static.maizuo.com/pc/v5/usr/movie/55b586292422173c55ba608b8cb94c8d.jpg?x-oss-process=image/quality,Q_70'
    ]
    }
  },
  mounted(){
  }
}
</script>

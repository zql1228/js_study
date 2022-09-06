<template>
  <div class="home">
    <TabBarVue />
    <ul>
      <li v-for="item of dataList">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  import TabBarVue from '@/components/TabBar.vue';
export default {
  name: 'HomeView',
  components: {
    TabBarVue
  },
  data:()=>{
    return {
      dataList:[]
    }
  },
  mounted(){
    axios({
      url:'https://m.maizuo.com/gateway?cityId=420100&pageNum=1&pageSize=10&type=1&k=2076142',
      headers:{
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16624565381673886194204673","bc":"420100"}',
      'X-Host': 'mall.film-ticket.film.list'
      }
    }).then((res)=>{
      console.log(res.data);
      this.dataList=res.data.data.films
    })
  }
}
</script>

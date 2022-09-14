<template>
  <div id="app">
    <router-view/>
    <NavBarVue v-show="$store.state.isTabbarshow"/>
  </div>
</template>
<script>
  import NavBarVue from './components/NavBar.vue'
  import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('some/nested/module')
  export default{
    components:{NavBarVue},
    data:()=>{
      return {

      }
    },
    computed:{
      ...mapState('TabbarModule',['isTabbarshow'] )
    },
    mounted(){

    }
  }
</script>
<style>
html,body,ul{
  margin:0;
  padding: 0;
  box-sizing: border-box;

}
</style>

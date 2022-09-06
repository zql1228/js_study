<template>
  <div id="app">
    <router-view/>
    <NavBar></NavBar>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue';
  export default{
    components:{NavBar},
    data:()=>{
      return {

      }
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

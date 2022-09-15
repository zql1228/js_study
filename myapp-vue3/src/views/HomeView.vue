<template>
  <div>姓名:{{name}}</div>
  <div>年龄:{{age}}</div>
  <input type="text" v-model="title"/>
  {{title}}
  <button>按钮</button>
</template>
<script>
import {reactive,toRefs} from 'vue'
export default{
  setup(){
    const state= reactive({
      name:'张三',
      age:18,
      title:''
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
<style lang='less'>

</style>


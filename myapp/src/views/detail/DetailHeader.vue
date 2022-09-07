<template>
    <div>{{title}}</div>
</template>
<script>
export default{
    props:{
        title:{
            type:String,
            default:''
        }
    },
    data(){
        return {

        }
    }
}
</script>
<style lang='less' scoped>
div{
    position: fixed;
    top:0;
    height:50px;
    width: 100%;
    text-align: center;
    background: #fff;
    line-height: 50px;
}
</style>
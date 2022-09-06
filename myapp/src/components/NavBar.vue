<template>
    <nav>
    <ul class="tab">
        <li><router-link to="/" active-class="active">电影</router-link></li>
        <li><router-link to="/ceima" active-class="active">影院</router-link></li>
        <li><router-link to="center" active-class="active">我的</router-link></li>
    </ul>
</nav>
</template>
<script>
export default{
    data(){
        return {

        }
    },

}
</script>
<style lang="less">
.tab{
    position:fixed;
    display:flex;
    height:50px;
    width: 100%;
    bottom:0;
    justify-content:space-between;
    align-items: center;
    border-top:1px solid #ccc; 
    li{
        list-style: none;
        flex: 1;
        text-align: center;
        flex-direction: column;
        a{color:#333;text-decoration: none;}
        .active{
    color:rgb(247, 40, 40)
}
    }
}

</style>
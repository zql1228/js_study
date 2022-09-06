<template>
    <nav>
    <ul class="tab">
        <router-link to="/films" active-class="active" tag="li">电影</router-link>
        <router-link to="/cinemas" active-class="active" tag="li">影院</router-link>
        <router-link to="/center" active-class="active" tag="li">我的</router-link>
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
    background: #fff;
    justify-content:space-between;
    align-items: center;
    border-top:1px solid #ccc; 
    li{
        list-style: none;
        flex: 1;
        text-align: center;
        flex-direction: column;
        // a{color:#333;text-decoration: none;}
        &.active{
        color:rgb(247, 40, 40)
        }
    }
}

</style>
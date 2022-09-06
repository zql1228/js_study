<template>
    <ul class="ul-tab"> 
        <router-link active-class="active" to="#/film/nowPlaying" tag="li"><span>正在热映</span></router-link>
        <router-link active-class="active" to="#/film/comingSoon"  tag="li"><span>即将上映</span></router-link>
    </ul>

</template>
<script>
export default{
data(){
    return {

    }
}
}
</script>
<style lang='less' scoped>
.ul-tab{
    display: flex;
    position: sticky;
    top:0;
    height: 50px;
    align-items: center;
    background: #fff;
    li{
        list-style: none;
        width:50%;
        text-align: center;
    }
    a{
        color:#333;
        font-size: 18px;
        text-decoration: none;
        
    }
    .active{color:orangered;
        span{border-bottom:1px solid orangered;padding-bottom: 10px;}
    }
}

</style>
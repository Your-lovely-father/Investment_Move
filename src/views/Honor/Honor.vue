<template>
    <div class="honor">
        <img src="../../assets/img/about.jpg" alt="">
        <myTitle
                :title="{name:'企业荣誉'}"
        >
            <span class="iconfont icon-rongyu2"></span>
        </myTitle>
        <div class="safeguard">
            <p>实力保障,选我们放心</p>
        </div>
        <div class="safeguard-image">
            <ul>
                <li>
                    <img src="../../assets/img/p9.png" alt="">
                </li>
                <li>
                    <img src="../../assets/img/p9.png" alt="">
                </li>
                <li>
                    <img src="../../assets/img/p9.png" alt="">
                </li>
                <li>
                    <img src="../../assets/img/p9.png" alt="">
                </li>
                <li>
                    <img src="../../assets/img/p9.png" alt="">
                </li>
                <li>
                    <img src="../../assets/img/p9.png" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import myTitle from '../../components/Pub/Headline/Headline'
    export default {
        name: "Honor",
        components:{
            myTitle
        }
    }
</script>

<style scoped>
    .honor {
        width: 100%;
    }

    .honor > img {
        width: 100%;
    }

    .safeguard {
        width: 100%;
        text-align: center;
    }

    .safeguard > p:nth-child(1) {
        font-weight: initial;
        font-size: 20px;
    }
    .safeguard-image>ul>li{
        padding: 20px 0;
    }
    .safeguard-image>ul>li:nth-child(4){
        padding-top: 0;
    }
    .safeguard-image>ul>li:nth-child(5){
        padding-top: 0;
    }
    .safeguard-image>ul>li:nth-child(6){
        padding-top: 0;
    }
    .safeguard-image>ul>li> img {
        width: 145px;
    }
    .safeguard-image>ul{
        display: flex;
        justify-content: space-around;
        flex-flow: wrap;
    }
    .safeguard-image {
        width: 100%;
    }
</style>

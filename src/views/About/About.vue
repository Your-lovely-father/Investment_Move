<template>
    <div class="about">
        <img src="../../assets/img/fuwu.jpg" alt="">
        <div class="about-title">
            <myTitle
                :title="{name:'关于我们'}"
            >
                <span class="iconfont icon-guanyuwomen4"></span>
            </myTitle>
        </div>
        <div class="text-box">
            <p class="title">全程陪伴你服务跟您一起成长</p>
            <p>
                您成长大连企业可立业可立刻陪您成长立刻陪您成长大连企业可立刻陪您成长
                大连企业可立刻陪您成长大连企业可立刻陪您成长大连企业可立刻陪您成长大连企业可
            </p>
        </div>
        <div class="label">
            <div class="label-tow">
                <div class="tow-left">
                    <p>我们的使命</p>
                    <p class="border"></p>
                    <p>向全球消费则转递快乐和惊喜</p>
                    <p>For global consumption, it delivers happiness and surprises</p>
                </div>
                <div class="tow-left right">
                    <p>我们的愿景</p>
                    <p class="border"></p>
                    <p>做最快的时尚百货第一品牌</p>
                    <p>Be the fastest fashion department store brand</p>
                </div>
                <div class="tow-left max">
                    <p>核心价值观</p>
                    <p class="border"></p>
                    <p>诚信|团结|创新|高效|责任|感恩|利他</p>
                    <p>Integrity |unity |unity |efficient  |responsibility  |gratitude |altruism</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import  myTitle from '../../components/Pub/Headline/Headline'
    export default {
        name: "About",
        components:{
            myTitle
        }
    }
</script>

<style scoped>
    .about-title{
        width: 100%;
    }
    .about {
        width: 100%;
    }

    .about {
        width: 100%;
        height: 200px;
    }

    .about>img{
        width: 100%;
        height: 200px;
    }
    .text-box{
        width: 80%;
        margin: 0 auto;
        text-align: center;
    }
    .title{
        font-weight: bold;
        font-size: 25px;
        padding:20px 0;
    }
    .text-box>p:nth-child(2){
        line-height: 26px;
        color: #333333;
    }
    .label{
        width: 100%;
        margin-top: 20px;
    }
    .label-tow{
        width: 555px;
        margin: 0 auto;
        clear: both;
    }
    .tow-left{
        width: 350px;
        box-shadow: 0 0 10px #eeeeee;
        padding: 20px 20px;
    }
    .tow-left>p:nth-child(1){
        color: #333333;
        font-size: 20px;
        padding: 10px 0;
        font-weight: bold;
    }
    .tow-left>p:nth-child(3){
        color: #1d8c9f;
        font-size: 20px;
        font-weight: bold;
        margin-top: 10px;
    }
    .tow-left>p:nth-child(4){
        color: #999999;
        margin-top: 10px;
    }
    .border{
        width: 60px;
        height: 3px;
        background: #e7d832;
    }
    .right{
        margin-top: 10px;
        float: right;
    }
    .max{
        margin-top: 180px;
    }
    .tow-left:hover{
        box-shadow: 0 0 5px #f00;
    }
</style>

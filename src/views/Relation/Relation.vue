<template>
    <div class="relation">
        <div class="image">
            <img src="../../assets/img/timg.jpg" alt="">
        </div>
        <myTitle
                :title="{name:'联系我们'}"
        >
            <span class="iconfont icon-lianxiwomen2"></span>
        </myTitle>
        <div class="relation-box" style="background-image: url('http://www.zhengye.citic:80/static/images/front_1/img/img33.jpg');">
            <div class="box-left">
                <div class="left-box">
                    <p class="title">辽宁大连可立刻有限公司</p>
                    <p><span class="iconfont icon-gongsi"></span></p>
                </div>
                <div class="left-box">
                    <p>浙江省宁波市杭州湾新区滨海六路28号</p>
                    <p><span class="iconfont icon-lianxiwomen1"></span></p>
                </div>
                <div class="left-box">
                    <p>4000-315-666</p>
                    <p><span class="iconfont icon-dianhua"></span></p>
                </div>
                <div class="left-box">
                    <p>FOTILE_borcci@borcci.com</p>
                    <p><span class="iconfont icon-youxiang"></span></p>
                </div>
                <div class="left-box">
                    <p>
                        邮编:315336
                    </p>
                    <p><span class="iconfont icon-youxiang"></span></p>
                </div>
                <div class="left-box">
                    <p>wiii22222</p>
                    <p><span class="iconfont icon-weixin1"></span></p>
                </div>
                <div class="left-box">
                    <p>9555555</p>
                    <p><span class="iconfont icon-qq1"></span></p>
                </div>
            </div>
<!--            <div class="box-right">-->
<!--                <img src="../../assets/img/weixiao.jpg" alt="">-->
<!--            </div>-->
        </div>
    </div>
</template>

<script>
    import myTitle from '../../components/Pub/Headline/Headline'

    export default {
        name: "Relation",
        components: {
            myTitle
        }
    }
</script>

<style scoped>
    .relation {
        width: 100%;
    }

    .image {
        width: 100%;
        height: 200px;
    }

    .image > img {
        width: 100%;
        height: 200px;
    }

    .relation-box {
        width: 100%;
        display: flex;
    }

    .box-left {
        width: 70%;
    }

    .left-box {
        width: 100%;
        height: 80px;
        background: #eeeeee;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 20px;
        margin: 20px 0;
        color:rgba(4, 14, 53, 0.8);
        box-shadow: 0 0 10px rgba(4, 14, 53, 0.8);

    }
    .title{
        font-size: 24px;
        font-weight: bold;
    }
    .left-box > p:nth-child(1) {
        width: 300px;
    }

    .left-box > p:nth-child(2) {
        margin-left: 20px;
    }

    .left-box > p:nth-child(2) > .iconfont {
        font-size: 40px;
    }
    /*.box-right{*/
    /*    width: 30%;*/
    /*    margin-left: 55px;*/
    /*}*/
    .box-right>img{
        width: 100%;
    }
    .left-box:hover{
        transform: scale(1.08);
        transition: all 0.3s;
        box-shadow: 0 0 10px #f00;
    }

</style>

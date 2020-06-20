<template>
    <div class="league">
        <img src="../../assets/img/yitong.jpg" alt="">
        <div class="league-title">
            <myTitle
                    :title="{name:'招商加盟'}"
            >
                <span class="iconfont icon-_dailijiameng"></span>
            </myTitle>
        </div>
        <div class="trumpet">
            <div class="trumpet-left">
                <span class="iconfont icon-xiaolaba"></span>
            </div>
            <div class="trumpet-right">
                <el-carousel height="35px" direction="vertical" :autoplay="true">
                    <el-carousel-item v-for="(item,index) in textList" :key="index">
                        <span>{{ item.name }}</span>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <div class="condition">
            <Title
                    :title="{name:'十大核心竞争力'}"
            />
        </div>
        <div class="kernel">
            <div class="kernel-box">
                <div class="title-box">
                    <p>500平方米创库物流中心</p>
                    <p>为客户提供货品，3.9亿库存</p>
                </div>
                <div class="image">
                    <img src="../../assets/img/qiye.jpg" alt="">
                </div>
            </div>
            <div class="kernel-box">
                <div class="title-box">
                    <p>500平方米创库物流中心</p>
                    <p>为客户提供货品，3.9亿库存</p>
                </div>
                <div class="image">
                    <img src="../../assets/img/qiye.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="kernel-content-box">
            <div class="box">
                <div class="box-title">
                    <p>500平方米创库物流中心</p>
                    <p>为客户提供货品，3.9亿库存</p>
                </div>
                <div class="box-image">
                    <img src="../../assets/img/qiye.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="condition">
            <Title
                    :title="{name:'八大支持体系'}"
            />
        </div>
        <div class="eight">
           <div class="slogan">
               <p>从选址到后期运营，我们一路保驾护航</p>
           </div>
            <div class="eight-content">
                <img src="../../assets/img/yy.png" alt="">
            </div>
        </div>
        <div class="condition">
            <Title
                    :title="{name:'加盟流程图'}"
            />
        </div>
        <div class="flow">
            <img src="../../assets/img/flow.gif" alt="">
        </div>
    </div>
</template>

<script>
    import myTitle from '../../components/Pub/Headline/Headline'
    import Title from '../../components/Pub/Headline/Caption'
    export default {
        name: "League",
        components: {
            myTitle,
            Title
        },
        data(){
            return{
                textList:[
                    {name:'火热招商中:总监联系电话159-429-99924'},
                    {name:'火热招商中:客服联系电话159-429-99924'}
                ]
            }
        }
    }
</script>

<style scoped>
    .league {
        width: 100%;
    }

    .league > img {
        width: 100%;
        height: 200px;
    }

    .trumpet {
        width: 100%;
        display: flex;
        height: 35px;
        align-items: center;
        box-shadow: 0 0 10px #1d8c9f;
    }
    .trumpet-left{
        width: 8%;
        padding-left: 20px;
    }
    .trumpet-left>.iconfont{
        font-size: 35px;
        font-weight: bold;
        color: red;
    }
    .trumpet-right{
        width: 92%;
        height: 35px;
        line-height: 35px;
        padding-right: 20px;
    }
    .trumpet-right>>>.el-carousel__container{
        height: 35px !important;
    }
    .trumpet-right>>>.el-carousel__indicators{
        display: none;
    }
    .condition{
        width: 100%;
    }
    .kernel{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    .kernel-box{
        width: 270px;
        text-align: center;
    }
    .title-box{
        width: 100%;
        color: #ffffff;
        background-color: rgba(4, 14, 53, 0.8);
    }
    .title-box>p:nth-child(1){
        font-size: 22px;
        padding: 10px 0;
    }
    .title-box>p:nth-child(2){
       padding-bottom: 10px;
    }
    .image{
        width: 100%;
    }
    .image>img{
        width: 100%;
    }
    .kernel-content-box{
        width: 100%;
    }
    .box{
        width: 98%;
        margin: 0 auto;
    }

    .box-title{
        width: 100%;
        color: #ffffff;
        background-color: rgba(4, 14, 53, 0.8);
        text-align: center;

    }
    .box-title>p:nth-child(1){
        font-size: 22px;
        padding: 10px 0;
    }
    .box-title>p:nth-child(2){
        padding-bottom: 10px;
    }
    .box-image{
        width: 100%;
    }
    .box-image>img{
        width: 100%;
    }
    .eight{
        width: 100%;
    }
    .slogan{
        width: 100%;
        text-align: center;
    }
    .eight-content{
        width: 98%;
        margin: 0 auto;
        margin-top: 20px;
    }
    .eight-content>img{
        width: 100%;
    }
    .flow{
        width: 98%;
        margin: 0 auto;
    }
    .flow>img{
        width: 100%;
    }
</style>

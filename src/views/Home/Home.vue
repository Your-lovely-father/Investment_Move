<template>
    <div class="home">
        <div class="swiper">
            <el-carousel trigger="click" height="200px">
                <el-carousel-item v-for="(itme,index) in imgList"  :key="index">
                    <img :src="itme.image" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <myTitle
                :title="{name:'我们的价值观'}"
        />
        <div class="value">
            <img src="http://img.ljcdn.com/midichlorian/80bad3a1-6721-11e9-bef2-c1a07f9a5e49.png" alt="">
        </div>
        <myTitle
                :title="{name:'合作伙伴'}"
        />
        <div class="cooperation">
            <img src="../../assets/img/hezuo.png" alt="">
        </div>
        <myTitle
                :title="{name:'新闻动态'}"
        />
        <div class="dynamic">
            <div class="dynamic-box">
                <img src="../../assets/img/yiqing.jpg" alt="">
                <p>
                    贝壳找房捐赠1000万元人民币支持湖北抗击疫情
                </p>
            </div>
            <div class="dynamic-box">
                <img src="../../assets/img/yiqing.jpg" alt="">
                <p>
                    贝壳找房捐赠1000万元人民币支持湖北抗击疫情
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import myTitle from '../../components/Pub/Headline/Caption'
    export default {
        name: "home",
        components:{
            myTitle
        },
        data(){
            return{
                imgList:[
                    {
                        image:require('../../assets/img/aa.jpg')
                    },
                    {
                        image:require('../../assets/img/cc.jpg')
                    },
                    {
                        image:require('../../assets/img/yy.jpg')
                    }
                ]
            }
        }
    }
</script>

<style scoped>
.home{
    width: 100%;
}
.swiper{
    width: 100%;
}
.swiper>img{
    width: 100%;
}
.value{
    width: 90%;
    margin: 0 auto;
}
.value>img{
    width: 100%;
}
.cooperation{
    width: 90%;
    margin: 0 auto;
}
.cooperation>img{
    width: 100%;
}
.dynamic{
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.dynamic-box{
    width: 240px;
    position: relative;
}
.dynamic-box>img{
    width: 100%;
}
.dynamic-box>p{
    color: #ffffff;
    width: 100%;
    height: 30px;
    line-height: 30px;
    position: absolute;
    bottom: 0;
    left: 0;
    background:rgba(0,0,0,0.6);
    font-size: 10px;
    text-align: center;
}
</style>

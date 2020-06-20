<template>
    <div class="product">
        <img src="../../assets/img/anli.jpg" alt="">
        <div class="title">
            <myTitle
                    :title="{name:'案例中心'}"
            >
                <span class="iconfont icon-anli1"></span>
            </myTitle>
            <p>
                社会发展过程中，人们对舒适的建筑热环境的追求越来越高，
                益提高。与此同时，越来越多的企业也开始逐渐意识到对节能环保和可持续发展的战略投资，将会对企业
            </p>
        </div>
        <div class="case">
            <div class="case-box">
                <img src="../../assets/img/gaoji.jpeg" alt="">
               <div class="text">
                   <p class="case-box-title">国际产品</p>
                   <p class="border"></p>
                   <p class="describe">非常牛逼....</p>
               </div>
            </div>
            <div class="case-box">
                <img src="../../assets/img/gaoji.jpeg" alt="">
                <div class="text">
                    <p class="case-box-title">国际产品</p>
                    <p class="border"></p>
                    <p class="describe">非常牛逼....</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import myTitle from '../../components/Pub/Headline/Headline'
    export default {
        name: "Product",
        components:{
            myTitle
        }
    }
</script>

<style scoped>
    .product {
        width: 100%;
    }
    .product>img{
        width: 100%;
        height: 200px;
    }
    .title{
        width: 100%;
        text-align: center;
    }
    .title>p{
        width: 80%;
        margin: 0 auto;
        color: #333;
    }
    .case{
        width: 100%;
        margin-top: 30px;
        display: flex;
        justify-content: space-around;
    }
    .case-box{
        width: 250px;
        border-radius: 5px;
        box-shadow: 0 0 10px #eeeeee;
    }
    .case-box>img{
        width: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    .text{
        padding: 0 20px;
    }
    .text>.case-box-title{
        font-size: 18px;
        font-weight: bold;
        padding: 10px 0;
    }
    .text>.describe{
        color: #333333;
        padding: 10px 0;
    }
    .border{
        border-top:1px solid #eeeeee;
    }
</style>

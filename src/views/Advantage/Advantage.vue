<template>
    <div class="advntage">
        <img src="../../assets/img/tuan.jpg" alt="">
        <myTitle
                :title="{name:'平台优势'}"
        >
            <span class="iconfont icon-tuiguangyoushi"></span>
        </myTitle>
        <div class="company">
            <div class="company-box">
                <div class="company-box-left">
                    <img src="../../assets/img/logo2.png" alt="">
                </div>
                <div class="company-box-right">
                    <p>1997年</p>
                    <p>可以刻有限公司成立</p>
                    <p>
                      的理念,制定发展规划，确立战略目标，以远见卓识的战略持续推动规划的实施和目标的达成。
                    </p>
                </div>
            </div>
        </div>
        <div class="title-user">
            <Title
            :title="{name:'用户价值'}"
            />
        </div>
        <div class="user">
            <div class="user-box">
                <div class="user-box-left">
                    <img src="http://img.ljcdn.com/midichlorian/052729f1-ab56-11e8-b5f5-55c168a58b42.png" alt="">
                </div>
                <div class="user-box-right">
                    <p class="title">真信息</p>
                    <p class="describe">
                        真房源数据库“楼盘字典”。收录超过1亿套房屋，一套房屋433
                        个字段描述，20万经纪人参与动态维护。7x24小时全生命周期真房源验真系统。
                    </p>
                </div>
            </div>
            <div class="user-box unify">
                <div class="user-box-right">
                    <p class="title">真价格</p>
                    <p class="describe">
                        真房源数据库“楼盘字典”。收录超过1亿套房屋，一套房屋433
                        个字段描述，20万经纪人参与动态维护。7x24小时全生命周期真房源验真系统。
                    </p>
                </div>
                <div class="user-box-left ">
                    <img src="http://img.ljcdn.com/midichlorian/6a84ad51-ab55-11e8-b5f5-55c168a58b42.png" alt="">
                </div>
            </div>
            <div class="user-box unify">
                <div class="user-box-left">
                    <img src="http://img.ljcdn.com/midichlorian/fd1df951-ab55-11e8-b5f5-55c168a58b42.png" alt="">
                </div>
                <div class="user-box-right">
                    <p class="title">真体验</p>
                    <p class="describe">
                        真房源数据库“楼盘字典”。收录超过1亿套房屋，一套房屋433
                        个字段描述，20万经纪人参与动态维护。7x24小时全生命周期真房源验真系统。
                    </p>
                </div>
            </div>
            <div class="user-box unify">
                <div class="user-box-right">
                    <p class="title">真服务</p>
                    <p class="describe">
                        真房源数据库“楼盘字典”。收录超过1亿套房屋，一套房屋433
                        个字段描述，20万经纪人参与动态维护。7x24小时全生命周期真房源验真系统。
                    </p>
                </div>
                <div class="user-box-left">
                    <img src="http://img.ljcdn.com/midichlorian/52e2df51-ab55-11e8-b5f5-55c168a58b42.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import myTitle from '../../components/Pub/Headline/Headline'
    import Title from '../../components/Pub/Headline/Caption'
    export default {
        name: "Advantage",
        components:{
            myTitle,
            Title
        }
    }
</script>

<style scoped>
    .advntage {
        width: 100%;
    }
    .advntage>img{
        width: 100%;
        height: 200px;
    }
    .company{
        width: 100%;
        background: #eeeeee;
        padding: 20px 0;
    }
    .company-box{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    .company-box-left{
      width: 30%;
        margin-top: 50px;
    }
    .company-box-left>img{
        width: 100%;
    }
    .company-box-right{
        width: 50%;
    }
    .company-box-right>p:nth-child(1){
        color: #dbc07f;
        font-size: 25px;
        font-weight: bold;
    }
    .company-box-right>p:nth-child(2){
        font-size: 22px;
        padding: 10px 0;
    }
    .company-box-right>p:nth-child(3){
            color: #999999;
    }
    .title-user{
        width: 100%;
    }
    .user{
        width: 100%;
    }
    .user-box{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    .user-box-left{
        width: 40%;
        margin-top: 30px;
    }
    .user-box-left>img{
        width: 100%;
    }
    .user-box-right{
        width: 40%;
    }
    .user-box-right>.title{
        color: #1a60e9;
        font-size: 22px;
    }
    .describe{
        color: #757678;
    }
    .unify{
        margin-top: 30px;
    }
</style>

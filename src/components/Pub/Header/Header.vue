<template>
    <div class="box">
        <div class="header">
            <div class="logo">
                <img src="../../../assets/img/logo1.png" alt="">
            </div>
            <div class="icon" @click="drawer = true" type="primary">
                <span class="iconfont icon-category"></span>
            </div>
        </div>

        <el-drawer
                :visible.sync="drawer"
                :with-header="false"
        >
            <ul class="nav">
                <router-link to="/" tag="li">首页</router-link>
                <router-link to="/advantage" tag="li">平台优势</router-link>
                <router-link to="/honor" tag="li">企业荣誉</router-link>
                <router-link to="/league" tag="li">招商加盟</router-link>
                <router-link to="/product" tag="li">产品与案例</router-link>
                <router-link to="/relation" tag="li">联系我们</router-link>
                <router-link to="/about" tag="li">关于我们</router-link>
            </ul>
        </el-drawer>

    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                drawer: false,
            };
        }
    }
</script>

<style scoped>
    .box {
        width: 100%;
    }

    .header {
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
        background-color: rgba(4, 14, 53, 0.8);
        justify-content: space-between;
    }

    .logo {
        margin-left: 30px;
    }

    .logo > img {
        width: 105px;
        height: 35px;
    }

    .icon {
        color: #ffffff;
        margin-right: 30px;
    }

    .icon >>> .el-button--primary {
        background: none;
        border: none;
    }

    .icon >>> .el-button {
        background: none;
    }

    .iconfont {
        font-size: 30px;
    }

    .nav {
        width: 100%;
        font-size: 10px;
        text-align: center;
    }
    .nav>li{
        line-height: 70px;
    }
    .nav>li:hover{
        background-color:black;
        color: #ffffff;
    }
</style>

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
                <li  v-for="(item, index) in navList"  :key="index">
                    <router-link :to="item.link" tag="li">{{ item.name }}</router-link>
                </li>
            </ul>
        </el-drawer>

    </div>
</template>

<script>
    import Api from '../../../api/pub/pub'

    export default {
        name: "Header",
        data() {
            return {
                drawer: false,
                navList: [
                    {
                        link: '/',
                        name: ''
                    }, {
                        link: '/advantage',
                        name: '',
                    },
                    {
                        link: '/honor',
                        name: ''
                    },
                    {
                        link: '/league',
                        name: ''
                    },
                    {
                        link: '/product',
                        name: ''
                    },
                    {
                        link: '/relation',
                        name: ''
                    },
                    {
                        link: '/about',
                        name: ''
                    },
                ],
            };
        },
        methods: {
            getNav() {
                Api.getNav().then((res) => {
                    this.navList[0].name = res.data[0].name,
                    this.navList[1].name = res.data[1].name,
                    this.navList[2].name = res.data[2].name,
                    this.navList[3].name = res.data[3].name,
                    this.navList[4].name = res.data[4].name,
                    this.navList[5].name = res.data[5].name,
                    this.navList[6].name = res.data[6].name
                })
            },
        },
        mounted() {
            this.getNav()
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

    .nav > li {
        line-height: 70px;
    }

    .nav > li:hover {
        background-color: black;
        color: #ffffff;
    }
</style>

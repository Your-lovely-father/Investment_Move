<!--
 * @Descripttion:
 * @version:
 * @Date: 2020-04-08 13:20:18
 -->
<template>
    <div class="con-layout-container">
        <myHeader/>
        <router-view></router-view>
    </div>
</template>

<script>
    import myHeader from "./Header/Header";

    export default {
        name: "layout",
        components: {
            myHeader,
        },
    };
</script>

<style scoped lang="stylus">
</style>

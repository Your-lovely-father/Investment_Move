<template>
    <div class="headline">
        <p>
            <slot></slot>
            {{title.name}}</p>
    </div>
</template>

<script>
    export default {
        name: "Headline",
        props:{
            title:{
               type:Object,
               default:{}
           }
        }
    }
</script>

<style scoped>
    .headline {
        width: 100%;
        text-align: center;
        padding: 30px 0;
    }

    .headline > p:nth-child(1) {
        font-size: 20px;
        color:rgba(4, 14, 53, 0.8);
    }
    .iconfont{
        font-size: 30px;
        font-weight: bold;
        display: block;
    }
</style>

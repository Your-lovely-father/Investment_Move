<template>
    <div class="caption">
       <div class="caption-box">
           <p class="title">
               {{title.name}}
           </p>
           <p class="border"></p>
       </div>
    </div>
</template>

<script>
    export default {
        name: "Caption",
        props:{
            title:{
                type:Object,
                default:{}
            }
        }
    }
</script>

<style scoped>
    .caption {
        width: 100%;
        padding: 20px 0;
    }
    .caption-box{
        width: 100%;
        margin: 0 auto;
        text-align: center;
    }
    .title{
        font-size: 23px;
        color:rgba(4, 14, 53, 0.8);
        font-weight: bold;
    }
    .border {
        width: 80px;
        height: 2px;
        background: #3072f3;
        text-align: center;
        margin: 0 auto;
        margin-top: 5px;
    }
</style>
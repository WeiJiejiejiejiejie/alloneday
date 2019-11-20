<template>
    <div class="tuijian-max-div">
        <h3 class="tuijian-min-h3">。。。</h3>
        <img class="tuijian-max-img" src="../../../assets/images/chengQ/tuijian/tuijian-max.jpg" alt="">
        <h2 class="tuijian-max-h2">她们的出游照，太美了吧！</h2>
        <p class="tuijian-max-p">今天就来欣赏一下吧。每次做这种征集都忍不住感叹，我到底拥有怎样一群神仙读者啊，长得美、还那么会拍，今天就来欣赏一下吧。每次做这种征集都忍不住感叹，我到底拥有怎样一群神仙读者啊，长得美、还那么会拍</p>
        <div  class="tuijian-max-div1">
            <span class="tuijian-max-span-left">黎贝卡的异想世界</span>
            <span class="tuijian-max-span-right">1.8w</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "chengQ-tuijian-max"
    }
</script>

<style scoped>
    .tuijian-max-div{
        border-bottom: 0.01rem solid #999;
    }
    .tuijian-min-h3{
        width: 96%;
        margin: 0 auto;
        text-align: right;
        padding-right: 4%;
        padding-bottom: 0.05rem;
        font-size: 0.12rem;
        font-weight: 400;
    }
    .tuijian-max-img{
        width: 96%;
        margin: 0 auto;
    }
    .tuijian-max-h2{
        width: 96%;
        margin: 0 auto;
        text-align: left;
        padding-left: 4%;
        font-size: 0.16rem;
        font-weight: 600;
    }
    .tuijian-max-p{
        width: 96%;
        margin: 0 auto;
        text-align: left;
        padding-left: 4%;
        color: #666666;
        display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
        -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
        -webkit-line-clamp: 2; /** 显示的行数 **/
        overflow: hidden;  /** 隐藏超出的内容 **/
    }
    .tuijian-max-div1{
        width: 96%;
        margin: 0 auto;
        text-align: left;
        color: #666666;
        padding: 0.05rem 0 0.1rem 4%;
    }
    .tuijian-max-span-left{

    }
    .tuijian-max-span-right{
        float: right;
        padding-right: 4%;
    }
</style>
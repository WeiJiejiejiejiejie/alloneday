<template>
    <div class="swiper-container z_swiper1" >
        <div class="btn">
            <input type="text" class="swiper-button-prev z-swiper-button-prev z-swiper-button1" value="推荐">
            <input type="text" class="swiper-button-next z-swiper-button-center z-swiper-button1" value="买家秀">
            <input type="text" class="swiper-button-next z-swiper-button-next z-swiper-button1" value="关注">
        </div>
        <!--<div class="swiper-pagination one"></div>-->
        <div class="swiper-wrapper z-swiper-wrapper1">
            <div class="swiper-slide box1">
                <tuijian></tuijian>
            </div>
            <div class="swiper-slide box2">
                <maijiaxiu></maijiaxiu>
            </div>
            <div class="swiper-slide box3">
                <guanzhu></guanzhu>
            </div>
        </div>
        <!--分页器-->
        <!--< input class = "btn btn-gray swiper-button-prev" name = "" type = "button" value = "上一题" >-->
        <!--< input class = "btn btn-gray swiper-button-next" name = "" type = "button" value = "下一题" >-->
    </div>
</template>

<script>
    import Swiper from "swiper";

    import tuijian from "./chengQ-tuijian-all";
    import maijiaxiu from "./chengQ-maijiaxiu-all";
    import guanzhu from "./chengQ-guanzhu-all";

    export default {
        name: "content_banner",
        components:{
            tuijian,
            maijiaxiu,
            guanzhu
        },
        props:['data'],
        mounted() {
            this._initSwiper()
        },
        methods: {
            _initSwiper() {
                new Swiper(".z_swiper1", {
                    // direction: "vertical",
                    // effect: "flip",
                    // 如果需要分页器

                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable :true,
                    },
                    observer:true,//修改swiper自己或子元素时，自动初始化swiper
                    observeParents:true//修改swiper的父元素时，自动初始化swiper
                })
            }
        }
    }

</script>

<style >
    @import "../../../node_modules/swiper/css/swiper.css";
    .z_swiper1 {
        width: 100%;
        min-height: 1.85rem;
        margin-top: -0.1rem;
        /*给按钮留空间 */
        padding-top: 0.30rem;
        /*background-color: white;*/
        text-align: center;
        position: relative;
    }
    .box1,.box2,.box3 {
        min-height: 1.85rem;
    }
    /*改造分页器*/
    .btn{
        position: absolute;
        width: 100%;
        top: 0;
    }
    .z-swiper-button1{
        width: 33%;
        height: 0.3rem;
        text-align: center;
        margin: 0!important;
        border: none;
        border-bottom: 2px solid white;
        outline: none;
        color: black;
    }
    .z-swiper-button-prev{
        left: 0;
    }
    .z-swiper-button-center{
        left: 33.5%;
    }
    .z-swiper-button-next{
        right: 0;
    }
    .z-swiper-wrapper1{
        margin-top: 0.03rem;
    }
</style>
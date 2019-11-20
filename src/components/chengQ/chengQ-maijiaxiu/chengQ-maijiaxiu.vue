<template>
    <div>
        <img class="maijiaxiumax" src="../../../assets/images/chengQ/maijiaxiu/tuijianmax.png" alt="">
        <ul>
            <li class="maijiaxiu-li">
                <a href="#/maijiaxiu">
                    <div class="maijiaxiu-user">
                        <img src="../../../assets/images/chengQ/maijiaxiu/tuijainuser.png" alt="">
                        <span>jsycyoma</span>
                    </div>
                    <div class="maijiaxiu-img">
                        <img src="../../../assets/images/chengQ/maijiaxiu/tuijinamin1.png" alt="">
                    </div>
                    <div class="maijiaxiu-p">
                        <p>项链超美！超级喜欢！</p>
                    </div>
                    <div class="maijiaxiu-bottom">
                        <h3>SWAROVSKI</h3>
                        <P>1<span><img src="../../../assets/images/chengQ/maijiaxiu/dianzan.png" alt=""></span></P>
                    </div>
                </a>
            </li>
            <li class="maijiaxiu-li">
                <a href="#/maijiaxiu">
                    <div class="maijiaxiu-user">
                        <img src="../../../assets/images/chengQ/maijiaxiu/tuijainuser.png" alt="">
                        <span>jsycyoma</span>
                    </div>
                    <div class="maijiaxiu-img">
                        <img class="maijiaxiu-img-css2" src="../../../assets/images/chengQ/maijiaxiu/tuijainmin2.png" alt="">
                    </div>
                    <div class="maijiaxiu-p">
                        <p>给媳妇儿买的，刚收到！媳妇儿之前用过效果不错！</p>
                    </div>
                    <div class="maijiaxiu-bottom">
                        <h3>SWAROVSKI</h3>
                        <P>1<span><img src="../../../assets/images/chengQ/maijiaxiu/dianzan.png" alt=""></span></P>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "chengQ-maijiaxiu"
    }
</script>

<style scoped>
    .maijiaxiumax{
        width: 100%;
    }

    .maijiaxiu-li{
        display: inline-block;
        width: 48%;
        margin: 1%;
        background-color: white;
    }
    .maijiaxiu-user{
        text-align: left;
    }
    .maijiaxiu-user img{
        width: 15%;
        border-radius: 50%;
    }
    .maijiaxiu-user span{
        font-size: 0.16rem;
        line-height: 100%;
    }
    .maijiaxiu-img{

    }
    .maijiaxiu-img img{
        width: 100%;
    }
    /*.maijiaxiu-img-css2{*/
    /*    width: 100%;*/
    /*    !*height: 78%;*!*/
    /*}*/
    .maijiaxiu-p{

    }
    .maijiaxiu-p p{
        font-size: 0.13rem;
        text-align: left;
        padding: 0.05rem 0;
        line-height: 0.25rem;
        padding-left: 0.05rem;
    }
    .maijiaxiu-bottom{
        text-align: left;
        padding-bottom: 0.05rem;
    }
    .maijiaxiu-bottom h3{
        font-size: 0.16rem;
        display: inline-block;
        padding-left: 0.05rem;
    }
    .maijiaxiu-bottom p{
        display: inline-block;
        float: right;
    }
    .maijiaxiu-bottom p span{
        padding-top: 0.05rem;
        width: 10%;
    }
</style>
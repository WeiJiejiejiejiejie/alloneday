<template>
    <div style="margin-top: -0.4rem">
    <van-nav-bar
            title="OFashion迷橙"
            left-text="返回"
            right-text="按钮"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
    />
    <div class="goods">
        <van-swipe class="goods-swipe" :autoplay="3000">
            <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
                <img :src="thumb" >
            </van-swipe-item>
        </van-swipe>
        <van-cell-group>
            <van-cell>
                <div class="goods-title">{{ goods.title }}</div>
                <div class="goods-title">{{ goods.titlet }}</div>
                <div class="goods-price">{{ formatPrice(goods.price) }}</div>
                <div class="wei-goods-three"><span>收藏：{{goods.collect}}</span><span>已售出：{{goods.been_sold}}</span><span>买家秀：{{goods.buyer_show}}</span></div>
                <hr style="border: 0.005rem solid #ccc"/>
                <div class="wei-reduceprice"><span>优惠券</span><span>满5000减100</span><span>满3000减50</span><span><img src="../../public/assets/weiimg/common_arrow.png"></span></div>
                <hr style="border: 0.005rem solid #ccc"/>
                <div class="wei-goods-from">-商品来自于-</div>
                <div class="goods-title"><img src="https://img4.ofashion.com.cn/register/seller/20181218/566822817.042052.jpg?x-oss-process=image/resize,w_360/format,webp"/></div>
                <div class="goods-title" style="font-size: 0.14rem">{{ goods.store_name }}</div>
                <div class="wei-img-country"><img src="../../public/assets/weiimg/common_locationicon.png"/>中国</div>
                <div class="wei-goods-four">
                    <div>
                        <span>1242</span><br>
                        <span>全部分类</span>
                    </div>
                    <div>
                        <span>1242</span><br>
                        <span>全部分类</span>
                    </div>
                    <div>
                        <span>1242</span><br>
                        <span>全部分类</span>
                    </div>
                    <div>
                        <span>1242</span><br>
                        <span>全部分类</span>
                    </div>

                </div>
            </van-cell>
        </van-cell-group>


        <van-goods-action>
            <van-goods-action-icon icon="chat-o" @click="sorry">
                客服
            </van-goods-action-icon>
            <van-goods-action-icon icon="cart-o" @click="onClickCart">
                购物车
            </van-goods-action-icon>
            <van-goods-action-button type="warning" @click="sorry">
                加入购物车
            </van-goods-action-button>
            <van-goods-action-button type="danger" @click="sorry">
                立即购买
            </van-goods-action-button>
        </van-goods-action>
    </div>
    </div>
</template>

<script>
    import {
        NavBar,
        Tag,
        Col,
        Icon,
        Cell,
        CellGroup,
        Swipe,
        Toast,
        SwipeItem,
        GoodsAction,
        GoodsActionIcon,
        GoodsActionButton
    } from 'vant';
    export default {
        name: "detail",
        components: {
            [NavBar.name]: NavBar,
            [Tag.name]: Tag,
            [Col.name]: Col,
            [Icon.name]: Icon,
            [Cell.name]: Cell,
            [CellGroup.name]: CellGroup,
            [Swipe.name]: Swipe,
            [SwipeItem.name]: SwipeItem,
            [GoodsAction.name]: GoodsAction,
            [GoodsActionIcon.name]: GoodsActionIcon,
            [GoodsActionButton.name]: GoodsActionButton
        },
        data() {
            return {
                goods: {
                    "store_name":"潮流买手店",
                    "collect":"133",
                    "been_sold":"9",
                    "buyer_show":"0",
                    title: 'VALENTINO',
                    titlet:'Rose同款 黑色徽标针织套衫',
                    price: 6330,
                    express: '免运费',
                    remain: 19,
                    thumb: [

                        'https://img.ofashion.com.cn/public/goods/sale_quote/20191109/861342/41445dc5bb7e22b6d/5949324783666610_60585327.jpg?x-oss-process=image/resize,w_750/format,webp',
                        'https://img.ofashion.com.cn/public/goods/sale_quote/20191109/861342/12925dc5bb928e4ad/5949324988608280_82661370.jpg?x-oss-process=image/resize,w_750/format,webp',
                        'https://img.ofashion.com.cn/public/goods/sale_quote/20191109/861342/65405dc5bb83acaeb/5949324839930260_13828601.jpg?x-oss-process=image/resize,w_750/format,webp',
                        'https://img5.ofashion.com.cn/public/goods/sale_quote/20191109/861342/20245dc5bba6437b7/5949325185305330_81912721.jpg?x-oss-process=image/resize,w_750/format,webp',
                        'https://img4.ofashion.com.cn/public/goods/sale_quote/20191109/861342/66555dc5bb83902ab/5949324839733040_96857774.jpg?x-oss-process=image/resize,w_750/format,webp'
                    ]
                }
            };
        },
        methods: {
            formatPrice() {
                return '¥' + (this.goods.price ).toFixed(2);
            },
            onClickCart() {
                this.$router.push('cart');
            },
            sorry() {
                Toast('暂无后续逻辑~');
            }
        }
    };
</script>

<style lang="less">
    .goods {
        padding-bottom: 50px;
        &-swipe {
            img {
                width: 100%;
                display: block;
            }
        }
        &-title {
            font-size: 16px;
        }
        &-price {
            color: #f44;
        }
        &-express {
            color: #999;
            font-size: 12px;
            padding: 5px 15px;
        }
        &-cell-group {
            margin: 15px 0;
            .van-cell__value {
                color: #999;
            }
        }
        &-tag {
            margin-left: 5px;
        }
        .goods-swipe img{
            height: 3.6rem;
        }
        .goods-title{
            text-align: center;
        }
        .goods-price{
            text-align: center;
        }
        .wei-goods-three{
            text-align: center;
        }
        .wei-goods-three span{
            font-size: 0.1rem;
            padding: 0.1rem;
        }
       .goods-cell-group{
            margin-top: 0;
        }
        .wei-goods-from{
            width: 100%;
            margin: 0.13333rem auto 0;
            text-align: center;
            color: #333;
            font-size: 14px;
            background: #fff;
        }
        .goods-title img{
            width: 0.6rem;
            height: 0.6rem;
            margin: 0 auto;
            border-radius:0.8rem;
        }
        .wei-img-country{
            line-height: 0.2rem;
            width: 100%;
            text-align: center;
        }
        .wei-reduceprice{
            width: 100%;
            height: 0.4rem;
            line-height: 0.4rem;
        }
        .wei-reduceprice span:nth-child(1){
            float: left;
        }
        .wei-reduceprice span:nth-child(2){
            margin: 0 .11667rem 0 0;
            padding: 0.06667rem 0.26667rem;
            color: #fff;
            font-size: 12px;
            height: 0.3rem;
            background: #f71;

        }
        .wei-reduceprice span:nth-child(3){
            margin: 0 .11667rem 0 0;
            padding: 0.06667rem 0.26667rem;
            color: #fff;
            height: 0.3rem;
            font-size: 12px;
            background: #f71;
        }
        .wei-reduceprice span:nth-child(4) img{
            padding-top: 0.1rem;
            float: right;
        }
        .van-nav-bar__title{
            font-weight: 700;
        }
        .wei-goods-four{
            width: 90%;
            text-align: center;
            display: flex;
            margin: 0 auto;
            justify-content: space-around;
        }
        .wei-goods-four div{
            width: 25%;
            text-align: center;
        }

    }
</style>

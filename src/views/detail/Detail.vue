<template>
  <div id="detail">
    <DetailNavBar @titleClick="titleClick"></DetailNavBar>
    <DetailSwiper :topImages="topImages"></DetailSwiper>
    <DetailBaseInfo :goods="goods"></DetailBaseInfo>
    <DetailShopInfo :shop="shop"></DetailShopInfo>
    <DetailGoodsInfo :detailInfo="detailInfo"></DetailGoodsInfo>
    <DetailParamsInfo :paramsInfo="paramsInfo" ref="params"></DetailParamsInfo>
    <DetailCommentInfo
      :commentInfo="commentInfo"
      ref="comment"
    ></DetailCommentInfo>
    <GoodsList :good="recommendList" ref="recommend"></GoodsList>
  </div>
</template>
<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamsInfo from "./childComps/DetailParamsInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";

import { debounce } from "common/utils.js";

import GoodsList from "components/content/goods/GoodsList.vue";

import {
  getDetailData,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail.js";

export default {
  name: "Detail",
  data() {
    return {
      id: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommendList: [],
      titleTopChange: [],
      getTitleTopY: null,
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
  },
  created() {
    // 1保存传入的id
    this.id = this.$route.params.id;

    // 2根据id请求详情数据
    getDetailData(this.id).then((res) => {
      console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      // console.log(this.topImages);

      // 2获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 2获取店铺信息
      this.shop = new Shop(data.shopInfo);
      console.log("这是shop", this.shop);

      //2获取商品详细信息
      this.detailInfo = data.detailInfo;

      //2获取商品参数信息
      this.paramsInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      //2获取商品评论信息
      this.commentInfo = data.rate.list[0];
    });

    // 3请求推荐商品数据
    getRecommend().then((res) => {
      // console.log("推荐商品数据", res);
      this.recommendList = res.data.list;
    });

    // 4获取标题吸顶位置
    this.getTitleTopY = debounce(() => {
      this.titleTopChange = [];
      this.titleTopChange.push(0);
      this.titleTopChange.push(this.$refs.params.$el.offsetTop);
      this.titleTopChange.push(this.$refs.comment.$el.offsetTop);
      this.titleTopChange.push(this.$refs.recommend.$el.offsetTop);

      console.log("标题吸顶位置", this.titleTopChange);
    }, 100);
  },
  mounted() {
    // 5获取标题吸顶位置
    this.getTitleTopY();
  },
  methods: {
    titleClick(index) {
      // 点击标题时，滚动到对应组件
      const scrollTop = this.titleTopChange[index];
      window.scrollTo({
        top: scrollTop,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>

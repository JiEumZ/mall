<template>
  <div id="detail">
    <DetailNavBar
      @titleClick="titleClick"
      :current-index="activeIndex"
    ></DetailNavBar>
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
    <DetailBottomBar @addToCart="addToCart"></DetailBottomBar>
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
import DetailBottomBar from "./childComps/DetailBottomBar.vue";

import { debounce, throttle } from "common/utils.js";

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
      activeIndex: 0, // 当前激活的标题索引
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
    DetailBottomBar,
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

    // 6监听滚动事件
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeDestroy() {
    // 7移除滚动事件监听
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    titleClick(index) {
      this.activeIndex = index; // 更新当前激活的标题索引
      // 点击标题时，滚动到对应组件
      const scrollTop = this.titleTopChange[index];
      window.scrollTo({
        top: scrollTop,
        behavior: "smooth",
      });
    },

    // 处理滚动事件（节流）
    handleScroll: throttle(function () {
      const scrollTop = window.scrollY;
      const scrollMargin = 50; // 滚动缓冲区

      // 边缘情况：滚动到顶部
      if (scrollTop <= 0) {
        this.activeIndex = 0;
        return;
      }

      // 从后向前遍历，找到第一个满足条件的索引
      for (let i = this.titleTopChange.length - 1; i >= 0; i--) {
        if (scrollTop >= this.titleTopChange[i] - scrollMargin) {
          this.activeIndex = i;
          break; //找到第一个满足条件的索引后，立即终止循环
        }
      }
    }, 100),

    addToCart() {
      // 1、获取购物车商品信息
      const product = {
        id: this.id,
        title: this.goods.title,
        price: this.goods.realPrice,
        image: this.topImages[0],
        desc: this.goods.desc,
      };
      // 2、将商品信息添加到购物车
      // 通过mutation添加到购物车
      // this.$store.commit("addCart", product);
      this.$store.dispatch("addCart", product);
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

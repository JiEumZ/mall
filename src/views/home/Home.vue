<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <home-swiper :banner="banner" />
    <recommend-view :recommend="recommend"></recommend-view>
    <feature-view></feature-view>
    <tab-cart
      :title="['流行', '新款', '精选']"
      @carClick="pTabClick"
      ref="tabCart"
    ></tab-cart>
    <GoodsList :good="showGood"></GoodsList>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";
import TabCart from "components/content/tabCart/TabCart.vue";
import GoodsList from "components/content/goods/GoodsList.vue";

import { getHomeMultidata, getGoodsData } from "network/home.js";

export default {
  name: "Home",
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        // 流行
        pop: { page: 0, list: [] },
        // 新款
        new: { page: 0, list: [] },
        // 精选
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabCart,
    GoodsList
  },
  created() {
    // console.log("创建了组件");

    /* 
    调用methods中方法 
    */
    this.getHomeMultidata();
    // 一次性请求所有goods数据
    this.getGoodsData("pop");
    this.getGoodsData("new");
    this.getGoodsData("sell");
  },
  mounted() {
    // tabCart吸顶 获取offsettop
    // console.log("tabCart吸顶", this.$refs.tabCart.$el.offsetTop);
  },
  computed: {
    showGood() {
      return this.goods[this.currentType].list;
    },
  },

  methods: {
    pTabClick(index) {
      // 点击cart时，获取对应的商品数据
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      // 如果当前类型的商品数据为空，则请求数据
      // if (this.goods[this.currentType].list.length === 0) {
      // this.getGoodsData(this.currentType);
      // }
    },

    /* 
      网络请求：轮播图，推荐图
    */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },

    getGoodsData(type) {
      let page = this.goods[type].page + 1;
      getGoodsData(type, page).then((res) => {
        console.log("goods-test", res.data);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page = page;
      });
    },
  },
  activated() {
    console.log("激活了");
  },
  deactivated() {
    console.log("关闭了");
  },
};
</script>
<style scoped>
#home {
  /* 防止轮播图被遮挡 */
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* 固定定位不占位置 */
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
}
/* 待调 */
/* tab-cart {
  position: fixed ;
  top: 44px ;
  z-index: 100;
} */
</style>

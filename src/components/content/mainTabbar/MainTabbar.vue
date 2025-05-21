<template>
  <div id="maintabbar">
    <tabbar>
      <tabbar-item path="/home" ActiveColor="blue">
        <span slot="item-icon" class="iconfont icon-shouye"></span>
        <div slot="item-text" class="textsize">首页</div>
      </tabbar-item>
      <tabbar-item path="/category" ActiveColor="blue">
        <span slot="item-icon" class="iconfont icon-icon_category"></span>
        <div slot="item-text" class="textsize">分类</div>
      </tabbar-item>
      <tabbar-item path="/cart" ActiveColor="blue">
        <span slot="item-icon" class="iconfont icon-gouwuche"></span>
        <div slot="item-text" class="textsize">购物车</div>
      </tabbar-item>
      <tabbar-item path="/profile" ActiveColor="blue">
        <span slot="item-icon" class="iconfont icon-wode"></span>
        <div slot="item-text" class="textsize">我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import Tabbar from "components/common/tabbar/Tabbar.vue";
import TabbarItem from "components/common/tabbar/TabbarItem.vue";
export default {
  name: "MainTabbar",
  components: {
    Tabbar,
    TabbarItem,
  },
};
</script>

<style>
.iconfont {
  font-size: 23px;
  vertical-align: middle;
}
.textsize {
  font-size: 12px;
}
</style>

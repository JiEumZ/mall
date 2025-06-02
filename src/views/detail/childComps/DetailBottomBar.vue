<template>
  <div class="bottom-bar">
    <div class="bar-left">
      <div>
        <i class="iconfont icon-customer service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="iconfont icon-dianpu shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="iconfont icon-shoucang collect"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit("addToCart");
    },
  },
};
</script>
  
<style scoped>
.bottom-bar {
  /* padding-top: 10px; */
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  background-color: #ededed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
  /* border: 1px solid #000; */
}
.bar-left {
  display: flex;
  justify-content: space-around;
  width: 50%;
}
.bar-left div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bar-left div i {
  font-size: 21px;
  color: #333;
  margin-bottom: 2px;
}
.bar-left div .text {
  font-size: 12px;
  color: #666;
}
.bar-right {
  display: flex;
  justify-content: space-around;
  /* align-content: center; */
  width: 45%;
  font-size: 14px;
  text-align: center;
  line-height: 40px;
}
.bar-right .cart {
  width: 50%;
  height: 40px;
  background-color: #e0cc47;
}
.bar-right .buy {
  width: 50%;
  height: 40px;
  background-color: #f7667a;
  color: #fff;
}
</style>
  
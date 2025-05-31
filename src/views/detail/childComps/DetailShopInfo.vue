<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="Shop Logo" class="shop-logo" />
      <span class="shop-name">{{ shop.name }}</span>
      <span class="shop-fans">粉丝数 {{ shop.fans | CountChange }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left">
        <div class="info-sell">
          <div class="sell-count">{{ shop.sells | CountChange }}</div>
          <div class="sell-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="good-count">{{ shop.goodsCount | CountChange }}</div>
          <div class="good-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="more" :class="{ 'better-more': item.isBetter }">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  filters: {
    CountChange(value) {
      return value > 10000 ? (value / 10000).toFixed(1) + "万" : value;
    },
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.shop-top {
  padding: 20px 8px;
}
.shop-top img {
  width: 50px;
  height: 50px;
  margin-right: 15px;
  border-radius: 50%;
  vertical-align: middle;
}
.shop-top .shop-name {
  font-size: 15px;
}
.shop-fans {
  font-size: 12px;
  color: #c06262;
  margin-left: 20px;
  vertical-align: middle;
}
.shop-middle {
  display: flex;
  padding: 0 20px;
  /* justify-content: space-evenly; */
}
.shop-middle-left {
  flex: 55%;
  display: flex;
  justify-content: space-around;
  /* border-right: 1px solid #e0e0e0; */
  padding-right: 10px;
  padding-top: 15px;
}
.info-sell,
.info-goods {
  text-align: center;
}
.info-goods {
  height: 40px;
  border-right: 1px solid #e0e0e0;
  padding-right: 20px;
}
.sell-count,
.good-count {
  color: #000;
  padding-bottom: 8px;
}
.good-text,
.sell-text {
  font-size: 12px;
}
.shop-middle-right {
  flex: 45%;
  font-size: 12px;
  /* padding-left: 10px; */
}
.shop-middle-right table {
  width: 100%;
  text-align: center;
  border-collapse: separate;
  border-spacing: 10px 6px;
}

.more,
.better-more {
  color: #fff;
  background-color: rgb(22, 189, 31);
  line-height: 1;
  display: inline-flex;
  /* align-items: center; */
}
.score-better {
  color: rgb(243, 7, 7) !important;
}
.better-more {
  background-color: rgb(243, 7, 7) !important;
}
</style>

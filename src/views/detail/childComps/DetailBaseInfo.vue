<template>
  <div class="detail-baseInfo" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span class="discount" v-if="goods.discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-services">
      <span
        class="info-services-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.detail-baseInfo {
  margin-top: 15px;
  color: #999;
  padding: 0 8px;
  border-bottom: 5px solid #f2f5f8;
}
.info-title {
  color: #222;
}
.info-price {
  margin-top: 10px;
}
.n-price {
  font-size: 24px;
  color: var(--color-high-text);
}
.o-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.discount {
  font-size: 13px;
  padding: 2px 10px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 8px;
  margin-left: 5px;
  /* 元素上浮一点，用相对 */
  position: relative;
  top: -8px;
}
.info-other {
  margin-top: 15px;
  line-height: 30px;
  font-size: 13px;
  display: flex;
  border-bottom: 1px solid rgb(100, 100, 100, 0.1);
  justify-content: space-between;
}
.info-services {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
} 
.info-services-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}
.info-services-item span {
  font-size: 13px;
  color: #333;
}
</style>

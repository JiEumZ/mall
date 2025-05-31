<template>
  <div class="goods">
    <goods-item v-for="item in good" :good-item="item"></goods-item>
  </div>
</template>
<script>
import GoodsItem from "./GoodsItem.vue";
export default {
  name: "GoodsList",
  props: {
    good: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    GoodsItem,
  },
};
</script>
<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 10px;
  background-color: var(--color-background);
}
</style>

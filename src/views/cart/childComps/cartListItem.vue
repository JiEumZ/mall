<template>
  <div class="cart-list-item">
    <div class="selector">
      <CheckButton></CheckButton>
    </div>
    <div class="img">
      <img :src="product.image" alt="Product Image" />
    </div>
    <div class="info">
      <div class="title">{{ product.title }}</div>
      <div class="desc">{{ product.desc }}</div>
      <div class="bottom">
        <span class="price">￥{{ product.price }}</span>
        <span class="count"> ×{{ product.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";

export default {
  name: "cartListItem",
  components: {
    CheckButton,
  },
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style scoped>
.cart-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: #fff;
  border-bottom: 2px solid rgba(100, 100, 100, 0.1);
}
.selector {
  width: 20px;
  margin-right: 8px;
}
.img img {
  width: 60px;
  /* height: 80px; */
  border-radius: 5px;
}
.info {
  flex: 1;
  margin-left: 10px;
}
.info .title {
  font-size: 16px;
  color: #333;
  padding-bottom: 10px;
}
.info .desc {
  font-size: 14px;
  color: #666;
  padding-bottom: 20px;
}
.title,
.desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 270px;
}
.info .bottom {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.info .bottom .price {
  font-size: 16px;
  color: #f45727;
}
.info .bottom .count {
  font-size: 16px;
  color: #666;
}
</style>
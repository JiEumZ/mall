<template>
  <div class="cart-bottom">
    <div class="bottom-left">
      <CheckButton />
      <span class="text">全选</span>
    </div>
    <div class="bottom-right">
      <span class="total-price">合计：￥{{ totalPrice }}</span>
      <div class="pay-btn">去结算</div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";

export default {
  name: "CartBottom",
  components: {
    CheckButton,
  },
  props: {},
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
.cart-bottom {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 52px;
  height: 30px;
  padding-left: 8px;
  font-size: 12px;
  background-color: #ede8e8db;
}

.bottom-left {
  flex: 15%;
  display: flex;
  justify-content: left;
  align-items: center;
}
.bottom-right {
  flex: 85%;
  display: flex;
  justify-content: right;
  align-items: center;
  /* margin-left: 10px; */
}
.total-price {
  margin-right: 130px;
  /* color: #333; */
}
.pay-btn {
  height: 30px;
  width: 90px;
  /* margin-right: 8px; */
  text-align: center;
  line-height: 30px;
  background-color: #ec430b;
}
</style>
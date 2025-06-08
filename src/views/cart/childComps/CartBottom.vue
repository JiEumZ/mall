<template>
  <div class="cart-bottom">
    <div class="bottom-left">
      <CheckButton :is-checked="isSelectAll" @click.native="SelectAll()" />
      <span class="text">全选</span>
    </div>
    <div class="bottom-right">
      <span class="total-price">合计：{{ totalPrice }}</span>
      <div class="pay-btn">去结算({{ checkLength }})</div>
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
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((pre, item) => {
            return pre + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.$store.state.cartList.filter((item) => {
        return item.checked;
      }).length;
    },
    isSelectAll() {
      if (this.$store.state.cartList.length == 0) {
        return false;
      }
      // return !this.$store.state.cartList.filter((item) => {
      //   return !item.checked;
      // }).length;

      return !this.$store.state.cartList.find((item) => {
        return !item.checked;
      });
    },
  },
  watch: {},
  methods: {
    SelectAll() {
      if (this.isSelectAll) {
        // 如果全选了，就取消全选
        return this.$store.state.cartList.forEach(
          (item) => (item.checked = false)
        );
      } else {
        // 如果没有全选，就全选
        return this.$store.state.cartList.forEach(
          (item) => (item.checked = true)
        );
      }
    },
  },
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

<template>
  <div class="cart-list">
    <cartListItem
      v-for="(item, index) in cartList"
      :key="index"
      :product="item"
    ></cartListItem>
  </div>
</template>

<script>
import cartListItem from "./cartListItem.vue";

import { mapGetters } from "vuex";
export default {
  name: "cartList",
  components: {
    cartListItem,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style scoped>
.cart-list {
  margin-top: 45px;
  margin-bottom: 82px;
}
</style>

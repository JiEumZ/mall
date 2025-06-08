<template>
  <div id="cart">
    <NavBar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </NavBar>
    <cartList></cartList>
    <CartBottom></CartBottom>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import cartList from "./childComps/cartList.vue";
import CartBottom from "./childComps/CartBottom.vue";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    cartList,
    CartBottom,
  },
  computed: {
    ...mapGetters(["cartLength"]),
  },
};
</script>
<style scoped>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--color-tint);
  color: #fff;
}
</style>

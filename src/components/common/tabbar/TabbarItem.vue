<template>
  <div class="tab-bar-item" @click="itemClick" :style="activeStyle">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>
<script>
export default {
  name: "TabbarItem",
  data() {
    return {};
  },
  props: {
    path: String,
    ActiveColor: {
      type: String,
      default: "red",
    },
  },
  methods: {
    async itemClick() {
      try {
        // console.log(this.$router.push(this.path));
        // this.$router.push(this.path);
        await this.$router.push(this.path);
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.ActiveColor } : {};
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
/* .active {
  color: red;
} */
</style>

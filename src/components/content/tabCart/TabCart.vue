<template>
  <div class="tabcart">
    <div
      class="tabcart-item"
      v-for="(item, index) in title"
      :class="{ active: currentIndex === index }"
      :key="index"
      @click="cartClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabCart",
  props: {
    title: {
      type: Array,
      default: () => [],
    },
  },
  data: function () {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    cartClick(index) {
      this.currentIndex = index;
      this.$emit("carClick", index);
    },
  },
};
</script>
<style scoped>
.tabcart {
  display: flex;
  text-align: center;
  font-size: 14px;
}
.tabcart-item {
  flex: 1;
}
.tabcart-item span {
  padding: 5px;
}
.active span {
  color: var(--color-tint);
  border-bottom: 3px solid var(--color-tint);
}
</style>

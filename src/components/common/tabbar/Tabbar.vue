<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f0f0f0;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 3px rgba(100, 100, 100, 0.2);
}
</style>

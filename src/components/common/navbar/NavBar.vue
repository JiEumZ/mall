<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
</script>
<style>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  /* background-color: var(--color-tint); */
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.3);
}

.left,
.right {
  width: 60px;
  /* background-color: blue; */
}

.center {
  flex: 1;
}
</style>

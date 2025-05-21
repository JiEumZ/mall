<template>
  <div id="recommend">
    <div class="recommend-item" v-for="item in recommend">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div class="title">{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecommendView",
  props: {
    recommend: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>
<style scoped>
#recommend {
  display: flex;
  text-align: center;
  padding: 15px 0 30px;
  border-bottom: 7px solid #eee;
}
.recommend-item {
  flex: 1;
  font-size: 12px;
}
img {
  width: 65px;
  height: 65px;
  margin-bottom: 8px;
}
</style>

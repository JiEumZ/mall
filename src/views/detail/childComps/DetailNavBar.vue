<template>
  <div class="detailnavbar">
    <nav-bar>
      <div slot="left" class="iconfont icon-jiantou" @click="backHome"></div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in title"
          class="title-item"
          :class="{ active: index == currentIndex }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  name: "DetailNavBar",
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    backHome() {
      this.$router.back();
    },
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
  },
};
</script>
<style scoped>
.detailnavbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.9);
}
.title {
  display: flex;
}
.title-item {
  flex: 1;
  font-size: 13px;
}
.active {
  color: var(--color-high-text);
}
</style>

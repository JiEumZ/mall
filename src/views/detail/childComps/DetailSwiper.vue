<template>
  <swiper class="swiperitem">
    <swiper-item v-for="item in topImages">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";

export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>
<style scoped>
.swiperitem {
  padding-top: 45px;
  height: 300px;
  overflow: hidden;
}
</style>

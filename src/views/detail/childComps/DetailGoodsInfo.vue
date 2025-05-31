<template>
  <div class="goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="desc">{{ detailInfo.desc }}</div>
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-img">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="item"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.goods-info{
  padding: 30px 8px;
}
.desc{
  font-size: 14px;
  line-height: 20px;
}
.info-key{
  font-size: 15px;
  font-weight: bold;
  margin-top: 20px;
}
.info-img{
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.info-img img {
  width: 100%;
  /* height: 300px; */
  border-radius: 5px;
  /* object-fit是用来处理图片剪裁和缩放 */
  /* object-fit: cover; */
}
</style>

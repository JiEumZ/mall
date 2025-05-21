<template>
  <div class="goodsitem">
    <img :src="goodItem.show.img" alt="" />
    <div class="goodsitem-info">
      <p>{{ goodItem.title }}</p>
      <span class="price">{{ goodItem.price }}</span>
      <span class="collect">{{ goodItem.cfav }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsItem",
  props: {
    goodItem: {
      type: Object,
      default: () => [],
    },
  },
};
</script>
<style scoped>
.goodsitem {
  position: relative;
  width: 48%;
  padding-bottom: 40px;
}
.goodsitem img {
  width: 100%;
  border-radius: 5px;
}
.goodsitem-info{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
  font-size: 12px;
  text-align: center;
}
.goodsitem-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goodsitem-info .price{
  color: var(--color-high-text);
  margin-right: 20px;
}
.goodsitem-info .collect{
  position: relative;
}
.goodsitem-info .collect::before{
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url('~@/assets/img/home/collect.svg') 0 0/14px 14px;
  
}
</style>

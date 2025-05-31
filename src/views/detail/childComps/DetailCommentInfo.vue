<template>
  <div class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多<i class="iconfont icon-youjiantou"></i>
      </div>
    </div>
    <div class="info-user" v-if="commentInfo && commentInfo.user">
      <img :src="commentInfo.user.avatar" alt="" />
      <span>{{ commentInfo.user.uname }}</span>
    </div>
    <div class="info-detail">
      <p>{{ commentInfo.content }}</p>
      <div class="time-info">
        <span class="date">{{ commentInfo.created | showDate }}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
    </div>
    <div class="info-img">
      <img
        v-for="(item, index) in commentInfo.images"
        :key="index"
        :src="item"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils.js";

export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  filters: {
    showDate(value) {
      if (!value) return "";
      const date = new Date(value * 1000); // 转换为毫秒
      // 格式化日期和时间
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    },
  },
  computed: {},
  methods: {},
  updated() {},
};
</script>

<style scoped>
.comment-info {
  margin: 20px 0;
}
.info-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 2px solid #e0e0e0;
  /* background-color: #f5f5f5; */
}
.info-header i {
  position: relative;
  top: -2px;
  font-size: 20px;
}
.info-user {
  display: flex;
  align-items: center;
  margin: 10px 10px;
}
.info-user img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.info-user span {
  font-size: 14px;
  /* color: #333; */
}
.info-detail {
  margin: 10px 10px;
  font-size: 14px;
}
.time-info {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}
.time-info .date {
  margin-right: 10px;
}
.info-img {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 10px;
}
.info-img img {
  width: 80px;
  /* height: 80px; */
  object-fit: cover;
  margin-right: 3px;
  margin-bottom: 3px;
}
</style>

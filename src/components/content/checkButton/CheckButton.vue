<template>
  <div class="check-button">
    <div class="iconfont icon-duihao" :class="{ check: isChecked }"></div>
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  components: {},
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style scoped>
.check-button div {
  font-size: 14px;
}
.check {
  color: #fff;
  background-color: #f53f3f;
  border-radius: 50%;
}
</style>

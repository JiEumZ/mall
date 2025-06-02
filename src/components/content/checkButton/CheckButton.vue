<template>
  <div class="check-button">
    <div
      class="iconfont icon-duihao"
      :class="{ check: isActive }"
      @click="checkChange"
    ></div>
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  components: {},
  props: {},
  data() {
    return {
      isActive: false,
    };
  },
  computed: {},
  watch: {},
  methods: {
    checkChange() {
      this.isActive = !this.isActive;
    },
  },
  created() {},
  mounted() {},
};
</script>

<style scoped>
.check {
  color: #fff;
  background-color: var(--color-tint);
  border-radius: 50%;
}
</style>
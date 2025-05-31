<template>
  <div class="params-info" v-if="Object.keys(paramsInfo).length !== 0">
    <table class="info-size" v-for="(table,index) in paramsInfo.sizes" :key="index">
      <tr v-for="(tr,index) in table" :key="index">
        <td v-for="(td,index) in tr" :key="index">{{ td }}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(tr,index) in paramsInfo.infos" :key="index">
        <td>{{ tr.key }}</td>
        <td>{{ tr.value }}</td>
      </tr>
    </table>
    
  </div>
</template>

<script>
export default {
  name: 'DetailParamsInfo',
  props: {
    paramsInfo: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      
    };
  },
  computed: {},
  methods: {},
  mounted() {
    
  }
};
</script>

<style scoped>
.params-info{
  padding-top: 30px;
  border-top: 5px solid rgba(0, 0, 0, 0.1);
}
.info-size{
  width: 90%;
  font-size: 12px;
  margin: 0 auto;
  /* border: 1px solid #ccc; */
  border-collapse: collapse;
  margin-bottom: 20px;
}
.info-size td{
  line-height: 20px;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
 /* ​​1​​ 表示从后往前数的​​第一个子元素​​（即最后一个元素） */
.info-size tr:nth-last-child(1) td{
  border-bottom: none;
}

.info-param{
  width: 90%;
  font-size: 12px;
  margin: 0 auto;
  border-collapse: collapse;
  border-top: 3px solid rgba(0, 0, 0, 0.1);
}
.info-param td{
  line-height: 20px;
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.info-param td:last-child{
  color: var(--color-high-text);
}
</style>
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 购物车列表 用于存储商品信息cartList:[商品1，商品2，商品3]
    cartList: [],
  },
  getters: {
    cartLength(state) {
      return state.cartList.length;
    },
    cartList(state) {
      return state.cartList;
    },
  },
  mutations: {
    addCount(state, payload) {
      payload.count++;
    },
    addToCart(state, payload) {
      payload.checked = true; // 新添加的商品默认选中
      // 将商品添加到购物车列表中
      state.cartList.push(payload);
    },
  },
  actions: {
    // 想要 在vuex中做了某些操作，外面能知道完成状态，可以用promise来处理
    addCart(context, payload) {
      return new Promise((resolve, reject) => {
        // 判断cartList中是否有该商品
        const oldProduct = context.state.cartList.find(
          (item) => item.id === payload.id
        );
        if (oldProduct) {
          // 如果有，对应商品的数量属性加1
          // state.cartList.find() 返回的是引用,而不是副本，所以 oldProduct 直接指向 state.cartList 里的某个商品对象
          // oldProduct.count += 1
          context.commit("addCount", oldProduct);
          resolve("商品数量+1");
        } else {
          // 如果没有，添加到cartList中
          payload.count = 1;
          context.commit("addToCart", payload);
          resolve("添加商品成功");
        }
      });
    },
  },
  modules: {},
});

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 购物车列表 用于存储商品信息cartList:[商品1，商品2，商品3]
    cartList: []
  },
  getters: {
    cartLength(state) {
      return state.cartList.length
    },
    cartList(state) {
      return state.cartList
    },
  },
  mutations: {
    addCount(state, payload) {
      payload.count++
    },
    addToCart(state, payload) {
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context, payload) {
      // 判断cartList中是否有该商品
      const oldProduct = context.state.cartList.find(item => item.id === payload.id)
      if (oldProduct) {
        // 如果有，对应商品的数量属性加1
        // state.cartList.find() 返回的是引用,而不是副本，所以 oldProduct 直接指向 state.cartList 里的某个商品对象
        // oldProduct.count += 1
        context.commit('addCount', oldProduct)
      } else {
        // 如果没有，添加到cartList中
        payload.count = 1
        context.commit('addToCart', payload)
      }
    }
  },
  modules: {
  }
})

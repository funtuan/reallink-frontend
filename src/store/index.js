import Vue from 'vue'
import Vuex from 'vuex'

import { findOne as shopFindOne } from '@/api/shop';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shop: null,
  },
  mutations: {
    SET_SHOP: (state, shop) => {
      state.shop = shop
    },
    CLEAR_SHOP: (state) => {
      state.shop = null
    },
  },
  actions: {
    async CheckShop({ commit, state }, code) {
      if (!state.shop) {
        commit('SET_SHOP', await shopFindOne(code))
      }
      if (state.shop && state.shop.code !== code) {
        commit('CLEAR_SHOP')
        commit('SET_SHOP', await shopFindOne(code))
      }
    },
  },
  modules: {
  }
})

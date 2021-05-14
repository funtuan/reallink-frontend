import Vue from 'vue'
import Vuex from 'vuex'
import dayjs from 'dayjs';

import { findOne as shopFindOne } from '@/api/shop';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shop: null,
    info: null,
  },
  mutations: {
    SET_SHOP: (state, shop) => {
      state.shop = shop
    },
    CLEAR_SHOP: (state) => {
      state.shop = null
    },
    SET_INFO: (state, info) => {
      state.info = info
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
    async SetInfo({ commit }, info) {
      const day = dayjs(info.toDay).format('YYYY-MMM-DD')
      const goAt = new Date(`${day} ${info.fillTime}`)
      console.log('goAt', goAt)
      commit('SET_INFO', info)
    },
  },
  modules: {
  }
})

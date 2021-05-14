import Vue from 'vue'
import Vuex from 'vuex'
import encrypt from '@/unit/encrypt'

import {
  findOne as shopFindOne,
  record,
} from '@/api/shop';

import {
  findOne as pemFindOne,
} from '@/api/pem';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pem: null,
    shop: null,
    info: null,
  },
  mutations: {
    SET_PEM: (state, pem) => {
      state.pem = pem
    },
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
      if (!state.pem) {
        commit('SET_PEM', (await pemFindOne()).infoPublicKey)
      }
      if (!state.shop) {
        commit('SET_SHOP', await shopFindOne(code))
      }
      if (state.shop && state.shop.code !== code) {
        commit('CLEAR_SHOP')
        commit('SET_SHOP', await shopFindOne(code))
      }
    },
    async SetInfo({ commit, state }, info) {
      let pem = state.pem
      if (!pem) {
        pem = (await pemFindOne()).infoPublicKey
        commit('SET_PEM', pem)
      }
      await record({
        code: info.code,
        info: encrypt(pem, info),
        goAt: new Date(`${info.day} ${info.fillTime}`),
      })
      commit('SET_INFO', info)
    },
  },
  modules: {
  }
})

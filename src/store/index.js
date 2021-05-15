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
    fullscreenLoading: false,
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
    SET_LOADING: (state, status) => {
      state.fullscreenLoading = status
    },
  },
  actions: {
    async CheckShop({ commit, state }, code) {
      commit('SET_LOADING', true)

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
      commit('SET_LOADING', false)
    },
    async SetInfo({ commit, state }, info) {
      commit('SET_LOADING', true)
      let pem = state.pem
      if (!pem) {
        pem = (await pemFindOne()).infoPublicKey
        commit('SET_PEM', pem)
      }
      await record({
        code: info.code,
        info: encrypt(pem, info),
        goAt: `${info.day} ${info.fillTime}`,
      })
      commit('SET_INFO', info)
      commit('SET_LOADING', false)
    },
    async SetLoading ({ commit }, status) {
      commit('SET_LOADING', status)
    }
  },
  modules: {
  }
})

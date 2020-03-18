import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    products: [],
    message: {
      isMessage: false
    }
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_MESSAGE (state, payload) {
      state.message = payload
    },
    SET_LOADING (state) {
      state.isLoading = !state.isLoading
    },
    SET_ISMESSAGE (state) {
      state.message.isMessage = false
    }
  },
  actions: {
    fetchProducts ({ commit }) {
      commit('SET_LOADING')
      axios({
        method: 'get',
        url: 'http://localhost:3000/admin/product',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('SET_PRODUCTS', data.data)
        })
        .catch(err => {
          commit('SET_MESSAGE', {
            isMessage: true,
            title: 'ERROR!',
            message: err.response.data.message
          })
        })
        .finally(_ => {
          commit('SET_LOADING')
        })
    },
    adminLogin ({ commit }, payload) {
      const { email, password } = payload
      commit('SET_LOADING')
      axios({
        method: 'post',
        url: 'http://localhost:3000/admin/login',
        data: {
          email, password
        }
      })
        .then(({ data }) => {
          const { token, message } = data
          commit('SET_MESSAGE', {
            isMessage: true,
            title: 'Success!',
            message
          })
          localStorage.setItem('token', token)
          router.push({ path: '/admin' })
        })
        .catch(err => {
          commit('SET_MESSAGE', {
            isMessage: true,
            title: 'ERROR!',
            message: err.response.data.message
          })
        })
        .finally(_ => {
          commit('SET_LOADING')
        })
    }
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    isLoading: false,
    products: [],
    users: [],
    isError: false,
    errors: []
  },
  mutations: {
    SET_LOGIN (state, payload) {
      state.isLogin = payload
    },
    SET_LOADING (state, payload) {
      state.isLoading = payload
    },
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_USERS (state, payload) {
      state.users = payload
    },
    SET_ERROR (state, payload) {
      state.isError = payload
    },
    SET_ERRORS (state, payload) {
      state.errors = payload
    }
  },
  actions: {
    getProducts ({ commit }, payload) {
      commit('SET_LOADING', true)
      axios({
        method: 'get',
        url: 'http://localhost:3000/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          commit('SET_PRODUCTS', [...data.data])
        })
        .catch((err) => {
          commit('SET_ERROR', true)
          commit('SET_ERRORS', [...err.response.data.errors])
        })
        .finally((_) => {
          commit('SET_LOADING', false)
        })
    },
    getUsers ({ commit }, payload) {
      commit('SET_LOADING', true)
      axios({
        method: 'get',
        url: 'http://localhost:3000/admin/users',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          commit('SET_USERS', [...data.data])
        })
        .catch((err) => {
          commit('SET_ERROR', true)
          commit('SET_ERRORS', [...err.response.data.errors])
        })
        .finally((_) => {
          commit('SET_LOADING', false)
        })
    },
    login ({ dispatch, commit }, payload) {
      commit('SET_LOADING', true)
      axios({
        method: 'post',
        url: 'http://localhost:3000/admin/login',
        data: payload
      })
        .then(({ data }) => {
          commit('SET_ERROR', false)
          commit('SET_ERRORS', [])
          const access_token = data.access_token
          localStorage.setItem('access_token', access_token)
          router.push('/dashboard')
          commit('SET_LOGIN', true)
          dispatch('getProducts')
          dispatch('getUsers')
        })
        .catch((err) => {
          commit('SET_ERROR', true)
          commit('SET_ERRORS', [...err.response.data.errors])
        })
        .finally((_) => {
          commit('SET_LOADING', false)
        })
    }
  },
  getters: {}
})

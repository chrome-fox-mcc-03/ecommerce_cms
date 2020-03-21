import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    products: [],
    error: '',
    loading: false,
    item: {}
  },
  mutations: {
    SET_ISLOGIN (state) {
      state.isLogin = true
    },
    SET_LOADING (state, bool) {
      state.loading = bool
    },
    SHOW_ERROR (state, error) {
      state.error = error
    },
    SET_LOGOUT (state) {
      state.isLogin = false
      localStorage.clear()
    },
    SET_PRODUCTS (state, products) {
      state.products = products
    },
    SET_ITEM (state, data) {
      state.item = data
    }
  },
  actions: {
    register (context, data) {
      return axios({
        method: 'POST',
        url: '/register',
        data
      })
    },
    login (context, data) {
      return axios({
        method: 'POST',
        url: '/login',
        data,
        loading: false
      })
    },
    fetchProduct (context) {
      context.commit('SET_LOADING', true)
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCTS', data.products)
          context.commit('SET_LOADING', false)
        })
        .catch(err => {
          context.commit('SHOW_ERROR', err.response.data.error)
          context.commit('SET_LOADING', false)
        })
    },
    addProduct (context, data) {
      return axios({
        method: 'POST',
        url: '/products',
        data,
        headers: {
          token: localStorage.token
        }
      })
    },
    findOne (context, payload) {
      context.commit('SET_LOADING', true)
      return axios({
        method: 'GET',
        url: `/products/${payload}`,
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          context.commit('SET_ITEM', data.product)
          context.commit('SET_LOADING', false)
        })
        .catch(err => {
          context.commit('SHOW_ERROR', err.response.data.error)
          context.commit('SET_LOADING', false)
        })
    },
    deleteProduct (context, id) {
      return axios({
        method: 'DELETE',
        url: `/products/${id}`,
        headers: {
          token: localStorage.token
        }
      })
    },
    editProduct (context, payload) {
      return axios({
        method: 'PUT',
        url: `/products/${payload.id}`,
        data: payload.data,
        headers: {
          token: localStorage.token
        }
      })
    }
  }
})

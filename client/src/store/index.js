import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    product: {},
    errorMessage: '',
    categories: []
  },
  mutations: {
    SET_IS_LOGIN (state, payload) {
      state.isLogin = payload
    },
    SET_PRODUCT (state, payload) {
      state.product = payload
    },
    SET_ERROR_MESSAGE (state, payload) {
      state.errorMessage = payload
    },
    SET_CATEGORIES (state, payload) {
      state.categories = payload
    }
  },
  actions: {
    registerOn (context, payload) {
      return axios({
        url: 'https://morning-chamber-86086.herokuapp.com/register',
        method: 'POST',
        data: payload
      })
    },
    loginOn (context, payload) {
      return axios({
        url: 'https://morning-chamber-86086.herokuapp.com/login',
        method: 'POST',
        data: payload
      })
    },
    fetchProducts (context, payload) {
      return axios({
        url: 'https://morning-chamber-86086.herokuapp.com/products',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    addProduct (context, payload) {
      return axios({
        url: 'https://morning-chamber-86086.herokuapp.com/products',
        method: 'POST',
        data: payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    fetchOneProduct (context, productId) {
      axios({
        url: 'https://morning-chamber-86086.herokuapp.com/products/' + productId,
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCT', data)
        })
        .catch(err => {
          this.$vToastify.error(err.response.data.errObj[0])
        })
    },
    editProduct (context, payload) {
      return axios({
        url: 'https://morning-chamber-86086.herokuapp.com/products/' + payload.productId,
        method: 'PUT',
        data: payload.payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    deleteProduct (context, productId) {
      return axios({
        url: 'https://morning-chamber-86086.herokuapp.com/products/' + productId,
        method: 'DELETE',
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    fetchCategories (context) {
      axios({
        url: 'https://morning-chamber-86086.herokuapp.com/categories',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('SET_CATEGORIES', data)
        })
        .catch(err => {
          this.$vToastify.error(err.response.data.message)
        })
    }
  },
  modules: {
  }
})

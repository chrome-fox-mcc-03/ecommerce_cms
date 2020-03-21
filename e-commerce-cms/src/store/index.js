import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const baseURL = 'https://polar-badlands-09758.herokuapp.com'

export default new Vuex.Store({
  state: {
    products: [],
    isLoading: false
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_ISLOADING (state, payload) {
      state.isLoading = payload
    }
  },
  actions: {
    signIn (context, payload) {
      return axios({
        method: 'post',
        url: `${baseURL}/signin/admin`,
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    fetchProducts (context, payload) {
      context.commit('SET_ISLOADING', true)
      axios({
        method: 'get',
        url: `${baseURL}/products`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCTS', data)
        })
        .catch(err => {
          this.$vToastify.error(err.response.data, 'Error Fetching Data')
        })
        .finally(_ => {
          context.commit('SET_ISLOADING', false)
        })
    },
    addProduct (context, payload) {
      context.commit('SET_ISLOADING', true)
      return axios({
        method: 'post',
        url: 'https://polar-badlands-09758.herokuapp.com/products',
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          category: payload.category
        }
      })
    },
    getProductById (context, id) {
      context.commit('SET_ISLOADING', true)
      return axios({
        method: 'get',
        url: `https://polar-badlands-09758.herokuapp.com/products/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    updateProduct (context, payload) {
      context.commit('SET_ISLOADING', true)
      return axios({
        method: 'put',
        url: `https://polar-badlands-09758.herokuapp.com/products/${payload.id}`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          category: payload.category
        }
      })
    },
    deleteProduct (context, id) {
      return axios({
        method: 'delete',
        url: `https://polar-badlands-09758.herokuapp.com/products/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    }
  }
})

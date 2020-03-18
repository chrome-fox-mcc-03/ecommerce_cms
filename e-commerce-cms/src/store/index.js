import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

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
        url: 'http://localhost:3000/signin',
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
        url: 'http://localhost:3000/products',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          console.log('Fetched!', data)
          context.commit('SET_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(_ => {
          context.commit('SET_ISLOADING', false)
        })
    },
    addProduct (context, payload) {
      context.commit('SET_ISLOADING', true)
      axios({
        method: 'post',
        url: 'http://localhost:3000/products',
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(_ => {
          context.commit('SET_ISLOADING', false)
        })
    },
    getProductById (context, id) {
      context.commit('SET_ISLOADING', true)
      return axios({
        method: 'get',
        url: `http://localhost:3000/products/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    updateProduct (context, payload) {
      context.commit('SET_ISLOADING', true)
      return axios({
        method: 'put',
        url: `http://localhost:3000/products/${payload.id}`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
    },
    deleteProduct (context, id) {
      return axios({
        method: 'delete',
        url: `http://localhost:3000/products/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    }
  }
})

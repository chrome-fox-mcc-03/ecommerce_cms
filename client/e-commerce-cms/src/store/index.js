import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    products: [],
    productUpdate: {
      id: null,
      name: '',
      image_url: '',
      price: null,
      stock: null
    }
  },
  mutations: {
    SET_LOGIN (state, value) {
      state.isLogin = value
    },
    SET_POKEMONS (state, value) {
      state.products = value
    },
    SET_DETAIL (state, value) {
      state.productUpdate.id = value.id
      state.productUpdate.name = value.name
      state.productUpdate.image_url = value.image_url
      state.productUpdate.price = value.price
      state.productUpdate.stock = value.stock
    }
  },
  actions: {
    register (context, payload) {
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/register',
        data: payload
      })
    },
    login (context, payload) {
      const email = payload.email
      const password = payload.password
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: {
          email,
          password
        }
      })
    },
    logout (context) {
      localStorage.clear()
      context.commit('SET_LOGIN', false)
      return new Promise((resolve, reject) => {
        resolve(('logout success'))
        reject(new Error('logout fail'))
      })
    },
    getProducts (context) {
      const token = localStorage.getItem('token')
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products',
        headers: {
          token
        }
      })
        .then(result => {
          context.commit('SET_POKEMONS', result.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      const token = localStorage.getItem('token')
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/products',
        headers: {
          token
        },
        data: payload
      })
    },
    productDetail (context, payload) {
      const id = payload
      const token = localStorage.getItem('token')
      axios({
        method: 'GET',
        url: `http://localhost:3000/products/${id}`,
        headers: {
          token
        }
      })
        .then(result => {
          const value = result.data
          // console.log(this.state.productUpdate)
          context.commit('SET_DETAIL', value)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateProduct (context, payload) {
      console.log('MUASOOOOOK')
      console.log(payload)
      const id = payload.id
      const token = localStorage.getItem('token')
      const toUpdate = {
        name: payload.name,
        image_url: payload.image_url,
        price: payload.price,
        stock: payload.stock
      }
      console.log('<<<<<<')
      console.log(toUpdate)
      return axios({
        method: 'PUT',
        url: `http://localhost:3000/products/${id}`,
        headers: {
          token
        },
        data: toUpdate
      })
    },
    deleteProduct (context, payload) {
      const id = payload
      const token = localStorage.getItem('token')
      return axios({
        method: 'DELETE',
        url: `http://localhost:3000/products/${id}`,
        headers: {
          token
        }
      })
    }
  },
  getters: {}
})

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
// const URL = 'http://localhost:3000'
const URL = 'https://maxhamz-ecommerce-cms.herokuapp.com/'
let data
export default new Vuex.Store({
  state: {
    products: [],
    product: {},
    productInfo: {
      id: null,
      name: '',
      category: '',
      image_url: '',
      price: null,
      stock: null
    },
    users: [],
    user: {},
    token: '',
    isLogin: false,
    isLoading: false
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_PRODUCT (state, payload) {
      state.product = payload
    },
    SET_PRODUCTINFO (state, payload) {
      state.productInfo.id = payload.id
      state.productInfo.name = payload.name
      state.productInfo.category = payload.category
      state.productInfo.image_url = payload.image_url
      state.productInfo.price = payload.price
      state.productInfo.stock = payload.stock
    },
    SET_USERS (state, payload) {
      state.users = payload
    },
    SET_USER (state, payload) {
      state.user = payload
    },
    SET_LOGIN (state, payload) {
      state.isLogin = payload
    },
    SET_LOADING (state, payload) {
      state.isLoading = payload
    }
  },
  actions: {
    login (context, payload) {
      console.log('>>> LOGIN USER @ VUEX STORE')
      return axios({
        method: 'post',
        url: `${URL}/login`,
        data: payload
      })
    },

    register (context, payload) {
      console.log('>>> REGISTER USER @ VUEX STORE')
      return axios({
        method: 'post',
        url: `${URL}/register`,
        data: payload
      })
    },

    getProducts (context, payload) {
      console.log('>>> FETCH PRODUCTS @ VUEX STORE')
      console.log('--- VUEJS.STORE ACTIONS: GET PRODUCTS ---')
      context.commit('SET_LOADING', true)
      axios({
        method: 'get',
        url: `${URL}/products/`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          console.log('SUCCESS FETCHING PRODUCTS')
          console.log(response.data.data)
          const allProducts = response.data.data
          context.commit('SET_PRODUCTS', allProducts)
        })
        .catch(err => {
          console.log('ERROR CATCHED:')
          // console.log('ERR RESPONSE IS')
          // console.log(error.response.data.error);
          this.$toasted.error(err.response.data.error, {
            position: 'bottom-center'
          })
        })
        .finally(_ => {
          context.commit('SET_LOADING', false)
        })
    },

    addProduct (context, payload) {
      console.log('>>> ADD PRODUCT @ VUEX STORE')
      console.log('SANITY CHECK, PAYLOAD IS:')
      console.log(payload)
      context.commit('SET_LOADING', true)

      data = {
        name: payload.name,
        category: payload.category,
        image_url: payload.image_url,
        price: +payload.price,
        stock: +payload.stock

      }

      return axios({
        method: 'post',
        url: `${URL}/products`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: data
      })
    },

    productInfo (context, payload) {
      console.log('PAYLOAD IS')
      console.log(payload)
      const id = payload
      const token = localStorage.getItem('token')
      context.commit('SET_LOADING', true)
      axios({
        method: 'GET',
        url: `http://localhost:3000/products/${id}`,
        headers: {
          token
        }
      })
        .then(response => {
          console.log('RESPONSE IS')
          console.log(response.data.data)
          const value = response.data.data
          // console.log(this.state.productUpdate)
          context.commit('SET_PRODUCTINFO', value)
        })
        .catch(err => {
          console.log('ERROR CATCHED:')
          // console.log('ERR RESPONSE IS')
          // console.log(error.response.data.error);
          this.$toasted.error(err.response.data.error, {
            position: 'bottom-center'
          })
        })
        .finally(_ => {
          context.commit('SET_LOADING', false)
        })
    },

    updateProduct (context, payload) {
      console.log('ACHTUNG!')
      console.log(payload)
      return axios({
        method: 'put',
        url: `${URL}/products/${payload.id}`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: payload
      })
    },

    deleteProduct (context, payload) {
      console.log('>>> DELETE PRODUCT @ VUEX STORE')
      console.log('SANITY CHECK, ID TO BE DELETED IS:')
      console.log(payload)
      context.commit('SET_LOADING', true)
      return axios({
        method: 'delete',
        url: `${URL}/products/${payload}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    }
  },
  modules: {}
})

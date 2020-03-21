import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notification: '',
    products: []
  },
  mutations: {
    SET_NOTIFICATION (state, payload) {
      state.notification = payload
    },
    SET_PRODUCT (state, payload) {
      state.products = payload
    }
  },
  actions: { // nge fetch products udah pasti di action
    register (context, payload) {
      const email = payload.email
      const password = payload.password
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/admin/register',
        data: {
          email,
          password
        }
      })
    },
    login (context, payload) {
      // context object, context.state, context.commit, context.dispatch
      const email = payload.email
      const password = payload.password
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/admin/login',
        data: {
          email,
          password
        }
      })
    },
    logout (context) {
      localStorage.clear()
      router.push({ path: '/' })
      context.commit('SET_NOTIFICATION', {
        msg: 'logout success',
        color: 'bg-success'
      })
    },
    fetchData (context, payload) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/product',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          console.log(data[0].id)
          context.commit('SET_PRODUCT', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/product',
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: payload.name,
          price: payload.price,
          stock: payload.stock,
          image: payload.image
        }
      })
    },
    getProduct (context, id) {
      return axios({
        method: 'GET',
        url: `http://localhost:3000/product/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    updateProduct (context, payload) {
      return axios({
        method: 'PUT',
        url: `http://localhost:3000/product/${payload.id}`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: payload.name,
          price: payload.price,
          stock: payload.stock,
          image: payload.image
        }
      })
    },
    deleteProduct (context, id) {
      return axios({
        method: 'DELETE',
        url: `http://localhost:3000/product/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    }
  },
  getters: {
    // misal butuh misalnya nge count produk dengan tag baju
    // filter produk dengan tag baju return something
  }
})

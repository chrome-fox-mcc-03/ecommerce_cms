import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

/*
  Vuex action -> ASYNC
  MUTATION -> ngubah state
  state -> data
*/
export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
    }
  },
  actions: {
    onLogin ({ dispatch, commit }, { email, password }) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: {
          email: email,
          password: password
        }
      })
        .then((response) => {
          localStorage.setItem('access_token', response.data.access_token)
          router.push('/dashboard')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    onRegister ({ dispatch, commit }, { email, password }) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/register',
        data: {
          email: email,
          password: password,
          role: 'admin'
        }
      })
        .then((response) => {
          // console.log(response)
          router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    onAddProduct ({ dispatch, commit }, { name, imageUrl, price, stock }) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/product',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name,
          imageUrl,
          price,
          stock
        }
      })
        .then((response) => {
          router.push('/dashboard/products')
        }).catch((err) => {
          console.log(err)
        })
    },
    onFetchProduct ({ dispatch, commit }) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/product',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          // console.log(data.result, 'dari store')
          // nanti disini manggil mutation dengan commit
          commit('SET_PRODUCTS', data.result)
        }).catch((err) => {
          console.log(err)
        })
    },
    onEditProduct ({ dispatch, commit }, { id, name, imageUrl, price, stock }) {
      // console.log(id, name, imageUrl, price, stock)
      axios({
        method: 'PUT',
        url: `http://localhost:3000/product/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name,
          imageUrl,
          price,
          stock
        }
      })
        .then((response) => {
          dispatch('onFetchProduct')
        }).catch((err) => {
          console.log(err)
        })
    },
    onDeleteProduct ({ dispatch, commit }, { id }) {
      axios({
        method: 'DELETE',
        url: `http://localhost:3000/product/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then((response) => {
          dispatch('onFetchProduct')
        }).catch((err) => {
          console.log(err)
        })
    }
  },
  getters: {}
})

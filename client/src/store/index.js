import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

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
    getProducts ({ commit, state, dispatch }, payload) {
      axios({
        method: 'get',
        url: 'http://localhost:3000/products',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          const {
            data
          } = response
          console.log(data)
          commit('SET_PRODUCTS', [...data])
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  getters: {}
})

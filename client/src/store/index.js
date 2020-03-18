import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    SET_ITEMS (state, payload) {
      state.items = payload
    }
  },
  actions: {
    login (context, payload) {
      const { email, password } = payload
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: {
          email,
          password
        }
      })
    },
    getProduct ({ commit }, payload) {
      const token = localStorage.getItem('token')
      axios({
        method: 'GET',
        url: 'http://localhost:3000/product',
        headers: {
          token
        }
      })
        .then((result) => {
          commit('SET_ITEMS', result.data.result)
        }).catch((err) => {
          console.log(err)
        })
    },
    addProduct ({ commit }, payload) {
      const { name, image, price, stock } = payload
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/product',
        data: {
          name,
          image_url: image,
          price,
          stock
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    getProductEdit ({ state, commit, dispatch }, payload) {
      return axios({
        method: 'GET',
        url: `http://localhost:3000/product/${payload}`
      })
    },
    editProduct ({ commit }, payload) {
      const { id, name, image, price, stock } = payload
      console.log(id)
      return axios({
        method: 'PUT',
        url: `http://localhost:3000/product/${id}`,
        data: {
          name,
          image_url: image,
          price,
          stock
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
    }
  },
  getters: {}
})

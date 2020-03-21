import Vue from 'vue'
import Vuex from 'vuex'
import axiosCMS from '../config/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    detailProduct: {}
  },
  mutations: {
    PRODUCTS (state, data) {
      state.products = data
    },
    DETAIL_PRODUCT (state, data) {
      state.detailProduct = data
    }
  },
  actions: {
    fetchProducts ({ commit }) {
      axiosCMS({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          commit('PRODUCTS', data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    fetchProduct ({ commit }, id) {
      // console.log(id)
      axiosCMS({
        method: 'GET',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          commit('DETAIL_PRODUCT', data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    edit ({ commit }, data) {
      console.log(data.id)
      console.log(data.dataEdit)
      return axiosCMS({
        method: 'PUT',
        url: `/products/${data.id}`,
        data: data.dataEdit,
        headers: {
          access_token: localStorage.access_token
        }
      })
    }
  },
  getters: {
    editData (state) {
      return state.detailProduct
    }
  }
})

'use strict'

import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
import VueToastify from 'vue-toastify'
import router from '../router'

Vue.use(VueToastify, {
  errorDuration: 2000,
  succesDuration: 2000,
  theme: 'light',
  position: 'bottom-center'
})
Vue.use(Vuex)

const notifier = new Vue()

export default new Vuex.Store({
  state: {
    nowLoading: false,
    userData: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      img_url: '',
      role: '',
      store_name: ''
    },
    isLoggedIn: false,
    products: [],
    selectedId: null,
    selectedProduct: {},
    newProduct: {
      name: '',
      price: 0,
      stock: 0,
      img_url: 'https://2x5ito1uusjd19czwpsrbt7c-wpengine.netdna-ssl.com/wp-content/themes/total-child-theme/assets/images/common/image-placeholder.png',
      store_id: null,
      category: '',
      description: '',
      highlighted: false
    },
    categoryList: [],
    storeSelected: [],
    googleSignInParams: {
      client_id: '564713912307-glfg8hulu0e01fqp2qhi5h0q8sj314fk.apps.googleusercontent.com'
    },
    googleEmail: ''
  },
  mutations: {
    CHANGE_NOWLOADING (state) {
      state.nowLoading = !state.nowLoading
    },
    CHANGE_USERDATA (state, payload) {
      for (const key in payload) {
        state.userData[key] = payload[key]
      }
    },
    CHANGE_LOGIN_STATUS (state) {
      state.isLoggedIn = !state.isLoggedIn
    },
    CHANGE_PRODUCT (state, payload) {
      state.products = payload
    },
    ADD_PRODUCT (state, payload) {
      state.products.push(payload)
    },
    CHANGE_SELECTED_ID (state, payload) {
      state.selectedId = payload
    },
    CHANGE_SELECTED_PRODUCT (state, payload) {
      state.selectedProduct = payload
    },
    EMPTY_NEW_PRODUCT (state) {
      state.newProduct = {
        name: '',
        price: 0,
        stock: 0,
        img_url: 'https://2x5ito1uusjd19czwpsrbt7c-wpengine.netdna-ssl.com/wp-content/themes/total-child-theme/assets/images/common/image-placeholder.png',
        store_id: null,
        category: '',
        description: ''
      }
    },
    CHANGE_CAT_LIST (state, payload) {
      state.categoryList = payload
    },
    CHANGE_STORE_LIST (state, payload) {
      state.storeSelected = payload
    },
    CHANGE_GMAIL (state, payload) {
      state.googleEmail = payload
    }
  },
  actions: {
    login ({ commit, state }, payload) {
      commit('CHANGE_NOWLOADING')
      commit('CHANGE_USERDATA', payload)
      axios({
        url: 'https://ancient-crag-74194.herokuapp.com/login',
        method: 'POST',
        data: {
          email: state.userData.email,
          password: state.userData.password
        }
      })
        .then(result => {
          localStorage.setItem('token', result.data.token)
          localStorage.setItem('name', result.data.name)
          localStorage.setItem('store_name', result.data.store_name)
          localStorage.setItem('store_id', result.data.store_id)
          localStorage.setItem('img_url', result.data.img_url)
          commit('CHANGE_LOGIN_STATUS')
          notifier.$vToastify.success({
            title: 'Success',
            body: `Welcome, ${result.data.name}`
          })
          router.push({ name: 'Dashboard' })
        })
        .catch(err => {
          notifier.$vToastify.error({
            title: 'Ouch!',
            body: err.response.data.msg
          })
        })
        .finally(() => {
          commit('CHANGE_NOWLOADING')
        })
    },
    register ({ commit, state, dispatch }, payload) {
      commit('CHANGE_NOWLOADING')
      commit('CHANGE_USERDATA', payload)
      axios({
        url: 'https://ancient-crag-74194.herokuapp.com/register',
        method: 'POST',
        data: payload
      })
        .then(result => {
          dispatch('login', {
            email: state.userData.email,
            password: state.userData.password
          })
        })
        .catch(err => {
          notifier.$vToastify.error({
            title: 'Ouch!',
            body: err.response.data.msg
          })
        })
        .finally(() => {
          commit('CHANGE_NOWLOADING')
        })
    },
    logout ({ commit }) {
      commit('CHANGE_LOGIN_STATUS')
      localStorage.clear()
      router.push({ name: 'LandingPage' })
    },
    createProduct ({ commit }, payload) {
      commit('CHANGE_NOWLOADING')
      const token = localStorage.getItem('token')
      axios({
        url: `https://ancient-crag-74194.herokuapp.com/product/${payload.store_id}`,
        method: 'POST',
        headers: {
          token
        },
        data: payload
      })
        .then(result => {
          commit('EMPTY_NEW_PRODUCT')
          router.push({ path: '/home/list' })
          notifier.$vToastify.success({
            title: 'Success',
            body: `Product ${payload.name} added.`
          })
        })
        .catch(err => {
          notifier.$vToastify.error({
            title: 'Ouch!',
            body: err.response.data.msg
          })
        })
        .finally(() => {
          commit('CHANGE_NOWLOADING')
        })
    },
    fetchProduct ({ commit }, payload) {
      commit('CHANGE_NOWLOADING')
      const storeId = localStorage.getItem('store_id')
      const token = localStorage.getItem('token')
      axios({
        url: `https://ancient-crag-74194.herokuapp.com/product/${storeId}`,
        method: 'GET',
        headers: {
          token
        }
      })
        .then(result => {
          commit('CHANGE_PRODUCT', result.data.data)
        })
        .catch(err => {
          notifier.$vToastify.error({
            title: 'Ouch!',
            body: err.response.data.msg
          })
        })
        .finally(() => {
          commit('CHANGE_NOWLOADING')
        })
    },
    getProduct ({ commit }, payload) {
      commit('CHANGE_NOWLOADING')
      axios({
        url: `https://ancient-crag-74194.herokuapp.com/product/detail/${payload}`,
        method: 'GET',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(result => {
          commit('CHANGE_SELECTED_PRODUCT', result.data)
        })
        .catch(err => {
          notifier.$vToastify.error({
            title: 'Ouch!',
            body: err.response.data.msg
          })
        })
        .finally(() => {
          commit('CHANGE_NOWLOADING')
        })
    },
    editProduct ({ commit, state }) {
      commit('CHANGE_NOWLOADING')
      axios({
        url: `https://ancient-crag-74194.herokuapp.com/product/${state.selectedProduct.id}`,
        method: 'PUT',
        headers: {
          token: localStorage.getItem('token')
        },
        data: state.selectedProduct
      })
        .then(result => {
          commit('CHANGE_SELECTED_ID', null)
          router.push({ path: '/home/list' })
          notifier.$vToastify.success({
            title: 'Success',
            body: `Product ${state.selectedProduct.name} edited.`
          })
        })
        .catch(err => {
          notifier.$vToastify.error({
            title: 'Ouch!',
            body: err.response.data.msg
          })
        })
        .finally(() => {
          commit('CHANGE_NOWLOADING')
        })
    },
    deleteProduct ({ commit }, payload) {
      commit('CHANGE_NOWLOADING')
      axios({
        url: `https://ancient-crag-74194.herokuapp.com/product/${payload}`,
        method: 'DELETE',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(result => {
          router.push({ path: '/home/list' })
          commit('CHANGE_SELECTED_ID', null)
          notifier.$vToastify.success({
            title: 'Success',
            body: 'Product deleted.'
          })
        })
        .catch(err => {
          notifier.$vToastify.error({
            title: 'Ouch!',
            body: err.response.data.msg
          })
        })
        .finally(() => {
          commit('CHANGE_NOWLOADING')
        })
    },
    fetchCategories ({ commit }, payload) {
      const storeId = localStorage.getItem('store_id')
      const token = localStorage.getItem('token')
      axios({
        url: `https://ancient-crag-74194.herokuapp.com/product/${storeId}/category`,
        method: 'GET',
        headers: {
          token
        }
      })
        .then(result => {
          commit('CHANGE_CAT_LIST', result.data)
        })
        .catch(err => {
          notifier.$vToastify.error({
            title: 'Ouch!',
            body: err.response.data.msg
          })
        })
        .finally(() => {
        })
    },
    fetchStoreList ({ commit }, payload) {
      if (payload) {
        axios({
          url: `https://ancient-crag-74194.herokuapp.com/store/${payload}`,
          method: 'GET'
        })
          .then(result => {
            commit('CHANGE_STORE_LIST', result.data.data)
          })
          .catch(err => {
            notifier.$vToastify.error({
              title: 'Ouch!',
              body: err.response.data.msg
            })
          })
      }
    },
    onSignInSuccess ({ commit }, payload) {
      commit('CHANGE_NOWLOADING')
      const idToken = payload.getAuthResponse().id_token
      axios({
        url: 'https://ancient-crag-74194.herokuapp.com/oAuth',
        method: 'POST',
        headers: {
          user_token: idToken
        }
      })
        .then(result => {
          console.log(result)
          if (!result.data.token) {
            router.push({ path: '/register' })
            commit('CHANGE_GMAIL', result.data.email)
          } else {
            localStorage.setItem('token', result.data.token)
            localStorage.setItem('name', result.data.name)
            localStorage.setItem('store_name', result.data.store_name)
            localStorage.setItem('store_id', result.data.store_id)
            localStorage.setItem('img_url', result.data.img_url)
            commit('CHANGE_LOGIN_STATUS')
            notifier.$vToastify.success({
              title: 'Success',
              body: `Welcome, ${result.data.name}`
            })
            router.push({ name: 'Dashboard' })
          }
        })
        .catch(err => {
          notifier.$vToastify.error({
            title: 'Ouch!',
            body: err.response.data.msg
          })
        })
        .finally(() => {
          commit('CHANGE_NOWLOADING')
        })
    },
    onSignInError ({ commit }, payload) {
      console.log('OH NOES', payload)
    }
  },
  getters: {
  }
})

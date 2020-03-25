import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router/'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    notification: {
      color: '',
      msg: ''
    },
    dashboardAlert: {
      msg: 'test',
      show: false
    },
    testVuex: 'Vuex Store Online',
    appName: 'cms_client',
    // serverURL: 'https://tranquil-lowlands-54278.herokuapp.com',
    serverURL: 'http://localhost:3000',
    _isLogin: false,
    _pageLoading: true,
    inputCred: {
      email: 'test01@mail.com',
      password: 'leleyeye'
    },
    dbCred: {
      id: '',
      email: '',
      token: ''
    },
    products: []
  },
  getters: {
    isLogin: state => {
      return state._isLogin
    },
    productsTable: state => {
      const table = []
      state.products.forEach(item => {
        table.push(item)
      })
      return table
    },
    isAlert: state => {
      return state.dashboardAlert.show
    },
    alertMsg: state => {
      return state.dashboardAlert.msg
    }
  },
  mutations: {
    userLogin (state, { payload }) {
      state.dbCred.id = payload.id
      state.dbCred.email = payload.email
      state.dbCred.token = payload.token
      state._isLogin = true
      localStorage.setItem(state.appName, JSON.stringify({ token: payload.token }))
      router.push({ name: 'Dashboard' })
    },
    userLogout (state, payload) {
      state.dbCred.id = ''
      state.dbCred.email = ''
      state.dbCred.token = ''
      localStorage.removeItem(state.appName)
      state._isLogin = false
      router.push({ name: 'Login' })
    },
    startLoading (state, payload) {
      state._pageLoading = true
    },
    stopLoading (state, payload) {
      state._pageLoading = false
    },
    emptyProducts (state, payload) {
      state.products = []
    },
    appendProduct (state, payload) {
      state.products.push(payload)
    },
    emptyNotification (state) {
      state.notification.msg = ''
    },
    showNotification (state, message) {
      state.notification.msg = message
      state.notification.color = 'text-info'
    },
    showError (state, message) {
      state.notification.msg = message
      state.notification.color = 'text-danger'
    },
    showSuccess (state, message) {
      state.notification.msg = message
      state.notification.color = 'text-success'
    },
    showAlert (state, message) {
      state.dashboardAlert.show = true
      state.dashboardAlert.msg = message
    },
    hideAlert (state) {
      state.dashboardAlert.show = false
    }
  },
  actions: {
    login (context, payload) {
      context.commit('startLoading')
      context.commit('emptyNotification')
      axios({
        url: `${context.state.serverURL}/login`,
        method: 'POST',
        data: payload
      })
        .then(result => {
          context.commit({
            type: 'userLogin',
            payload: { id: result.data.id, email: result.data.email, token: result.data.access_token }
          })
        })
        .catch(err => {
          context.commit('showError', err.response.data.error)
        })
        .finally(_ => {
          setTimeout(() => {
            context.commit('stopLoading')
          }, 500)
        })
    },
    loginToken (context, payload) {
      // get id and email from token here
      context.commit('startLoading')
      return axios({
        url: `${context.state.serverURL}/userPayload`,
        method: 'GET',
        headers: payload
      })
    },
    logout (context, payload) {
      context.commit({
        type: 'userLogout'
      })
    },
    register (context, payload) {
      context.commit('startLoading')
      context.commit('emptyNotification')
      axios({
        url: `${context.state.serverURL}/register`,
        method: 'POST',
        data: payload
      })
        .then(result => {
          context.commit({
            type: 'userLogin',
            payload: { id: result.data.id, email: result.data.email, token: result.data.access_token }
          })
        })
        .catch(err => {
          context.commit('showError', err.response.data.error)
        })
        .finally(_ => {
          setTimeout(() => {
            context.commit('stopLoading')
          }, 500)
        })
    },
    fetchProduct (context, payload) {
      context.commit('startLoading')
      return axios({
        url: `${context.state.serverURL}/product`,
        method: 'GET',
        headers: {
          access_token: context.state.dbCred.token
        }
      })
    },
    createNew (context, payload) {
      context.commit('startLoading')
      context.commit('emptyNotification')
      axios({
        url: `${context.state.serverURL}/product`,
        method: 'POST',
        headers: {
          access_token: context.state.dbCred.token
        },
        data: payload
      })
        .then(result => {
          context.commit('appendProduct', result.data)
          router.push({ name: 'ProductContainer' })
        })
        .catch(err => {
          context.commit('showError', err.response.data.errors[0])
        })
        .finally(_ => {
          context.commit('stopLoading')
        })
    },
    editProduct (context, payload) {
      context.commit('startLoading')
      context.commit('emptyNotification')
      axios({
        url: `${context.state.serverURL}/product/${payload.id}`,
        method: 'PUT',
        headers: {
          access_token: context.state.dbCred.token
        },
        data: payload.item
      })
        .then(result => {
          context.commit('appendProduct', result.data)
          router.push({ name: 'ProductContainer' })
        })
        .catch(err => {
          context.commit('showError', err.response.data.errors[0])
        })
        .finally(_ => {
          context.commit('stopLoading')
        })
    },
    deleteProduct (context, payload) {
      context.commit('startLoading')
      context.commit('emptyNotification')
      axios({
        url: `${context.state.serverURL}/product/${payload.id}`,
        method: 'DELETE',
        headers: {
          access_token: context.state.dbCred.token
        }
      })
        .then(_ => {
          context.commit('showAlert', 'Item deleted')
          router.push({ name: 'ProductContainer' })
        })
        .catch(err => {
          context.commit('showError', err.response.data)
        })
        .finally(_ => {
          context.commit('stopLoading')
        })
    }
  }
})

export default store

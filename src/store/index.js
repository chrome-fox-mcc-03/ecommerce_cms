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
    testVuex: 'Vuex Store Online',
    appName: 'cms_client',
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
    }
  },
  mutations: {
    userLogin (state, { payload }) {
      console.log(payload, 'userlogin')
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
    }
  },
  actions: {
    login (context, payload) {
      // console.log(payload)
      // console.log(payload, 'login')
      context.commit('startLoading')
      axios({
        url: `${context.state.serverURL}/login`,
        method: 'POST',
        data: payload
      })
        .then(result => {
          // console.log(result.data)
          context.commit({
            type: 'userLogin',
            payload: { id: result.data.id, email: result.data.email, token: result.data.access_token }
          })
        })
        .catch(err => {
          console.log(err.response.data)
        })
        .finally(_ => {
          setTimeout(() => {
            context.commit('stopLoading')
          }, 500)
        })
    },
    loginToken (context, payload) {
      // console.log(payload, 'loginToken')
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
      console.log(payload, 'register')
      context.commit('startLoading')
      axios({
        url: `${context.state.serverURL}/register`,
        method: 'POST',
        data: payload
      })
        .then(result => {
          console.log(result.data)
          context.commit({
            type: 'userLogin',
            payload: { id: result.data.id, email: result.data.email, token: result.data.access_token }
          })
        })
        .catch(err => {
          console.log(err.response.data)
        })
        .finally(_ => {
          setTimeout(() => {
            context.commit('stopLoading')
          }, 500)
        })
    },
    fetchProduct (context, payload) {
      context.commit('startLoading')
      console.log(context.state.dbCred, 'fetchProduct')
      return axios({
        url: `${context.state.serverURL}/product`,
        method: 'GET',
        headers: {
          access_token: context.state.dbCred.token
        }
      })
    },
    createNew (context, payload) {
      console.log(payload, 'createNew')
      context.commit('startLoading')
      axios({
        url: `${context.state.serverURL}/product`,
        method: 'POST',
        headers: {
          access_token: context.state.dbCred.token
        },
        data: payload
      })
        .then(result => {
          console.log(result.data, 'created item')
          context.commit('appendProduct', result.data)
          router.push({ name: 'ProductContainer' })
        })
        .catch(err => {
          console.log(err.response.data)
        })
        .finally(_ => {
          context.commit('stopLoading')
        })
    }
  }
})

export default store

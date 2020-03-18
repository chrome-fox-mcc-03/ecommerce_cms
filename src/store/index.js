import Vue from 'vue'
import Vuex from 'vuex'
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
    _isLogin: false,
    _pageLoading: false,
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
      state.inputCred.email = ''
      state.inputCred.password = ''
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
      console.log(payload, 'login')
      if (payload.email === 'test01@mail.com' && payload.password === 'leleyeye') {
        console.log('cred success')
        context.commit({
          type: 'userLogin',
          payload: { id: 999, email: payload.email, token: 'token' }
        })
      }
    },
    loginToken (context, payload) {
      console.log(payload, 'loginToken')
      return new Promise(function (resolve, reject) {
        setTimeout(() => {
          resolve(true)
        }, 1)
      })
    },
    logout (context, payload) {
      context.commit({
        type: 'userLogout'
      })
    },
    register (context, payload) {
      console.log(payload, 'register')
      console.log(context.state.inputCred)
      const { email } = payload
      context.commit({
        type: 'userLogin',
        payload: { id: 999, email, token: 'token' }
      })
    },
    fetchProduct (context, payload) {
      const items = [
        { id: 1, name: 'product01', price: '0', stock: '0', UserId: 1 },
        { id: 2, name: 'product02', price: '0', stock: '0', UserId: 1 },
        { id: 3, name: 'product03', price: '0', stock: '0', UserId: 1 }
      ]
      context.commit('startLoading')
      items.forEach(item => {
        context.commit('appendProduct', item)
      })
      setTimeout(() => {
        context.commit('stopLoading')
      }, 1000)
    },
    createNew (context, payload) {
      console.log(payload)
      context.commit('startLoading')
      payload.UserId = 1
      setTimeout(() => {
        context.commit('stopLoading')
        context.commit('emptyProducts', payload)
        context.commit('appendProduct', payload)
        router.push({ name: 'ProductContainer' })
      })
    }
  }
})

export default store

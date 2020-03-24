import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    loginTo (context, payload) {
      return Axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    registering (context, payload) {
      return Axios({
        method: 'POST',
        url: 'http://localhost:3000/register',
        data: {
          email: payload.email,
          password: payload.password,
          role: payload.role
        }
      })
    }
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    signedIn: false
  },
  mutations: {
    SET_SIGNEDIN (state, payload) {
      state.signedIn = payload
    }
  },
  actions: {
    signIn (context, payload) {
      return axios({
        method: 'post',
        url: 'http://localhost:3000/signin',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    signOut (context) {
      context.commit('SET_SIGNEDIN', false)
    },
    checkVuex () {
      console.log('vue xxxxxxxxxxxxxxxx')
    }
  }
})

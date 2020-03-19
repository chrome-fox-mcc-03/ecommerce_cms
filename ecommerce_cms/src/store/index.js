import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../axios/config';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isAuth: false,
    loading: false,
    error: false,
    errorMessages: []
  },
  mutations: {
    SUCCESS_AUTH(state) {
      state.isAuth = true;
    },
    LOGOUT(state) {
      state.isAuth = false;
    },
    SET_LOADING(state, status) {
      state.loading = status;
    },
    SET_ERROR_MESSAGE(state, payload) {
      if (!Array.isArray(payload)) {
        state.errorMessages = [payload];
      } else {
        state.errorMessages = payload;
      }
      state.error = true;
    },
    SET_ERROR_STATUS(state, payload) {
      state.error = payload;
    }
  },
  actions: {
    registerAdmin(context, payload) {
      this.commit('SET_LOADING', true);
      return axios({
        method: 'POST',
        url: '/register',
        data: payload
      });
    },
    loginAdmin(context, payload) {
      this.commit('SET_LOADING', true);
      return axios({
        method: 'POST',
        url: '/login',
        data: payload
      });
    }
  }
});

export default store;
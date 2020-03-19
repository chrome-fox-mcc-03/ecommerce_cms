import Vue from "vue";
import Vuex from "vuex";
import axios from "../config/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    isAuth: false,
    error: false,
    items: [],
    errMsg: []
  },
  mutations: {
    onLoading(state, status) {
      state.loading = status;
    },
    onAuth(state) {
      state.isAuth = true;
    },
    onLogout(state) {
      state.isAuth = false;
    },
    setErrStatus(state, payload) {
      state.error = payload;
    },
    setItems(state, payload) {
      state.items = payload;
    },
    setErrMsg(state, payload) {
      if (Array.isArray(payload)) {
        state.errMsg = payload;
      } else {
        state.errMsg = [payload];
      }
    }
  },
  actions: {
    adminRegister({ commit }, payload) {
      commit('onLoading', true);
      return axios({
        url: "/register",
        method: "POST",
        data: {
          email: payload.email,
          password: payload.password
        }
      });
    },

    loginAdmin({ commit }, payload) {
      commit('onLoading', true);
      return axios({
        url: "/login",
        method: "POST",
        data: {
          email: payload.email,
          password: payload.password
        }
      });
    }
  },

});

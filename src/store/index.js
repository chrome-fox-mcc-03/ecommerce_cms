import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    isLoggedIn: false,
    user: {
      email: null,
      password: null,
      username: null,
      role: null
    }
  },
  mutations: {
    SET_USER(state, payload) {
      state.user.email = payload.email;
      state.user.password = payload.password;
      state.user.username = payload.username;
      state.user.role = payload.role;
    },
    SET_IS_LOGGED_IN(state, payload) {
      state.isLoggedIn = payload;
    },
    SET_LOADING(state, payload) {
      state.isLoading = payload;
    }
  },
  actions: {},
  getters: {}
});

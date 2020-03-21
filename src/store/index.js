import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../config/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    categories: [],
  },
  mutations: {
    SET_IDTOKEN(state, payload) {
      state.idToken = payload;
    },
    SET_PRODUCT(state, payload) {
      state.products = payload;
    },
    SET_CATEGORY(state, payload) {
      state.categories = payload;
    },
  },
  actions: {
    login(context, userData) {
      return axios({
        method: 'POST',
        url: '/user/login',
        data: {
          email: userData.email,
          password: userData.password,
        },
      });
    },
    getProduct({ commit }) {
      const loader = Vue.prototype.$loading.show({
        // Optional parameters
        container: null,
        canCancel: true,
        onCancel: this.onCancel,
      });
      axios({
        method: 'GET',
        url: '/product',
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then((result) => {
          loader.hide();
          commit('SET_PRODUCT', result.data);
        })
        .catch((err) => {
          loader.hide();
          this.$toasted.show(err.response.data.errors[0], {
            theme: 'bubble',
            position: 'top-right',
            duration: 3000,
          });
        });
    },
    deleteProduct(context, id) {
      return axios({
        method: 'DELETE',
        url: `/product/${id}`,
        headers: {
          access_token: localStorage.access_token,
        },
      });
    },
    addProduct(context, productData) {
      return axios({
        method: 'POST',
        url: '/product',
        headers: {
          access_token: localStorage.access_token,
        },
        data: {
          name: productData.name,
          image_url: productData.image_url,
          price: productData.price,
          stock: productData.stock,
          description: productData.description,
          CategoryId: productData.CategoryId,
        },
      });
    },
    getCategory({ commit }) {
      const loader = Vue.prototype.$loading.show({
        // Optional parameters
        container: null,
        canCancel: true,
        onCancel: this.onCancel,
      });
      axios({
        method: 'GET',
        url: '/category',
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then((result) => {
          commit('SET_CATEGORY', result.data);
          loader.hide();
        })
        .catch((err) => {
          Vue.prototype.$toasted.show(err.response.data.errors[0], {
            theme: 'bubble',
            position: 'top-right',
            duration: 3000,
          });
          loader.hide();
        });
    },
    editProduct(context, productData) {
      return axios({
        method: 'PUT',
        url: `/product/${productData.id}`,
        headers: {
          access_token: localStorage.access_token,
        },
        data: {
          name: productData.name,
          image_url: productData.image_url,
          price: productData.price,
          stock: productData.stock,
          description: productData.description,
        },
      });
    },
    deleteCategory(context, id) {
      return axios({
        method: 'DELETE',
        url: `/category/${id}`,
        headers: {
          access_token: localStorage.access_token,
        },
      });
    },
    addCategory(context, categoryData) {
      return axios({
        method: 'POST',
        url: '/category',
        headers: {
          access_token: localStorage.access_token,
        },
        data: {
          name: categoryData.name,
        },
      });
    },
    editCategory(context, categoryData) {
      return axios({
        method: 'PUT',
        url: `/category/${categoryData.id}`,
        headers: {
          access_token: localStorage.access_token,
        },
        data: {
          name: categoryData.name,
        },
      });
    },
  },
  modules: {
  },
  getters: {
  },
});

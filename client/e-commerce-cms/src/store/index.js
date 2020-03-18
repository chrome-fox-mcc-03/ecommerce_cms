import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    products: [],
    productUpdate: {
      id: null,
      name: '',
      image_url: '',
      price: null,
      stock: null
    },
    productDetail: {
      id: null,
      name: '',
      image_url: '',
      price: null,
      stock: null
    }
  },
  mutations: {
    SET_LOGIN (state, value) {
      state.isLogin = value
    },
    SET_POKEMONS (state, value) {
      state.products = value
    },
    SET_PRODUCTUPDATE (state, value) {
      state.productUpdate.id = value.id
      state.productUpdate.name = value.name
      state.productUpdate.image_url = value.image_url
      state.productUpdate.price = value.price
      state.productUpdate.stock = value.stock
    },
    SET_PRODUCTDETAIL (state, value) {
      state.productDetail.id = value.id
      state.productDetail.name = value.name
      state.productDetail.image_url = value.image_url
      state.productDetail.price = value.price
      state.productDetail.stock = value.stock
    }
  },
  actions: {
    register (context, payload) {
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/register',
        data: payload
      })
    },
    login (context, payload) {
      const email = payload.email
      const password = payload.password
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: {
          email,
          password
        }
      })
    },
    getProducts (context) {
      const token = localStorage.getItem('token')
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products',
        headers: {
          token
        }
      })
        .then(result => {
          context.commit('SET_POKEMONS', result.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      const token = localStorage.getItem('token')
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/products',
        headers: {
          token
        },
        data: payload
      })
    },
    productUpdate (context, payload) {
      const id = payload
      const token = localStorage.getItem('token')
      axios({
        method: 'GET',
        url: `http://localhost:3000/products/${id}`,
        headers: {
          token
        }
      })
        .then(result => {
          const value = result.data
          // console.log(this.state.productUpdate)
          context.commit('SET_PRODUCTUPDATE', value)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateProduct (context, payload) {
      console.log('MUASOOOOOK')
      console.log(payload)
      const id = payload.id
      const token = localStorage.getItem('token')
      const toUpdate = {
        name: payload.name,
        image_url: payload.image_url,
        price: payload.price,
        stock: payload.stock
      }
      console.log('<<<<<<')
      console.log(toUpdate)
      return axios({
        method: 'PUT',
        url: `http://localhost:3000/products/${id}`,
        headers: {
          token
        },
        data: toUpdate
      })
    },
    deleteProduct (context, payload) {
      const id = payload
      const token = localStorage.getItem('token')
      return axios({
        method: 'DELETE',
        url: `http://localhost:3000/products/${id}`,
        headers: {
          token
        }
      })
    },
    detailProduct (context, payload) {
      const id = payload.id
      console.log(id)
      const token = localStorage.getItem('token')
      axios({
        method: 'GET',
        url: `http://localhost:3000/products/${id}`,
        headers: {
          token
        }
      })
        .then(result => {
          console.log('ini dari then')
          context.commit('SET_PRODUCTDETAIL', result.data)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    notification (context, payload) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: payload.icon,
        title: payload.title
      })
      return ''
    }
  },
  getters: {}
})

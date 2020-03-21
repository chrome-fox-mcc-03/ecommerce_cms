import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		products: [],
		isLogin: false
	},
	mutations: {
		SET_PRODUCTS (state, payload) {
			state.products = payload
		},
		SET_ISLOGIN (state, payload) {
			state.isLogin = payload
		}
	},
	actions: {
		getProducts ({ commit }, payload) {
			return axios({
				url: 'http://localhost:3000/product',
				method: 'get',
				headers: {
					token: localStorage.getItem('token')
				}
			})
				.then((result) => {
					commit('SET_PRODUCTS', result.data.data)
				}).catch((err) => {
					throw err
				})
		},
		login ({ commit }, payload) {
			return axios({
				url: 'http://localhost:3000/login',
				method: 'post',
				data: {
					email: payload.email,
					password: payload.password
				}
			})
		},
		addProduct ({ commit }, payload) {
			return axios({
				url: 'http://localhost:3000/product',
				method: 'post',
				headers: {
					token: localStorage.getItem('token')
				},
				data: {
					name: payload.name,
					description: payload.description,
					img_url: payload.img_url,
					price: payload.price,
					stock: payload.stock
				}
			})
		},
		deleteProduct ({ commit }, payload) {
			return axios({
				method: 'delete',
				url: 'http://localhost:3000/product/' + payload.id,
				headers: {
					token: localStorage.getItem('token')
				}
			})
		},
		editProduct ({ commit }, payload) {
			return axios({
				url: 'http://localhost:3000/product/' + payload.id,
				method: 'put',
				headers: {
					token: localStorage.getItem('token')
				},
				data: {
					name: payload.name,
					img_url: payload.img_url,
					description: payload.description,
					price: payload.price,
					stock: payload.stock
				}
			})
		},
		getProduct ({ commit }, payload) {
			return axios({
				url: 'http://localhost:3000/product/' + payload.id,
				method: 'get',
				headers: {
					token: localStorage.getItem('token')
				}
			})
		}
	}
})

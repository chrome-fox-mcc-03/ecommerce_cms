import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductList from '../views/ProductList'
import Login from '../components/Login'
import Welcome from '../components/Welcome'
import ProductDetail from '../views/ProductDetail'
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
	toast: true,
	position: 'bottom-start',
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
	onOpen: (toast) => {
		toast.addEventListener('mouseenter', Swal.stopTimer)
		toast.addEventListener('mouseleave', Swal.resumeTimer)
	}
})

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		redirect: {
			name: 'Welcome'
		},
		children: [
			{
				path: 'welcome',
				component: Welcome,
				name: 'Welcome'
			},
			{
				path: 'login',
				component: Login,
				name: 'Login'
			}
		]
	},
	{
		path: '/product',
		name: 'ProductList',
		component: ProductList,
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/product/:id',
		name: 'ProductDetail',
		component: ProductDetail,
		meta: {
			requiresAuth: true
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	linkActiveClass: 'active',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		const token = localStorage.getItem('token')
		if (token) {
			next()
		} else {
			Toast.fire({
				icon: 'error',
				title: 'Please login first!'
			})
			next({
				path: '/'
			})
		}
	} else {
		next()
	}
})

router.beforeEach((to, from, next) => {
	const token = localStorage.getItem('token')
	if (to.name === 'Login' && token) next({ name: 'ProductList' })
	else next()
})

export default router

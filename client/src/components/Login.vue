<template>
	<div class="login d-flex justify-content-center">
		<div class="p-4" style="background-color: whitesmoke; width: 500px; border-radius: 10px;">
			<h2>Login</h2>
			<form @submit.prevent='login'>
				<div class="form-group">
					<label for="email">Email address</label>
					<input v-model='email' type="email" class="form-control" id="email" placeholder="Enter email">
				</div>
				<div class="form-group">
					<label for="password">Password</label>
					<input v-model='password' type="password" class="form-control" id="password" placeholder="Password">
				</div>
				<div>
					<router-link to='/welcome' class="btn btn-danger">Back</router-link>
					<button type="submit" class="btn btn-primary">Login</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
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

export default {
	data () {
		return {
			email: '',
			password: ''
		}
	},
	methods: {
		login () {
			const obj = {
				email: this.email,
				password: this.password
			}
			this.$store.dispatch('login', obj)
				.then((result) => {
					localStorage.setItem('token', result.data.token)
					this.email = ''
					this.password = ''
					this.$store.commit('SET_ISLOGIN', true)
					this.$router.push({ name: 'ProductList' })
				}).catch((err) => {
					console.log(err.response)
					Toast.fire({
						icon: 'error',
						title: err.response.data.message
					})
				})
		}
	}
}
</script>

<style>
</style>

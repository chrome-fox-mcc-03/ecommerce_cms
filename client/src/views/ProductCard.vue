<template>
  <div class='col-md-3'>
      <div class='card mb-3 p-3'>
        <img class='card-img-top' :src='imgUrl' alt='Card image cap'>
        <div class='card-body'>
			<div class="card-content">
				<h5 class='card-title'>{{data.name}}</h5>
				<p class='card-text'>{{data.description}}</p>
				<p class='card-text'>Price: Rp. {{data.price}}</p>
				<p class='card-text'>Stock: {{data.stock}} pc(s)</p>
			</div>
			<div class="btn-action">
				<router-link :to='`/product/${data.id}`' :data="data" class='btn btn-primary'>Update</router-link>
				<button @click='confirmDelete(data.id)' class='btn btn-danger'>Delete</button>
			</div>
        </div>
      </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'

const swalWithBootstrapButtons = Swal.mixin({
	customClass: {
		confirmButton: 'btn btn-success',
		cancelButton: 'btn btn-danger'
	},
	buttonsStyling: false
})

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
	props: ['data'],
	computed: {
		imgUrl () {
			const defaultUrl = 'https://omegamma.com.au/wp-content/uploads/2017/04/default-image.jpg'
			if (!this.data.img_url) {
				return defaultUrl
			} else {
				return this.data.img_url
			}
		}
	},
	methods: {
		confirmDelete (id) {
			swalWithBootstrapButtons.fire({
				title: 'Are you sure?',
				text: "You won't be able to revert this!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Yes, delete it!',
				cancelButtonText: 'No, cancel!',
				reverseButtons: true
			})
				.then((result) => {
					if (result.value) {
						const obj = {
							id
						}
						this.$store.dispatch('deleteProduct', obj)
							.then((result) => {
								this.$store.dispatch('getProducts')
								Toast.fire({
									icon: 'success',
									title: 'Data deleted!'
								})
							}).catch((err) => {
								console.log(err.response)
								Toast.fire({
									icon: 'error',
									title: err.response.data.message
								})
							})
					}
				})
		}
	}
}
</script>

<style>
.card {
	height: 500px;
	background-color: whitesmoke;
}

.card-content {
	height: 200px;
	overflow-y: auto;
}

.card-img-top {
    width: 100%;
    height: 200px;
}
</style>

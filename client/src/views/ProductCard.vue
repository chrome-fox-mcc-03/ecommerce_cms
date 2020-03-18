<template>
  <div class='col-md-3'>
      <div class='card mb-3 p-3' style='width: 18rem;'>
        <img class='card-img-top' :src='imgUrl' alt='Card image cap'>
        <div class='card-body'>
          <h5 class='card-title'>{{data.name}}</h5>
          <p class='card-text'>{{data.description}}</p>
          <p class='card-text'>Price: Rp. {{data.price}}</p>
          <p class='card-text'>Stock: {{data.stock}} pc(s)</p>
          <div class="row">
            <router-link :to='`/product/${data.id}`' :data="data" class='btn btn-primary'>Update Data</router-link>
            <button @click='confirmDelete(data.id)' class='btn btn-danger'>Delete Data</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'

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
						this.deleteProduct(id)
							.then((result) => {
								this.$emit('fetchProduct')
								Toast.fire({
									icon: 'success',
									title: 'Data deleted'
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
		}, //
		deleteProduct (id) {
			return axios({
				method: 'delete',
				url: 'http://localhost:3000/product/' + id,
				headers: {
					token: localStorage.getItem('token')
				}
			})
		}
	}
}
</script>

<style>
.card-img-top {
    width: 100%;
    height: 200px;
}
</style>

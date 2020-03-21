<template>
  <div>
      <form @submit.prevent='editProduct'>
            <div class="form-group">
                <input v-model='name' type="text" class="form-control" id="name" placeholder="Product name">
            </div>
            <div class="form-group">
                <input v-model='description' type="text" class="form-control" id="description" placeholder="Description">
            </div>
            <div class="form-group">
                <input v-model='img_url' type="text" class="form-control" id="img-url" placeholder="Image URL">
            </div>
            <div class="form-group">
                <input v-model='price' type="text" class="form-control" id="price" placeholder="Price">
            </div>
            <div class="form-group">
                <input v-model='stock' type="number" min="0" class="form-control" id="stock" placeholder="Stock">
            </div>
            <button type="submit" class="btn btn-primary">Update Product</button>
        </form>
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
			id: '',
			name: '',
			img_url: '',
			description: '',
			price: '',
			stock: 0
		}
	},
	methods: {
		editProduct () {
			const obj = {
				id: this.id,
				name: this.name,
				img_url: this.img_url,
				description: this.description,
				price: this.price,
				stock: this.stock
			}
			this.$store.dispatch('editProduct', obj)
				.then((result) => {
					this.$router.push({ name: 'ProductList' })
					Toast.fire({
						icon: 'success',
						title: 'Data updated!'
					})
				}).catch((err) => {
					console.log(err.response)
				})
		},
		getProduct () {
			this.$store.dispatch('getProduct', { id: this.id })
				.then((result) => {
					const fixReasult = result.data.data
					this.name = fixReasult.name
					this.description = fixReasult.description
					this.img_url = fixReasult.img_url
					this.stock = fixReasult.stock
					this.price = fixReasult.price
				}).catch((err) => {
					console.log(err.response)
					Toast.fire({
						icon: 'error',
						title: err.response.data.message
					})
				})
		}
	},
	created () {
		this.id = this.$route.params.id
		this.getProduct()
	}
}
</script>

<style>

</style>

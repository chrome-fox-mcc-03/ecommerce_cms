<template>
  <div class='row mt-3'>
	<div class='col-md-3'>
      <div class='card mb-3 p-3 form-add-product'>
		<h2>Add Product</h2>
		<br>
        <form @submit.prevent='addProduct'>
            <div class="form-group">
                <!-- <label for="name">Product name</label> -->
                <input v-model='name' type="text" class="form-control" id="name" placeholder="Product name">
            </div>
            <div class="form-group">
                <!-- <label for="description">Description</label> -->
                <input v-model='description' type="text" class="form-control" id="description" placeholder="Description">
            </div>
            <div class="form-group">
                <!-- <label for="img-url">Image URL</label> -->
                <input v-model='img_url' type="text" class="form-control" id="img-url" placeholder="Image URL">
            </div>
            <div class="form-group">
                <!-- <label for="price">Price</label> -->
                <input v-model='price' type="text" class="form-control" id="price" placeholder="Price">
            </div>
            <div class="form-group">
                <!-- <label for="stock">Stock</label> -->
                <input v-model='stock' type="number" min="0" class="form-control" id="stock" placeholder="Stock">
            </div>
            <button type="submit" class="btn btn-primary">Add Product</button>
        </form>
      </div>
    </div>
    <product-card v-for='product in products' :key="product.id" :data='product'></product-card>
  </div>
</template>

<script>
import ProductCard from './ProductCard'
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
			name: '',
			img_url: '',
			description: '',
			price: '',
			stock: 0
		}
	},
	computed: {
		products () {
			return this.$store.state.products
		}
	},
	components: {
		ProductCard
	},
	methods: {
		addProduct () {
			const obj = {
				name: this.name,
				description: this.description,
				img_url: this.img_url,
				price: this.price,
				stock: this.stock
			}
			this.$store.dispatch('addProduct', obj)
				.then((result) => {
					this.name = ''
					this.description = ''
					this.img_url = ''
					this.price = ''
					this.stock = 0
					this.$store.dispatch('getProducts')
					Toast.fire({
						icon: 'success',
						title: 'Data added!'
					})
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
		this.$store.dispatch('getProducts')
			.then((result) => {

			}).catch((err) => {
				console.log(err.response)
				Toast.fire({
					icon: 'error',
					title: err.response.data.message
				})
			})
	}
}
</script>

<style>
.form-add-product {
	height: 500px;
}
</style>

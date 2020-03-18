<template>
  <div class='row'>
	<div class='col-md-3'>
      <div class='card mb-3 p-3' style='width: 18rem;'>
		<h2>Add Product</h2>
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
    <product-card v-for='product in products' :key="product.id" :data='product' @fetchProduct='getProducts'></product-card>
  </div>
</template>

<script>
import axios from 'axios'
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
			products: [],
			name: '',
			img_url: '',
			description: '',
			price: '',
			stock: 0
		}
	},
	components: {
		ProductCard
	},
	methods: {
		getProducts () {
			axios({
				url: 'http://localhost:3000/product',
				method: 'get',
				headers: {
					token: localStorage.getItem('token')
				}
			})
				.then(({ data }) => {
					this.products = data.data
				}).catch((err) => {
					console.log(err.response)
					Toast.fire({
						icon: 'error',
						title: err.response.data.message
					})
				})
		},
		addProduct () {
			axios({
				url: 'http://localhost:3000/product',
				method: 'post',
				headers: {
					token: localStorage.getItem('token')
				},
				data: {
					name: this.name,
					description: this.description,
					img_url: this.img_url,
					price: this.price,
					stock: this.stock
				}
			})
				.then((result) => {
					this.name = ''
					this.description = ''
					this.img_url = ''
					this.price = ''
					this.stock = 0
					this.getProducts()
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
		this.getProducts()
		console.log(this.products)
	}
}
</script>

<style>

</style>

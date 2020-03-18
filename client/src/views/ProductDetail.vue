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
import axios from 'axios'

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
			axios({
				url: 'http://localhost:3000/product/' + this.id,
				method: 'put',
				headers: {
					token: localStorage.getItem('token')
				},
				data: {
					name: this.name,
					img_url: this.img_url,
					description: this.description,
					price: this.price,
					stock: this.stock
				}
			})
				.then((result) => {
					this.$router.push({ name: 'ProductList' })
				}).catch((err) => {
					console.log(err.response)
				})
		},
		getProduct () {
			axios({
				url: 'http://localhost:3000/product/' + this.id,
				method: 'get',
				headers: {
					token: localStorage.getItem('token')
				}
			})
				.then((result) => {
					const fixReasult = result.data.data
					this.name = fixReasult.name
					this.description = fixReasult.description
					this.img_url = fixReasult.img_url
					this.stock = fixReasult.stock
					this.price = fixReasult.price
				}).catch((err) => {
					console.log(err.response)
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

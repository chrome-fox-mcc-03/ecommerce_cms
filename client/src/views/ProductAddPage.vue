<template>
<div class="container">
  <form class="mt-5">
    <div class="form-row">
      <div class="form-group col-md-6">
        <label>Name</label>
        <input type="text" class="form-control" placeholder="Name" v-model="name">
      </div>
      <div class="form-group col-md-6">
        <label>Image</label>
        <input type="text" class="form-control" placeholder="Image" v-model="image">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label>Price</label>
        <input type="text" class="form-control" placeholder="Price" v-model="price">
      </div>
      <div class="form-group col-md-6">
        <label>Stock</label>
        <input type="text" class="form-control" placeholder="Stock" v-model="stock">
      </div>
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="addProduct">Add Product</button>
  </form>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      name: '',
      image: '',
      price: '',
      stock: '',
      token: localStorage.getItem('token')
    }
  },
  methods: {
    addProduct () {
      const name = this.name
      const image = this.image
      const price = this.price
      const stock = this.stock
      axios({
        method: 'POST',
        url: 'http://localhost:3000/product',
        data: {
          name,
          image_url: image,
          price,
          stock
        },
        headers: {
          token: this.token
        }
      })
        .then((result) => {
          this.$router.push('/product')
        }).catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

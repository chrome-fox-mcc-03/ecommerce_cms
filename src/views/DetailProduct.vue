<template>
    <div>
      <h2>Detail Product</h2>
      <div class="container">
        <div class="row">
          <div class="col-6">
            <img class="card-img-top" :src="product.image_url" :alt="product.name">
          </div>
          <div class="col-3">
            <p>Name : {{ product.name }}</p>
            <p>Price : {{ product.price }}</p>
            <p>Stock : {{ product.stock }}</p>
          </div>
          <div class="col-3">
            <router-link :to="`/products/${product.id}/edit`" class="btn btn-info">Edit</router-link><br>
            <button @click="deleteProduct(product.id)" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
      <router-view :product="product" ></router-view>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DetailProduct',
  data () {
    return {
      product: {}
    }
  },
  methods: {
    getDetailProduct () {
      const id = this.$route.params.id
      axios({
        method: 'get',
        url: `http://localhost:3000/products/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          this.product = data.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteProduct (id) {
      axios({
        method: 'delete',
        url: `http://localhost:3000/products/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          this.$store.dispatch('getProducts')
          this.$router.push('/products')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created () {
    this.getDetailProduct()
  }
}
</script>

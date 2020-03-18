<template>
  <div>
    <div class="navbar-dashboard">
      <Navbar />
    </div>
    <div class="body-dashboard">
      <h2>List Products</h2>
      <div class="container list-products">
        <div class="card card-product" v-for="(product, index) in products" :key="index">
          <div class="card-image">
            <figure class="image">
              <img :src="product.image_url">
            </figure>
          </div>
        <div class="content">
          <p>
          {{product.name}}
          </p>
          <p>Rp {{product.price}}</p>
          <p>Stock: {{product.stock}}</p>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">Edit</a>
          <a href="#" class="card-footer-item">Delete</a>
        </footer>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar'
export default {
  components: {
    Navbar
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('getProducts')
    console.log(this.$store.state, 'di list products')
  }
}
</script>

<template>
  <div class="product-list">
    <div class="card-container">
    <table class="uk-table uk-table-hover uk-table-middle uk-table-divider">
      <thead>
        <tr>
          <th class="uk-table-shrink">Image</th>
          <th class="uk-table-shrink">Title</th>
          <th class="">Description</th>
          <th class="">Stock</th>
          <th class=" ">Action</th>
        </tr>
      </thead>
      <tbody>
        <product-card v-for="(product, index) in products" :key="index" :product="product" :index="index"></product-card>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import axios from 'axios'
export default {
  name: 'UserProducts',
  data () {
    return {
      products: []
    }
  },
  components: {
    ProductCard
  },
  methods: {
    fetchProducts () {
      axios({
        method: 'GET',
        url: 'http://pokeapi.salestock.net/api/v2/pokemon/?limit=3&offset=0'
      })
        .then(response => {
          response.data.results.forEach(element => {
            this.products.push(element)
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style scoped>
</style>

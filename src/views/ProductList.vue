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
export default {
  name: 'UserProducts',
  data () {
    return {
    }
  },
  components: {
    ProductCard
  },
  methods: {
  },
  computed: {
    products () {
      console.log(this.$store.state.products)
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('getProducts')
  }
}
</script>

<style scoped>
</style>

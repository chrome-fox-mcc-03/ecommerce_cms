<template>
    <div>
        <div class="row">
          <div class="col-3">
            <h2>Product List</h2>
          </div>
          <div class="col-4">
            <button @click="toAddPage" type="button" class="btn btn-outline-primary btn-sm">Add Product</button>
          </div>
        </div>
        <div class="row">
            <Card v-for="product in products" :key="product.id" :product="product"/>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card'

export default {
  name: 'ListProducts',
  components: {
    Card
  },
  methods: {
    toAddPage () {
      this.$router.push('/products/create')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  mounted () {
    this.$store.commit('SET_ERROR', false)
    this.$store.commit('SET_ERRORS', [])
  }
}
</script>

<style scoped>
  button.btn.btn-outline-primary.btn-sm {
    margin-top: 6px ;
  }
</style>

<template>
<div class="main-dashboard">
    <div v-if="!isLoading" class="list-produucts">
      <h2>LIST PRODUCTS</h2>
      <div class="row">
        <Card
         v-for="product in products"
         :key="product.id"
         :product="product">
        </Card>
      </div>
    </div>

    <div v-else>
        <Loading></Loading>
    </div>
</div>

</template>

<script>
import Card from '../components/Card'
import Loading from '../components/Loading'
export default {
  name: 'Dashboard',
  components: {
    Card,
    Loading
  },
  data () {
    return {}
  },
  methods: {},
  computed: {
    products () {
      return this.$store.state.products
    },
    isLoading () {
      return this.$store.state.isLoading
    }
  },
  created () {
    this.$store.dispatch('getProducts')
  }
}
</script>

<style>

</style>

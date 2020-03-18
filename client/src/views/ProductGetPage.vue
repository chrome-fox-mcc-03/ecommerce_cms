<template>
  <div>
    <div class="row mt-5">
      <ProductItem v-for="item in items" :key="item.id" :data="item" />
    </div>
  </div>
</template>

<script>
import ProductItem from '../components/ProductItem'
export default {
  name: 'ProductGetPage',
  components: {
    ProductItem
  },
  computed: {
    items () {
      return this.$store.state.items
    }
  },
  created () {
    this.$store.dispatch('getProduct')
  }
}
</script>

<style scoped>
</style>

<template>
  <div v-if="products.length < 1">/DASHBOARD/PRODUCTS</div>
  <div v-else>
    <product-card v-for="(item, i) in products" :key="i" :item="item"></product-card>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'
export default {
  props: {
    products: Array
  },
  components: {
    ProductCard
  }
}
</script>

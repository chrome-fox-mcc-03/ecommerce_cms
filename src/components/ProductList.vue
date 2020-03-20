<template>
<div>
  <div v-if="products.length < 1">
    <img src="https://s.kaskus.id/r480x480/images/fjb/2018/12/29/jual_id_hit_gems_equip_gold_dll_serba_tumpah_malang_kota_1825535_1546067048.png" width="50%" height="50%" alt="SOLD OUT">
  </div>
  <div v-else>
    <product-card v-for="item in products" :key="item.id" :item="item"></product-card>
  </div>
</div>
</template>

<script>
import ProductCard from '../components/ProductCard'
export default {
  name: 'ProductList',
  components: {
    ProductCard
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('getProducts')
  }
}
</script>

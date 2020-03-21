<template>
<div>
  <h1>Products</h1>
  <vue-progress-bar/>
  <div id="ProductCard">
  <Card v-for="Product in Products" :key="Product.id" :Product="Product"/>
  </div>

</div>

</template>

<script>
import Card from '../components/ProductCard'
export default {
  name: 'Product',
  data () {
    return {
      Products: this.$store.state.Products
    }
  },
  components: {
    Card
  },
  created () {
    this.$store.dispatch('FetchProducts')
  }
}
</script>

<style>
#ProductCard {
    margin-left: 5%;
    margin-right: 15%;
    padding: 2%;
    margin-bottom: 5%;
    background-color: teal;
    flex-direction: row;
    border: unset;
    border-width: 100px;
    border-color: teal;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: flex-start;
    flex-wrap: wrap;
    overflow: scroll;
}
</style>

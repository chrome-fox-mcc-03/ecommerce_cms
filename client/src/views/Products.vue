<template>
  <div>
    <h1>Products</h1>
    <AddProduct></AddProduct>
    <ProductsTable></ProductsTable>
    <router-view></router-view>
  </div>
</template>

<script>
import ProductsTable from '../components/ProductsTable'
import AddProduct from '../components/AddProduct'

export default {
  name: 'Products',
  components: {
    ProductsTable,
    AddProduct
  }
}
</script>

<style>
</style>

<template>
  <sui-table basic="very" class="table">
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>No</sui-table-header-cell>
        <sui-table-header-cell>Name</sui-table-header-cell>
        <sui-table-header-cell>Image</sui-table-header-cell>
        <sui-table-header-cell>Price</sui-table-header-cell>
        <sui-table-header-cell>Stock</sui-table-header-cell>
        <sui-table-header-cell>Category</sui-table-header-cell>
        <sui-table-header-cell>Options</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body v-for="({ name, image_url, price, stock, Type }, i) in listProduct" :key="i">
      <sui-table-row>
        <sui-table-cell>{{i + 1}}</sui-table-cell>
        <sui-table-cell>{{name}}</sui-table-cell>
        <sui-table-cell>
          <img :src="image_url" alt="Product image">
        </sui-table-cell>
        <sui-table-cell>Rp. {{price.toLocaleString()}}</sui-table-cell>
        <sui-table-cell>{{stock}}</sui-table-cell>
        <sui-table-cell>{{Type.type}}</sui-table-cell>
        <sui-table-cell>
          <div is="sui-button-group">
            <sui-button color="blue" >Edit</sui-button>
            <sui-button-or />
            <sui-button negative>Delete</sui-button>
          </div>
        </sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
</template>

<script>
export default {
  name: 'TableListProduct',
  data () {
    return {
    }
  },
  computed: {
    listProduct () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

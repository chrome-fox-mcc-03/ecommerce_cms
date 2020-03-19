<template>
  <div class="card">
    <div class="card-header">
      Products
    </div>
    <div class="card-body">
      <button class="btn btn-primary">Add Product</button>
      <br>
      <br>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Category</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in $store.state.products" :key="product.id">
            <td>{{ index + 1 }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.stock }}</td>
            <td>{{ product.CategoryId }}</td>
            <td> Update | Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  created () {
    this.$store.dispatch('getProducts')
  }
}
</script>

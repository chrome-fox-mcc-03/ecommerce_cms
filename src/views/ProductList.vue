<template>
  <div class="card">
    <div class="card-header">
      Products
    </div>
    <div class="card-body">
      <button class="btn btn-primary" @click="addProduct">Add Product</button>
      <br>
      <br>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
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
            <td><img height="100" width="100" :src="product.img_url"></td>
            <td>{{ product.price }}</td>
            <td>{{ product.stock }}</td>
            <td>{{ product.Category.name }}</td>
            <td>
              <button class="btn btn-primary" @click="editProduct(product.id)">Edit</button> |
              <button class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button>
            </td>
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
  },
  methods: {
    addProduct () {
      this.$router.push('/dashboard/addproduct')
    },
    editProduct (id) {
      this.$router.push(`/dashboard/editproduct/${id}`)
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    }
  }
}
</script>

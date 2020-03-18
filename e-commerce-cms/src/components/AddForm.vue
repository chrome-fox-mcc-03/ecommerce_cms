<template>
  <div class="container form-space">
    <form @submit.prevent="addProduct" class="mt-5">
    <h2 class="mb-5">Add New Product</h2>
    <div class="form-group">
      <label for="product-name">Name</label>
      <input v-model="name" type="text" class="form-control" id="product-name" aria-describedby="emailHelp" placeholder="ex: Onitsuka Tiger Black">
    </div>
    <div class="form-group">
      <label for="product-price">Price</label>
      <input v-model="price" type="text" class="form-control" id="product-price" placeholder="ex: 650000">
    </div>
    <div class="form-group">
      <label for="product-stock">Stock</label>
      <input v-model="stock" type="text" class="form-control" id="product-stock" placeholder="ex: 50">
    </div>
    <div class="form-group">
      <label for="product-image">Image</label>
      <input v-model="image_url" type="text" class="form-control" id="product-image" placeholder="Place your image url here">
    </div>
    <button type="submit" class="btn btn-primary">Add</button>
  </form>
  </div>
</template>

<script>
export default {
  name: 'AddForm',
  data: function () {
    return {
      name: '',
      price: '',
      stock: '',
      image_url: ''
    }
  },
  methods: {
    addProduct: function () {
      console.log('addddd!!!')
      this.$store.dispatch('addProduct', {
        name: this.name,
        price: this.price,
        stock: this.stock,
        image_url: this.image_url
      })
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style>
.form-space {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}
</style>

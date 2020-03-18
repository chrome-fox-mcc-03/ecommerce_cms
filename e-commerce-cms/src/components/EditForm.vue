<template>
  <div class="container form-space">
    <form class="mt-5">
    <h2 class="mb-5">Edit Product</h2>
    <div class="form-group">
      <label for="product-name">Name</label>
      <input v-model="name" type="text" class="form-control" id="product-name" aria-describedby="emailHelp">
    </div>
    <div class="form-group">
      <label for="product-price">Price</label>
      <input v-model="price" type="text" class="form-control" id="product-price">
    </div>
    <div class="form-group">
      <label for="product-stock">Stock</label>
      <input v-model="stock" type="text" class="form-control" id="product-stock">
    </div>
    <div class="form-group">
      <label for="product-image">Image</label>
      <input v-model="image_url" type="text" class="form-control" id="product-image">
    </div>
    <button type="submit" class="btn btn-primary">Save Changes</button>
  </form>
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  data: function () {
    return {
      name: '',
      price: '',
      stock: '',
      image_url: ''
    }
  },
  created () {
    this.$store.dispatch('getProductById', this.$route.params.id)
      .then(({ data }) => {
        this.name = data.name
        this.price = data.price
        this.stock = data.stock
        this.image_url = data.image_url
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style>

</style>

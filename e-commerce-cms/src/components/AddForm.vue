<template>
  <div class="container form-space">
    <form class="mt-5">
    <h2 class="mb-5">Add New Product</h2>
    <div class="form-group">
      <label for="product-name">Name</label>
      <input type="email" class="form-control" id="product-name" aria-describedby="emailHelp">
    </div>
    <div class="form-group">
      <label for="product-price">Price</label>
      <input type="password" class="form-control" id="product-price">
    </div>
    <div class="form-group">
      <label for="product-stock">Stock</label>
      <input type="password" class="form-control" id="product-stock">
    </div>
    <div class="form-group">
      <label for="product-image">Image</label>
      <input type="password" class="form-control" id="product-image">
    </div>
    <router-link to="/dashboard" type="submit" class="btn btn-primary">Add</router-link>
  </form>
  </div>
</template>

<script>
export default {
  name: 'AddForm'
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

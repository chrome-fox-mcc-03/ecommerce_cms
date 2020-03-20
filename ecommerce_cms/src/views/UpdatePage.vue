<template>
  <div>
    <h1>Update Product</h1>
    <div class="container d-flex align-items-center">
      <form>
        <div class="form-group">
          <label for="product-name">Product Name</label>
          <input
            type="text"
            class="form-control"
            id="product-name"
            placeholder="Product Name"
          />
        </div>
        <div class="form-group">
          <label for="product-price">Product Price</label>
          <input
            type="text"
            class="form-control"
            id="product-price"
            placeholder="Product Price"
          />
        </div>
        <div class="form-group">
          <label for="product-stock">Product Stock</label>
          <input
            type="text"
            class="form-control"
            id="product-stock"
            placeholder="Product Stock"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'updatePage'
}
</script>

<style>
</style>

<template>
  <div>
    <h1>Upload Product</h1>
    <div class="container d-flex align-items-center">
      <form @submit.prevent="upload">
        <div class="form-group">
          <label for="product-name">Product Name</label>
          <input
            v-model="name"
            type="text"
            class="form-control"
            id="product-name"
            placeholder="Product Name"
          />
        </div>
        <div class="form-group">
          <label for="product-price">Product Price</label>
          <input
            v-model="price"
            type="text"
            class="form-control"
            id="product-price"
            placeholder="Product Price"
          />
        </div>
        <div class="form-group">
          <label for="product-stock">Product Stock</label>
          <input
            v-model="stock"
            type="text"
            class="form-control"
            id="product-stock"
            placeholder="Product Stock"
          />
        </div>
        <div class="form-group">
          <label for="product-image">Product Image</label>
          <input
            v-model="image"
            type="text"
            class="form-control"
            id="product-image"
            placeholder="Product Image"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'uploadPage',
  data: () => {
    return {
      name: '',
      price: '',
      stock: '',
      image: ''
    }
  },
  methods: {
    upload: function () {
      const productData = {
        name: this.name,
        price: this.price,
        stock: this.stock,
        image: this.image
      }
      this.$store.dispatch('addProduct', productData)
        .then(_ => {
          this.$router.push('/product')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
</style>

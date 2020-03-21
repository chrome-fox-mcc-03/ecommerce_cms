<template>
  <div class="container form-space pt-5">
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
      <label for="product-category">Category</label>
      <select v-model="category" class="form-control" id="product-category">
        <option disabled value="">Category</option>
        <option>Men</option>
        <option>Women</option>
      </select>
    </div>
    <div class="form-group">
      <label for="product-image">Image</label>
      <input v-model="image_url" type="text" class="form-control" id="product-image" placeholder="Place your image url here">
      <small class="form-text text-muted">Square and centered images are recommended</small>
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
      image_url: '',
      category: ''
    }
  },
  methods: {
    addProduct: function () {
      this.$store.commit('SET_ISLOADING', true)
      this.$store.dispatch('addProduct', {
        name: this.name,
        price: this.price,
        stock: this.stock,
        image_url: this.image_url,
        category: this.category
      })
        .then(({ data }) => {
          this.$vToastify.success(data.name, 'Successfully added')
          this.$router.push('/dashboard')
        })
        .catch(err => {
          for (let i = 0; i < err.response.data.message.length; i++) {
            this.$vToastify.error(err.response.data.message[i], 'Oops')
          }
        })
        .finally(_ => {
          this.$store.commit('SET_ISLOADING', false)
        })
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

<template>
  <div class="w-100 d-flex justify-content-around">
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="product.name" type="text" class="form-control" id="name" aria-describedby="emailHelp">
      </div>
      <div class="d-flex justify-content-around">
        <div class="form-group">
          <label for="price">Price</label>
          <input v-model="product.price" type="text" class="form-control" id="price" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
          <label for="stock">Stock</label>
          <input v-model="product.stock" type="text" class="form-control" id="stock" aria-describedby="emailHelp">
        </div>
      </div>
      <button @click.prevent="editProduct" class="btn btn-secondary">Submit</button>
    </form>
    <div class="item-align-center">
      <h1>Edit Product</h1>
      <img style="width: 180px" src="../assets/iconCreate.png" alt="">
    </div>
  </div>
</template>

<script>

export default {
  props: ['id'],
  data () {
    return {
      product: {
        name: '',
        genre: '',
        stock: 0,
        price: 0,
        image_url: ''
      }
    }
  },
  methods: {
    editProduct () {
      this.product.id = this.id
      this.$store.dispatch('editProduct', this.product)
    }
  },
  beforeMount () {
    this.product = this.$store.getters.getProductById(this.id)
  }
}
</script>

<style>

</style>

<template>
  <div id="containerAdd">
    <h1>Add Product</h1>
    <form @submit.prevent="add" id="addForm">
      <input v-model="product.name" class="form-input" type="text" placeholder="Name">
      <input v-model="product.image_url" class="form-input" type="text" placeholder="Image Url">
      <input v-model="product.price" class="form-input" type="number" placeholder="Price">
      <input v-model="product.stock" class="form-input" type="number" placeholder="Stock">
      <input class="form-input" type="submit" value="Add Product">
    </form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      product: {
        name: '',
        image_url: '',
        price: null,
        stock: null
      }
    }
  },
  methods: {
    add: function () {
      const product = this.product
      this.$store.dispatch('addProduct', product)
        .then(result => {
          this.$router.push({ name: 'Dashboard' })
        })
        .catch(err => {
          console.log(err.response.data)
        })
    }
  }
}
</script>

<style>
#containerAdd{
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#addForm{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.form-input{
  margin: 5px
}
</style>

<template>
  <div class="container
        d-flex
        flex-row
        flex-wrap
        align-items-center
        justify-content-start
        pt-3
        pb-3
        pl-4
        mt-3
        w-50
        overflow-auto">
      <form @submit.prevent="addProductProcess" class="container border border-dark mt-3 rounded pb-4 pt-2 px-4 w-50 shadow">
        <div class="container form-group d-flex flex-column ">
            <h1>Create New Product</h1>
            <p>Please fill in this form to create a new Product.</p>
            <hr>
            <label for="name"><b>Name</b></label>
            <input v-model="name" type="text" placeholder="Enter product name" name="name" required>
            <label for="imageUrl"><b>Image Url</b></label>
            <input v-model="imageUrl" type="imageUrl" placeholder="Enter image url" name="imageUrl" required>
            <label for="price"><b>Price</b></label>
            <input v-model="price" type="price" placeholder="Enter price" name="price" required>
            <label for="stock"><b>Stock</b></label>
            <input v-model="stock" type="stock" placeholder="Enter stock" name="stock" required>
            <hr>
            <div class="d-flex flex-row align-items-center justify-content-center">
               <button type="submit" class="btn btn-primary productCreateBtn">Create</button>
            </div>
        </div>
      </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ProductionCreate',
  data () {
    return {
      name: '',
      imageUrl: '',
      price: 0,
      stock: 0
    }
  },
  methods: {
    ...mapActions(['onAddProduct']),
    addProductProcess () {
      const { name, imageUrl, price, stock } = this
      console.log(imageUrl)

      this.onAddProduct({ name, imageUrl, price, stock })
    }
  }
  // beforeRouteEnter (to, from, next) {
  //   if (localStorage.getItem('access_token')) {
  //     next('/dashboard/addProduct')
  //   } else {
  //     next()
  //   }
  // }
}
</script>

<style>

</style>

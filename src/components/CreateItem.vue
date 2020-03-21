<template>
  <div class="container d-flex justify-content-center align-items-center">
    <form class="mt-4">
      <h4 class="title">Add New Product</h4>
      <div class="form-group">
        Name
        <input v-model="newProdName" type="text" class="form-control" placeholder="Enter Product Name">
      </div>
      <div class="form-group">
        Price
        <input v-model="newProdPrice" type="number" class="form-control" placeholder="Enter Product Price">
      </div>
      <div class="form-group">
        Stock
        <input v-model="newProdStock" type="number" class="form-control" placeholder="Enter Product Stock">
      </div>
      <div class="d-flex flex-start form-group align-items-center">
        <input @click.prevent="create" type="submit" class="btn btn-success" value="Create">
        <div class="ml-2">
          <small :class="$store.state.notification.color">{{ $store.state.notification.msg}}</small>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  name: 'CreateProductItemForm',
  data () {
    return {
      newProdName: '',
      newProdPrice: '',
      newProdStock: ''
    }
  },
  methods: {
    create () {
      const payload = {
        name: this.newProdName,
        price: this.newProdPrice,
        stock: this.newProdStock
      }
      this.createNew(payload)
    },
    ...mapActions({
      createNew: 'createNew'
    }),
    ...mapMutations({
      stopLoading: 'stopLoading'
    })
  },
  created () {
    this.stopLoading()
  }
}
</script>

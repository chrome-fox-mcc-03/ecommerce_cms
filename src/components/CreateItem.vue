<template>
  <div class="container d-flex justify-content-center align-items-center">
    <form class="mt-5">
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
    <input @click.prevent="create" type="submit" class="btn btn-success" value="Create">
    <small class="form-text text-danger"></small>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newProdName: '',
      newProdPrice: '',
      newProdStock: ''
    }
  }
}
</script>

<template>
<div class="container">
  <form class="mt-5">
    <div>
      <h1>hahaha</h1>
      <h1>{{data}}</h1>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label>Name</label>
        <input type="text" class="form-control" placeholder="Name" v-model="name">
      </div>
      <div class="form-group col-md-6">
        <label>Image</label>
        <input type="text" class="form-control" placeholder="Image">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label>Price</label>
        <input type="text" class="form-control" placeholder="Price">
      </div>
      <div class="form-group col-md-6">
        <label>Stock</label>
        <input type="text" class="form-control" placeholder="Stock">
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Tombol</button>
  </form>
</div>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  props: ['data']
}
</script>

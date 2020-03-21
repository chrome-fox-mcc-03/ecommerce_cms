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
      <div class="form-group">
        <label for="genre">Genre</label>
        <select v-model="product.genre" class="form-control" id="genre">
          <option value="shounen">Shounen</option>
          <option value="shoujo">Shoujo</option>
          <option value="Seinin">Seinin</option>
          <option value="Josie">Josei</option>
          <option value="kodomo">Kodomo</option>
        </select>
      </div>
      <div class="form-group">
        <label for="image_url">image :</label>
        <input @change="getImageUrl" id="file" ref="myFiles" type="file" class="form-control-file">
      </div>
      <button @click.prevent="createProduct" class="btn btn-secondary">Submit</button>
    </form>
    <div class="item-align-center">
      <h1>Create Product</h1>
      <img style="width: 180px" src="../assets/iconCreate.png" alt="">
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
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
    createProduct () {
      this.$store.dispatch('createProduct', this.product)
    },
    getImageUrl () {
      this.product.image_url = this.$refs.myFiles.files[0].name
      const files = this.$refs.myFiles.files
      const apiUrl = 'https://api.imgur.com/3/image'
      const apiKey = '7122fd47f342787'
      const settings = {
        async: false,
        crossDomain: true,
        processData: false,
        contentType: false,
        type: 'POST',
        url: apiUrl,
        headers: {
          Authorization: 'Client-ID ' + apiKey,
          Accept: 'application/json'
        },
        mimeType: 'multipart/form-data'
      }
      const formData = new FormData()
      formData.append('image', files[0])
      settings.data = formData
      axios(settings)
        .then(response => {
          response = JSON.parse(response)
          console.log(response.data)
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>

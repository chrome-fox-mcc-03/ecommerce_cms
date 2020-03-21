<template>
<div>
  <div class="border-bottom pt-3">
    <h1 class="h2">Dashboard</h1>
  </div>
  <form @submit.prevent="upload">
    <input type="file" accept="image/png, image/jpeg" id="image-upload"
      @change="fileChangeHandler($event)">
    <button class="btn btn-primary" type="submit" :disabled="filesSelected < 1">Upload</button>
  </form>
</div>
</template>

<script>
import Axios from 'axios'
export default {
  data () {
    return {
      file: null,
      fileContents: null,
      filesSelected: 0
    }
  },
  methods: {
    fileChangeHandler: function (event) {
      this.file = event.target.files[0]
      this.filesSelected = event.target.files.length
    },
    upload: function () {
      const reader = new FileReader()
      reader.readAsDataURL(this.file)
      reader.onload = () => {
        const token = localStorage.getItem('token')
        Axios({
          method: 'POST',
          url: 'http://localhost:3000/products/cloudinary',
          headers: { token },
          data: {
            img64: reader.result
          }
        })
          .then(result => {
            console.log(result)
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => {

          })
      }
    }
  }
}
</script>

<style>

</style>

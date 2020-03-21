<template>
<div>
  <div class="border-bottom pt-3">
    <h1 class="h2">Dashboard</h1>
  </div>
  <!-- <button class="btn btn-primary" @click="openUploadWidget">upload</button> -->
  <form @submit.prevent="upload">
    <input type="file" accept="image/png, image/jpeg" id="image-upload"
      @change="fileChangeHandler($event)">
    <button class="btn btn-primary" type="submit" :disabled="filesSelected < 1">Upload</button>
  </form>
</div>
</template>

<script>
// import Axios from 'axios'
export default {
  data () {
    return {
      file: null,
      fileContents: null,
      filesSelected: 0
      // formData: null
    }
  },
  methods: {
    fileChangeHandler: function (event) {
      this.file = event.target.files[0]
      this.filesSelected = event.target.files.length
    },
    prepareFormData: function () {
      // this.formData = new FormData()
      // this.formData.append('tags', 'h8-ecommerce')
      // this.formData.append('file', this.fileContents)
    },
    upload: function () {
      const reader = new FileReader()
      reader.readAsDataURL(this.file)
      reader.onload = () => {
        const formData = new FormData()
        formData.append('tags', 'h8-ecommerce')
        formData.append('file', reader.result)
        console.log(formData)
        // const token = localStorage.getItem('token')
        // Axios({
        //   method: 'POST',
        //   url: 'http://localhost:3000/products/cloudinary',
        //   headers: { token },
        //   data: this.formData
        // })
        //   .then(result => {
        //     console.log(result)
        //   })
        //   .catch(err => {
        //     console.log(err)
        //   })
        //   .finally(() => {

        //   })
      }
    }

    // openUploadWidget () {
    //   const myWidget = cloudinary.createUploadWidget({
    //     cloudName: 'my_cloud_name',
    //     uploadPreset: 'my_preset'}, (error, result) => {
    //       if (!error && result && result.event === "success") {
    //         console.log('Done! Here is the image info: ', result.info)
    //       }
    //     }
    //   )
    //   myWidget.show()
    // }
  }
}
</script>

<style>

</style>

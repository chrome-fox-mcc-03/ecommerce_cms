<template>
<div>
  <div class="border-bottom pt-3">
    <h1 class="h2">Dashboard</h1>
  </div>
  <button class="btn btn-primary" @click="openUploadWidget">upload</button>
  <form>
    <input type="file" accept="image/png, image/jpeg" id="image-upload"
      @change="fileChangeHandler($event)">
    <button type="submit" :disabled="filesSelected < 1">Upload</button>
  </form>
</div>
</template>

<script>
export default {
  data () {
    return {
      file: null,
      fileSelected: 0
    }
  },
  methods: {
    fileChangeHandler: function (event) {
      console.log('fileHandler', event.target.files)
      this.file = event.target.files[0]
      this.fileSelected = event.target.files.length
    },
    prepareFormData: function () {
      this.formData = new FormData()
      this.formData.append('tags', 'h8-ecommerce')
      this.formData.append('file', this.fileContents)
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

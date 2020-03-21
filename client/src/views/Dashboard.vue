<template>
<div>
  <div class="border-bottom pt-3">
    <h1 class="h2">Dashboard</h1>
  </div>
  <button class="btn btn-primary" @click="openUploadWidget">upload</button>
</div>
</template>

<script>
export default {
  methods: {
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

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
              overflow-auto">
      <form @submit.prevent="registerProcess" class="container border border-dark mt-3 rounded pb-4 pt-2 px-4 w-50 shadow">
            <div class="container form-group d-flex flex-column ">
                <h1>Create New Product</h1>
                <p>Please fill in this form to create a new Product.</p>
                <hr>
                <label for="name"><b>Name</b></label>
                <input v-model="name" type="text" placeholder="Enter product name" name="name" required>
                <label for="image_url"><b>Image Url</b></label>
                <input v-model="image_url" type="image_url" placeholder="Enter image url" name="image_url" required>
                <label for="price"><b>Price</b></label>
                <input v-model="price" type="price" placeholder="Enter price" name="price" required>
                <label for="stock"><b>stock</b></label>
                <input v-model="stock" type="stock" placeholder="Enter stock" name="stock" required>
                <hr>

                <button type="submit" class="productCreateBtn">Create</button>
            </div>
        </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

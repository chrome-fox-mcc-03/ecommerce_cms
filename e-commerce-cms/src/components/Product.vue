<template>
  <div class="card col-12 col-lg-6 mb-3 mr-auto shadow-sm" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img :src="`${product.image_url}`" class="card-img" alt="image">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">Price: {{ product.price }}</p>
            <div class="d-flex">
              <p class="card-text mr-auto">Stock: {{ product.stock }}</p>
              <div class="d-flex">
                <div @click="redirToEditPage(product.id)"><i class="mr-3 fas fa-pen-square fa-2x clickable-div"></i></div>
                <div @click="deleteProduct(product.id)"><i class="fas fa-trash fa-2x clickable-div"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['product'],
  methods: {
    redirToEditPage: function (id) {
      this.$router.push(`/dashboard/edit/${id}`)
    },
    deleteProduct: function (id) {
      this.$store.dispatch('deleteProduct', id)
      this.$store.dispatch('fetchProducts')
    }
  }
}
</script>

<style>

</style>

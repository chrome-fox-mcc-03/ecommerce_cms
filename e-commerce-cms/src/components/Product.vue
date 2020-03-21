<template>
  <div class="card col-12 col-lg-6 mb-3 mr-auto shadow-sm" style="max-width: 540px;">
      <div class="row no-gutters d-flex align-items-center">
        <div class="col-md-4">
          <img :src="`${product.image_url}`" class="card-img shoes-img mx-auto" alt="image">
        </div>
        <div class="col-md-8">
          <div class="card-body d-flex flex-column justify-content-center">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">Price: {{ product.price }}</p>
            <p class="card-text">Category: {{ product.category }} <i v-if="product.category === 'Men'" class="fas fa-mars"></i> <i v-else-if="product.category === 'Women'" class="fas fa-venus"></i></p>
            <div class="d-flex">
              <p class="card-text mr-auto">Stock: {{ product.stock }}</p>
              <div class="d-flex">
                <div @click="redirToEditPage(product.id)"><i class="mr-3 fas fa-pen-square fa-2x clickable-div"></i></div>
                <div @click.prevent="deleteProduct(product.id)"><i class="fas fa-trash fa-2x clickable-div"></i></div>
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
        .then(({ data }) => {
          this.$vToastify.success(`Successfully deleted ${data.name}`)
          this.$store.dispatch('fetchProducts')
        })
        .catch(err => {
          this.$vToastify.error(err.response.data, 'Oops')
        })
    }
  }
}
</script>

<style>
.fa-mars {
  color: rgb(62, 83, 179);
}
.fa-venus {
  color: rgb(233, 111, 182)
}
@media (min-width: 763px) {
  .shoes-img {
    object-fit: cover;
    width: 10rem;
    height: 10rem;
  }
}
</style>

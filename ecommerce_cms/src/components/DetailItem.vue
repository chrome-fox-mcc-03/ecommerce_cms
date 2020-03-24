<template>
  <div class="d-flex mr-3">
    <div class="col-md-3">
      <div class="card mb-3 shadow-sm text-center">
        <div class="p-3">
          <img
            class="img-fluid"
            src="../assets/comic.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="card" style="width: 40rem; height: 13rem">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ product.genre }}</h6>
        <p class="card-text">Price: {{ product.price }}</p>
        <p class="card-text">Stock: {{ product.stock }}</p>
        <router-link :to="`${id}/edit`" class="btn btn-secondary">Edit</router-link>
        <button
        @click.prevent="deleteProduct"
        id="btn-glogin" class="btn btn-dark" style="margin-left:10px">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      product: {}
    }
  },
  methods: {
    deleteProduct () {
      this.$store.dispatch('deleteProduct', this.id)
    }
  },
  beforeMount () {
    this.product = this.$store.getters.getProductById(this.id)
  }
}
</script>

<style>

</style>

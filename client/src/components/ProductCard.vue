<template>
    <div>
        <div class="card">
            <h5 class="card-header">{{ product.name }}</h5>
            <div class="card-body">
                <h5 class="card-title">{{ product.image_url }}</h5>
                <p class="card-text">Price: {{ product.price }} Stock: {{ product.stock }}</p>
                <a v-on:click.prevent="goToUpdate" class="btn btn-primary">Update</a> <a v-on:click.prevent="deleteItem" class="btn btn-danger">Delete</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object
  },
  methods: {
    goToUpdate: function () {
      this.$store.dispatch('getUpdatePage', this.product)
    },
    deleteItem: function () {
      this.$store.dispatch('deleteItem', this.product)
    }
  }
}
</script>

<style>
.card {
  width: 50vw;
}
</style>

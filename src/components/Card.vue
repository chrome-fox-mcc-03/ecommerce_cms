<template>
    <div class="card m-3" style="width: 18rem;">
        <img class="card-img-top" :src="getImage" :alt="product.name">
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <router-link :to="`/products/${product.id}`" class="btn btn-primary">View Detail</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['product'],
  computed: {
      getImage () {
          if (!this.product.image_url){
            return require('../assets/empty.svg')
          } else {
            return this.product.image_url
          }
      }
  }
}
</script>

<style scoped>
    img.card-img-top {
        height: 250px;
    }
</style>

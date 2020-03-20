<template>
  <div class="card" style="width: 18rem;">
    <img :src="`${product.image}`" class="card-img-top" alt="Gambar" />
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">Price: {{ product.price }}</p>
      <p class="card-text">Stock: {{ product.stock }}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['product']
}
</script>

<style>
</style>

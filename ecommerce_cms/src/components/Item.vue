<template>
  <div class="col-md-3">
    <router-link
    :to="`/store/product/${product.id}`"
    >
      <div class="card mb-3 shadow-sm text-center">
        <div class="p-3">
          <img
            class="img-fluid"
            src="../assets/comic.jpeg"
            alt=""
          />
        </div>
        <div class="card-body">
          <span class="text-capitalize">{{ product.name }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style>
div.col-md-3 a:hover {
  text-decoration: none;
}
div.col-md-3 a {
  color:black
}
</style>

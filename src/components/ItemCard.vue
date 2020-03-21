<template>
  <div id="item-card" class="col s3">
    <div class="card medium z-depth-2 hoverable">
      <div class="card-image">
        <img :src="item.imageUrl">
      </div>
      <div class="card-content">
        <span class="card-title">{{ item.name }}</span>
        <h5>Rp {{ price }}</h5>
        <h6>Stock: {{ item.stock }}</h6>
        <p>{{ item.Category.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    item: Object
  },
  computed: {
    price () {
      return this.item.price.toLocaleString('id')
    }
  }
}
</script>

<style scoped>
  #item-card {
    cursor: pointer;
  }
</style>

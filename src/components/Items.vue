<template>
  <div class="row">
    <div class="col s12">
      <h3 class="brown-text text-darken-2">Item List</h3>
      <ItemCard
        v-for="item in items"
        :key="item.id"
        :item="item"
        @click.native="$router.push(`/admin/${item.id}`)"
      />
    </div>
  </div>
</template>

<script>
import ItemCard from '../components/ItemCard'
export default {
  name: 'Items',
  components: {
    ItemCard
  },
  computed: {
    items () {
      return this.$store.getters.getItemsByCategory
    }
  },
  created () {
    this.$store.dispatch('fetchItems')
  }
}
</script>

<style>

</style>

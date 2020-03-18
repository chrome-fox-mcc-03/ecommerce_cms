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
    <Card v-for="(dummyCard, i) in dummyCards" :key="i" />
  </div>
</template>

<script>

import Card from '../components/Card.vue'

export default {
  name: 'ProductionList',
  data () {
    return {
      // testing product card
      dummyCards: [
        { card1: 'Product 1' },
        { card2: 'Product 2' },
        { card1: 'Product 3' },
        { card1: 'Product 4' },
        { card1: 'Product 4' },
        { card1: 'Product 4' },
        { card1: 'Product 4' },
        { card1: 'Product 4' },
        { card1: 'Product 4' },
        { card1: 'Product 4' },
        { card1: 'Product 4' }
      ]
    }
  },
  components: {
    Card
  }
}
</script>

<style>

</style>

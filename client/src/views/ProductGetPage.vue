<template>
  <div>
    <div class="row mt-5">
      <ProductItem v-for="item in items" :key="item.id" :data="item" />
    </div>
  </div>
</template>

<script>
import ProductItem from '../components/ProductItem'
import axios from 'axios'
export default {
  name: 'ProductGetPage',
  data () {
    return {
      items: [],
      token: localStorage.getItem('token')
    }
  },
  components: {
    ProductItem
  },
  methods: {
    getItem () {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/product',
        headers: {
          token: this.token
        }
      })
        .then((result) => {
          console.log(result.data.result)
          this.items = result.data.result
        }).catch((err) => {
          console.log(err)
        })
    }
  },
  created () {
    this.token = localStorage.getItem('token')
    this.getItem()
  }
}
</script>

<style scoped>
</style>

<template>
  <div class="home">
    <button class="logout" v-on:click.prevent="logout">Logout</button>
    <br>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <addProduct/>
    <br>
    <ProductList/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ProductList from '@/components/ProductList.vue'
import AddProduct from '@/components/AddProduct.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    ProductList,
    AddProduct
  },
  methods: {
    logout: function () {
      localStorage.clear()
      this.$router.push({ path: 'login' })
    }
  }
}
</script>

<style>
.logout {
  margin: 4vh 4vw;
}
</style>

<template>
  <div id="app">
    <div id="nav">
      <navbar/>
    </div>
    <router-view id="router-item"/>
    <product-detail/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import ProductDetail from './components/ProductDetail.vue'
export default {
  data: function () {
    return {
    }
  },
  components: {
    Navbar,
    ProductDetail
  },
  methods: {
  },
  created: function () {
    const isToken = localStorage.getItem('token')
    if (isToken) {
      this.$store.commit('SET_LOGIN', true)
      this.$router.push({ path: 'products' })
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}

#router-item{
  height: 90vh;
  width: 100vw;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

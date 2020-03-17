<template>
  <div id="app">
    <Navbar :loginStatus="loginStatus" @isLogin="isLogin" />
    <div class="container">
      <div class="row">
        <div class="col-3">
          <Sidebar v-if="loginStatus" />
        </div>
        <div class="col-9">
          <router-view @isLogin="isLogin" @getProducts="getProducts" :products="this.products"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

export default {
  name: 'EcommerceCMS',
  data () {
    return {
      loginStatus: false,
      products: []
    }
  },
  components: {
    Navbar,
    Sidebar
  },
  methods: {
    isLogin() {
      this.loginStatus = !this.loginStatus

    },
    getProducts () {
      axios({
        method: 'get',
        url: 'http://localhost:3000/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          this.products.push(...data.data)
        })
        .catch((err) => {
          console.log(err)
        })
}
  },
  created () {
    const token = localStorage.getItem('access_token')
    if (!token) {
      this.$router.push('/login')
      this.loginStatus = false
    } else {
      this.$router.push('/dashboard')
      this.loginStatus = true
      this.getProducts()
    }
  }
}
</script>

<style scoped>
  .container {
    height: 100vh;
    max-width: 100%;
  }
</style>

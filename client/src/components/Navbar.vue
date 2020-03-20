<template>
  <div class="navbar navbar-expand bg-dark navbar-dark">
      <div class="container d-flex justify-content-between">
          <router-link to="/" class="navbar-brand">Logo</router-link>
          <ul class="navbar-nav">
              <li class="nav-item">
                  <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item">
                  <router-link to="/about" class="nav-link">About</router-link>
              </li>
              <li v-if="!isLogin" class="nav-item">
                  <router-link to="/register" class="nav-link">Register</router-link>
              </li>
              <li v-if="!isLogin" class="nav-item">
                  <router-link to="/login" class="nav-link">Login</router-link>
              </li>
              <li v-if="isLogin" class="nav-item">
                  <router-link to="/" class="nav-link">Logout</router-link>
              </li>
              <li v-if="isLogin" class="nav-item">
                  <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      isLogin: false
    }
  },
  created () {
    if (localStorage.getItem('access_token')) {
      this.isLogin = true
    } else {
      this.isLogin = false
    }
  }
}
</script>

<style>

</style>

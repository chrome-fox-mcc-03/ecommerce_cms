<template>
  <div class="navbar navbar-expand bg-dark navbar-dark">
      <div class="container d-flex justify-content-between">
          <router-link to="/" class="navbar-brand">E-Commerce CMS</router-link>
          <ul class="navbar-nav">
              <li class="nav-item">
                  <router-link to="/" class="nav-link text-primary">Home</router-link>
              </li>
              <li class="nav-item">
                  <router-link to="/about" class="nav-link text-primary">About</router-link>
              </li>
              <li v-if="!loginStatus" class="nav-item">
                  <router-link to="/register" class="nav-link text-primary">Register</router-link>
              </li>
              <li v-if="!loginStatus" class="nav-item">
                  <router-link to="/login" class="nav-link text-primary">Login</router-link>
              </li>
              <li v-if="loginStatus" class="nav-item">
                  <router-link to="/dashboard" class="nav-link text-primary">Dashboard</router-link>
              </li>
              <li v-if="loginStatus" class="nav-item">
                  <router-link to="" class="nav-link">
                  <span @click="logoutProcess">Logout</span>
                  </router-link>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Navbar',
  computed: {
    ...mapState(['loginStatus'])
  },
  methods: {
    ...mapActions(['onLogoutProcess']),
    logoutProcess () {
    //   console.log('trying to logout')
      this.onLogoutProcess()
    }
  }
}
</script>

<style>

</style>

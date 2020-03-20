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
              <li v-if="!loginStatus" class="nav-item">
                  <router-link to="/register" class="nav-link">Register</router-link>
              </li>
              <li v-if="!loginStatus" class="nav-item">
                  <router-link to="/login" class="nav-link">Login</router-link>
              </li>
              <li v-if="loginStatus" class="nav-item">
                  <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
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

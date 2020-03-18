<template>
  <div class="navbar navbar-expand bg-dark navbar-dark">
    <div class="container d-flex justify-content-between">
      <router-link to="/" class="navbar-brand">Ecommerce Admin</router-link>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link v-if="!$store.getters.isLogin" to="/login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <a v-if="$store.getters.isLogin" @click="logout()" class="nav-link">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      this.$store.dispatch('logout')
        .then(result => {
          this.$router.push(result)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

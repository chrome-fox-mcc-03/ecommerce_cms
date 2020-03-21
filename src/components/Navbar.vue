<template>
  <div class="navbar navbar-expand navbar-dark bg-primary">
    <div class="container d-flex justify-content-between">
      <router-link to="/dashboard" class="navbar-brand text-custom">Ecommerce Admin</router-link>
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

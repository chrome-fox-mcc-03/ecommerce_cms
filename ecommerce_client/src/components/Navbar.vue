<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand router-link to="/">Home</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item v-if='!isLogin' router-link to="/login">Login</b-nav-item>
        <b-nav-item v-if='!isLogin' router-link to='/register'>Register</b-nav-item>
        <b-nav-item v-if='isLogin' router-link to='/product'>Product</b-nav-item>
        <b-nav-item v-if='isAdmin' router-link to='/adminpage'>Admin</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item v-if='isLogin' @click="Logout">Logout</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</div>

</template>

<script>
export default {
  methods: {
    Logout () {
      localStorage.removeItem('Access_Token')
      localStorage.removeItem('Role')
      this.$router.push('/home')
      this.$store.commit('SET_LOGIN', false)
      this.$store.commit('SET_ADMIN', false)
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    },
    isAdmin () {
      return this.$store.state.isAdmin
    },
    Products () {
      return this.$store.state.Products
    }
  }
}
</script>

<style>

</style>

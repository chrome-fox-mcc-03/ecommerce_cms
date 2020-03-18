<template>
    <nav class="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow">
      <router-link class="navbar-brand col-sm-3 col-md-2 mr-0" to="/">Logo</router-link>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
            <button v-if="isLogin" @click="logout" type="button" class="btn btn-dark">Logout</button>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$store.commit('SET_LOGIN', false)
      this.$router.push('/login')
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>

</style>

<template>

    <nav class="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow">
      <router-link class="navbar-brand col-sm-3 col-md-2 mr-0" to="#">Logo</router-link>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
            <button v-if="loginStatus" @click="logout" type="button" class="btn btn-dark">Logout</button>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['loginStatus'],
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
      this.$emit('isLogin')
    }
  }

}
</script>

<style>

</style>

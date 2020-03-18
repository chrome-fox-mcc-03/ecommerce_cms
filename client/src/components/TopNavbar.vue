<template>
  <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
  <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">CMS</a>
  <ul class="navbar-nav px-3">
    <li class="nav-item text-nowrap">
      <a class="nav-link" href="#">Sign out</a>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
  name: 'TopNavbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('login')
    }
  }
}
</script>

<style>

</style>

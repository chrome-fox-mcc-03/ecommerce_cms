<template>
  <div class="navbar navbar-expand bg-dark navbar-dark">
      <div class="container d-flex justify-content-between">
          <a href="/" class="navbar-brand">Logo</a>
          <ul class="navbar-nav">
              <li class="nav-item">
                  <router-link to="/register" class="nav-link">Register</router-link>
              </li>
              <li class="nav-item">
                  <router-link to="/login" class="nav-link">Login</router-link>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

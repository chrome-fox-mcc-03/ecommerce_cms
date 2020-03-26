<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link to="/" class="navbar-brand"><img src="../assets/icon.png"></router-link>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 justify-content-center">
          <li class="nav-item active">
            <router-link class="nav-link" to="/product">All Product</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/product/add">Upload Product</router-link>
          </li>
        </ul>
        <a @click="$store.dispatch('logout')"><i class="fas fa-sign-out-alt fa-2x"></i></a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
<style scoped>
.fas{
  color: white;
}

.fas:hover{
  transform: scale(1.5)
}
</style>

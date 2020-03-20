<template>
  <div class="navbar navbar-expand bg-light navbar-light">
    <div class="container d-flex justify-content-between">
      <router-link to="/" class="brand">LOGO</router-link>
      <ul class="navbar-nav d-flex justify-content-between">
        <li class="navbar-item">
          <router-link to="/product">All Product</router-link>
        </li>
        <li class="navbar-item">
          <router-link to="/product/add">Upload Product</router-link>
        </li>
      </ul>
      <button @click.prevent="$store.dispatch('logout')">LOGOUT</button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

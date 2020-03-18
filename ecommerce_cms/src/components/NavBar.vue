<template>
  <div class="navbar navbar-expand bg-light navbar-light">
    <div class="container d-flex justify-content-between">
      <router-link to="/" class="brand">LOGO</router-link>
      <ul class="navbar-nav d-flex justify-content-between">
        <li class="navbar-item">
          <router-link to="/product">All Product</router-link>
        </li>
        <li class="navbar-item">
          <router-link to="/">Upload Product</router-link>
        </li>
      </ul>
      <div>
      <router-link to="/login">LOGIN</router-link>
      <router-link to="#">LOGOUT</router-link>
      </div>
    </div>
  </div>
</template>

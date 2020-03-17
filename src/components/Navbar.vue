<template>
  <div class="navbar navbar-expand bg-dark row">
    <div class="col-md-2 text-white d-flex">
      <router-link class="nav-link" to="/">brand</router-link>
      <div class="mx-2 nav-item active">
        <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
      </div>
    </div>
    <div class="col-md-6 text-white d-flex justify-content-start">
    </div>
    <div class="col-md-4 text-white  d-flex justify-content-center">
      <div class="mx-2 nav-item active">
        <router-link class="nav-link" to="/login">Login</router-link>
      </div>
      <div class="mx-2 nav-item">
        <router-link class="nav-link" to="/register">Register</router-link>
      </div>
      <div class="mx-2 nav-item">
        <router-link class="nav-link" to="/logout">Logout</router-link>
      </div>
    </div>
  </div>
</template>

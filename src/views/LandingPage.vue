<template>
  <div class="jumbotron flex-grow-1 mb-0 d-flex flex-column align-items-center justify-content-center">
    <h1 class="display-3">Accelerate Your Biznez</h1>
    <h1 class="display-6 mt-3">Very, very fast.</h1>
    <p class="mt-3">This is a CMS applications where you can make your own store, manage your products, and many more features!</p>
    <router-link to="/register"><a class="btn btn-primary mt-3 shadow register">Start Now</a></router-link>
  </div>
</template>

<script>
export default {
  name: 'LandingPage'
}
</script>

<style>
  img {
    width: 40%;
  }
  .jumbotron {
    width: 85vw;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60");
    background-size: cover;
    padding-right: 12vw;
    padding-left: 12vw;
    color: white;
  }
  .register {
    background-color: rgb(26, 92, 167) !important;
    border-radius: 5px;
    color: white !important;
    width: 10vw
  }
</style>

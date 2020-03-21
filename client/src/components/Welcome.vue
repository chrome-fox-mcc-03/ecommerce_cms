<template>
  <div class="home">
    <div class="jumbotron">
      <h1 class="display-4">Welcome to Felix Pharmacy!</h1>
      <p class="lead">We provide your needs</p>
      <hr class="my-4">
      <p>Don't know what to type :)</p>
      <p v-if="!token" class="lead">
        <router-link to="/login" class="btn btn-primary btn-lg" href="#" role="button">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
	computed: {
		token () {
			return this.$store.state.isLogin
		}
	}
}
</script>

<style>
.home {
  /* background-color: salmon; */
  width: 100%;
  height: calc(100vh - 60px);
}
.jumbotron {
  background-color: rgba(0, 0, 0, 0.6) !important;
  color: white;
}
</style>

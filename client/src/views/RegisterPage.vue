<template>
<div>
  <Navbar />
  <div class="container">
    <div class="row justify-content-md-center mt-5">
      <div class="col-md-center">
        <form class="border border-dark form-login-custom bg-dark" style="padding:2.3rem !important">
        <p class="h4 mb-4 text-center text-white font-custom-roboto">Register</p>
        <input type="email" class="form-control mb-4" id="email-register" placeholder="Email" v-model="email" /><br/>
        <input type="password" class="form-control mb-4" id="password-register" placeholder="Password" v-model="password" /><br/>
        <button class="btn btn-info btn-block my-4 font-custom-roboto" type="submit" id="btn-register" @click.prevent="register()">Register</button>
        <div class="text-center">
          <p class="text-white">or Login with:</p>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style scoped>
.form-login-custom {
  border-radius:10%;
  border-color: none;
}
</style>

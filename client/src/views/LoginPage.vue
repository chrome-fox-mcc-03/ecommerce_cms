<template>
<div>
  <Navbar />
  <div class="container">
    <div class="row justify-content-md-center mt-5">
      <div class="col-md-center">
        <form class="border border-dark form-login-custom bg-dark" style="padding:2.3rem !important">
          <p class="h4 mb-4 text-center text-white font-custom-roboto">LOGIN</p>
          <input type="email" class="form-control mb-4" id="email-login" placeholder="Email" v-model="email" /> <br/>
          <input type="password" class="form-control mb-4" id="password-login" placeholder="Password" v-model="password" /> <br/>
          <button class="btn btn-info btn-block my-4 font-custom-roboto" type="submit" id="btn-login" @click.prevent="login()">Login Admin</button>

          <div class="text-center">
            <p class="text-white"> Not a member?
              <a href="" class="register" >Register</a>
            </p>
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
import axios from 'axios'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    Navbar
  },
  methods: {
    login () {
      const email = this.email
      const password = this.password
      axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: {
          email,
          password
        }
      })
        .then((result) => {
          const { token } = result.data
          localStorage.setItem('token', token)
          this.$router.push('/dashboard')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.form-login-custom {
  border-radius:10%;
  border-color: none;
}
</style>

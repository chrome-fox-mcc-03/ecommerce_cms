<template>
    <div class="login-form">
        <form @submit.prevent="onLogin" class="container border border-dark mt-3 rounded pb-4 pt-2 px-4 w-25 shadow">
            <div class="container form-group d-flex flex-column">
                <h1>Login</h1>
                <p>Please fill in this form to login.</p>
                <hr>
                <label for="email"><b>Email</b></label>
                <input v-model="form.email" type="text" placeholder="Enter Email" name="email" required>

                <label for="psw"><b>Password</b></label>
                <input v-model="form.password" type="password" placeholder="Enter Password" name="psw" required>

                <hr>
                <button type="submit" class="loginbtn">login</button>
            </div>
            <div class="container signin">
                <p>Don't have an account? <router-link to="/register">Register</router-link>.</p>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onLogin () {
      // console.log(this.form.email, this.form.password)
      axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: {
          email: this.form.email,
          password: this.form.password
        }
      })
        .then((response) => {
          // console.log(response.data.access_token)
          localStorage.setItem('access_token', response.data.access_token)
          this.$router.push('/dashboard')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    beforeRouterEnter (to, from, next) {
      if (localStorage.getItem('access_token')) {
        next('/dashboard')
      } else {
        next()
      }
    }
  }
}
</script>

<style>

</style>

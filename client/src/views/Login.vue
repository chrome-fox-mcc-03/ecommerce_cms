<template>
  <div class="container">
    <div class="card card-logreg">
      <h3>Login Admin Page</h3>
      <form v-on:submit.prevent="loginCheck()">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input v-model="email" class="input is-primary" type="email" placeholder="Email" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input v-model="password" class="input is-primary" type="password" placeholder="Password" />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <button type="submit" class="button is-primary is-outlined">Login</button>
      </form>
      <div id="nav" class="card-footer">
        <p>
          Don't you have an account? please
          <router-link to="/register">Register</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    loginCheck () {
      localStorage.setItem('token', this.password)
      console.log(this.email)
      console.log(this.password)
      this.$router.push('/dashboard')
    }
  },
  created () {
    if (localStorage.getItem('token')) {
      this.$router.push('/dashboard')
    }
  }
}
</script>

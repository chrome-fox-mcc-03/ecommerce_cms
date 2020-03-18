<template>
  <div>
    <h1>Login to your account</h1>
    <form @submit.prevent="submitLogin">
      <div class="form-group">
        <label>Email address</label>
        <input v-model="email" type="email" class="form-control" placeholder="Enter email" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input v-model="password" type="password" class="form-control" placeholder="Password" />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submitLogin () {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:3000/login', data).then(response => {
        console.log(response)
      })
    }
  }
}
</script>

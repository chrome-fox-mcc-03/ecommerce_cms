<template>
  <div>
    <h1>Create your account</h1>
    <form @submit.prevent="submitRegister">
      <div class="form-group">
        <label>Name</label>
        <input v-model="name" type="text" class="form-control" placeholder="Enter name" />
      </div>
      <div class="form-group">
        <label>Email address</label>
        <input v-model="email" type="email" class="form-control" placeholder="Enter email" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input v-model="password" type="password" class="form-control" placeholder="Password" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    submitRegister () {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:3000/register', data).then(response => {
        console.log(response)
      })
    }
  }
}
</script>

<template>
  <div class="signin-page">
    <form @submit.prevent="signin">
    <h2>Sign In As Admin</h2>
    <div class="form-group mt-5">
      <label for="exampleInputEmail1">Email address</label>
      <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="admin@gmail.com">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="123123">
    </div>
    <router-link to="/dashboard" type="submit" class="btn btn-primary">Submit</router-link>
  </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SigninPage',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signin: function () {
      console.log('sign me in senpai')
      axios({
        method: 'post',
        url: 'http://localhost:3000/signin',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.signin-page {
  background-color: rgb(54, 54, 54);
  color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

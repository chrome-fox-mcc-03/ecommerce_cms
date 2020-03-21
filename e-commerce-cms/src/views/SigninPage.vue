<template>
  <div class="signin-page">
    <Loading v-if="isLoading" />
    <form @submit.prevent="signIn">
    <h2>Sign In As Admin</h2>
    <div class="form-group mt-5">
      <label for="exampleInputEmail1">Email address</label>
      <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="admin@gmail.com">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="123123">
    </div>
    <button type="submit" class="btn btn-primary">Sign In</button>
  </form>
  </div>
</template>

<script>
import Loading from '../components/Loading'
export default {
  name: 'SigninPage',
  components: {
    Loading
  },
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      this.$store.dispatch('signIn', { email: this.email, password: this.password })
        .then(({ data }) => {
          console.log('hore masuk', data)
          localStorage.setItem('token', data.token)
          this.$router.push('/dashboard')
        })
        .catch(err => {
          console.log(err.response.data)
          this.$vToastify.error(err.response.data.message, 'Login Error')
        })
    }
  },
  computed: {
    isLoading: function () {
      return this.$store.state.isLoading
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

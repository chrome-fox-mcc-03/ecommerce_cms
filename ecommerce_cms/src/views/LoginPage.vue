<template>
  <div>
    <h1>login page</h1>
    <div class="container d-flex justify content-between align-items-center">
      <form id="LoginForm" @submit.prevent="login">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <p> Need account? <router-link id="register-btn" to="/register">Register</router-link></p>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      const loginData = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', loginData)
        .then((result) => {
          // state notification harus diubah
          // cara ngubah state pake mutation
          // commit
          localStorage.setItem('token', result.data.token)
          this.$store.commit('SET_NOTIFICATION', {
            msg: 'loggin success',
            color: 'bg-success'
          })
          this.$router.push({ path: 'product' })
        })
        .catch(err => {
          // biasanya lo ngubah state notification di store
          this.$store.commit('SET_NOTIFICATION', {
            msg: 'loggin failed',
            color: 'bg-success'
          })
          console.log(err)
        })
    }
  },
  created () {
    // intinya ada this.$router.push << buat navigasi sama this.$route << buat ngambil params this.$route.params.id
  }
}
</script>

<style>
</style>

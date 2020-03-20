<template>
  <div>
    <h1>Register page</h1>
    <div class="container d-flex justify content-between align-items-center">
      <form id="RegisterForm" @submit.prevent="register">
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
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data: () => {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register: function () {
      const registerData = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', registerData)
        .then((result) => {
          localStorage.setItem('token', result.data.token)
          this.$store.commit('SET_NOTIFICATION', {
            msg: 'loggin success',
            color: 'bg-success'
          })
          this.$router.push({ path: 'product' })
        })
        .catch(err => {
          this.$store.commit('SET_NOTIFICATION', {
            msg: 'loggin failed',
            color: 'bg-success'
          })
          console.log(err)
        })
    }
  }
}
</script>

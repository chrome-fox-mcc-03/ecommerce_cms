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
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    submitLogin () {
      const data = {
        email: this.email,
        password: this.password
      }

      this.$store.dispatch('login', data)
        .then(result => {
          this.$router.push(result)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

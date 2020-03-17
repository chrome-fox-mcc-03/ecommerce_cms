<template>
  <div class="container d-flex justify-content-center align-items-center">
    <form class="mt-5">
    <div class="form-group">
      Email
      <input v-model="regEmail" type="email" class="form-control" placeholder="Enter email">
    </div>
    <div class="form-group">
      Password
      <input v-model="regPass" type="password" class="form-control" placeholder="Enter password">
    </div>
    <input @click.prevent="register" type="submit" class="btn btn-primary" value="Register">
    <small class="form-text text-danger">Error here</small>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      regEmail: '',
      regPass: ''
    }
  },
  methods: {
    register () {
      console.log(this.regEmail, 'register', this.regPass)
      // if success
      localStorage.setItem(this.$parent.appName, JSON.stringify({ token: 'token' }))
      this.$router.push({ name: 'Dashboard' })
    }
  }
}
</script>

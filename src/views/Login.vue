<template>
  <div class="container d-flex justify-content-center align-items-center">
    <form class="mt-5">
    <div class="form-group">
      Email
      <input v-model="logEmail" type="email" class="form-control" placeholder="Enter email">
    </div>
    <div class="form-group">
      Password
      <input v-model="logPass" type="password" class="form-control" placeholder="Enter password">
    </div>
    <input @click.prevent="login" type="submit" class="btn btn-success" value="Login">
    <small class="form-text text-danger">Error here</small>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    login () {
      console.log(this.logEmail, 'login', this.logPass)
      console.log(this.$parent.appName)
      // if success
      localStorage.setItem(this.$parent.appName, JSON.stringify({ token: 'token' }))
      this.$router.push({ name: 'Dashboard' })
    }
  },
  data () {
    return {
      logEmail: '',
      logPass: ''
    }
  }
}
</script>

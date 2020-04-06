<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="login">
            <div class="form-group">
                <label for="email-login">Email address</label>
                <input v-model="userData.email" type="email" class="form-control" id="email-login" aria-describedby="emailHelp">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="password-login">Password</label>
                <input v-model="userData.password" type="password" class="form-control" id="password-login">
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
      userData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.userData.email,
        password: this.userData.password
      }
      this.$store.dispatch('login', payload)
    }
  }
}
</script>

<style scoped>
    h2 {
        margin-top: 20px;
    }
    input {
        width: 50%;
    }
    form {
        margin-top: 20px;
    }
</style>

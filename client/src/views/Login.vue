<template>
    <div class="login-form">
        <form @submit.prevent="onSubmit" class="container border border-dark mt-3 rounded pb-4 pt-2 px-4 w-25 shadow">
            <div class="container form-group d-flex flex-column">
                <h1>Login</h1>
                <p>Please fill in this form to login.</p>
                <hr>
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required>

                <hr>
                <button type="submit" class="loginbtn">login</button>
            </div>
            <div class="container signin">
                <p>Don't have an account? <router-link to="/register">Register</router-link>.</p>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        name: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('Masooookkkkkkk')
      localStorage.setItem('access_token', 'tokenbuatanbukansembarangtoken')
      this.$router.push('/admin/dashboard')
    },
    beforeRouterEnter (to, from, next) {
      if (localStorage.getItem('access_token')) {
        next('/admin/dashboard')
      } else {
        next()
      }
    }
  }
}
</script>

<style>

</style>

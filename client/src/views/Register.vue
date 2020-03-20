<template>
    <div class="register-form">
        <form @submit.prevent="registerProcess" class="container border border-dark mt-3 rounded pb-4 pt-2 px-4 w-25 shadow">
            <div class="container form-group d-flex flex-column ">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr>
                <label for="email"><b>Email</b></label>
                <input v-model="email" type="text" placeholder="Enter Email" name="email" required>

                <label for="psw"><b>Password</b></label>
                <input v-model="password" type="password" placeholder="Enter Password" name="psw" required>
                <hr>
                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                <button type="submit" class="btn btn-primary registerbtn">Register</button>
            </div>
            <div class="container signin">
                <p>Already have an account? <router-link to="/login">Login</router-link>.</p>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['onRegister']),
    registerProcess () {
      const { email, password } = this
      this.onRegister({ email, password })
    }
  }
}
</script>

<style>

</style>

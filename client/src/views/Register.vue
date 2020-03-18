<template>
    <div class="register-form">
        <form @submit.prevent="onRegister" class="container border border-dark mt-3 rounded pb-4 pt-2 px-4 w-25 shadow">
            <div class="container form-group d-flex flex-column ">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr>
                <label for="name"><b>Name</b></label>
                <input v-model="form.name" type="text" placeholder="Your Name" name="name" required>

                <label for="email"><b>Email</b></label>
                <input v-model="form.email" type="text" placeholder="Enter Email" name="email" required>

                <label for="psw"><b>Password</b></label>
                <input v-model="form.password" type="password" placeholder="Enter Password" name="psw" required>
                <hr>
                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                <button type="submit" class="registerbtn">Register</button>
            </div>
            <div class="container signin">
                <p>Already have an account? <router-link to="/login">Login</router-link>.</p>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Register',
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onRegister () {
    //   console.log(this.form.email, this.form.name, this.form.password)
      axios({
        method: 'POST',
        url: 'http://localhost:3000/register',
        data: {
          name: this.form.name,
          email: this.form.email,
          password: this.form.password,
          role: 'admin'
        }
      })
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>

<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <form class="form-signin col-12 col-md-8 col-lg-6 col-xl-4"
        @submit.prevent="login">
        <img src="https://i2.wp.com/d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2020/01/16161919/hacktiv8.png" alt="Hacktiv 8" width="150" height="150">
        <h1 class="h3 mb-3 font-weight-normal">Please log in</h1>
        <label for="inputEmail" class="sr-only">Email address</label>

        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus
          v-model="email">

        <label for="inputPassword" class="sr-only">Password</label>

        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required
          v-model="password">
        <!-- <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div> -->
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p class="mt-4 mb-3 text-muted">© {{copyrightYear}}</p>
        Don't have account yet? Click <router-link to="/register">here</router-link> to register!
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  data () {
    return {
      email: '',
      password: '',
      isLoading: false
    }
  },
  methods: {
    login () {
      this.isLoading = true
      axios({
        method: 'POST',
        url: 'http://localhost:3000/admin/login',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(response => {
          const { token, name } = response.data

          localStorage.setItem('token', token)
          localStorage.setItem('name', name)

          this.$router.push('/dashboard')
          this.$notify({
            type: 'primary',
            text: 'You successfully logged in'
          })
        })
        .catch(err => {
          const { errors } = err.response.data

          errors.forEach(err => {
            this.$notify({
              title: 'Input Error!',
              type: 'warn',
              text: err
            })
          })
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  },
  computed: {
    copyrightYear () {
      const currentYear = moment(new Date()).year()
      if (currentYear - 2020 === 0) {
        return 2020
      } else {
        return `2020 - ${currentYear}`
      }
    }
  }
}
</script>

<style>
  #app {
    /* font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; */
    text-align: center;
    /* color: #2c3e50; */
    width: 100%;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  body {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-align: center;
    -ms-flex-pack: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5!important;
    height: calc(100vh - 5em);
  }
  .form-signin .checkbox {
    font-weight: 400;
  }
  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>

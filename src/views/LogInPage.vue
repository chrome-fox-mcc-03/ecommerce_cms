<template>
 <div class="d-flex align-items-center flex-column" style="width:100vw;height:100vh;background-image:url('https://images.unsplash.com/photo-1501946623428-b301146b83af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80')">
 <div class="d-flex align-items-center justify-content-between flex-column pt-5 pb-5 shadow-lg" style="width:40vw;height:100vh;background-color:whitesmoke">
   <router-link to="/" style="tex-decoration:none">
     <h1 class="display-4 mb-5">SHOPPINGKUY</h1>
   </router-link>
  <div class="d-flex container" style="width:30vw;height:50vh">
    <form @submit.prevent="login">
      <h1 class="display-6">Sign In</h1>
      <small class="form-text text-muted  mb-4">Manage your store now</small>
      <div class="form-group">
        <input type="email" class="form-control pt-4 pb-4" placeholder="Email" v-model="dataLogin.email">
        <small class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <input type="password" class="form-control pt-4 pb-4" placeholder="Password" v-model="dataLogin.password">
      </div>
      <div class="d-flex align-items-center">
        <button type="submit" class="btn btn-primary pt-3 pb-3 pr-4 pl-4 ">Log In</button>
        <g-signin-button
          class="ml-3 d-flex align-items-center"
          style="cursor: pointer"
          :params="googleSignInParams"
          @success="onSignInSuccess"
          @error="onSignInError">
          <img class="shadow g-signin-button mr-1" src="https://banner2.cleanpng.com/20180324/sbe/kisspng-google-logo-g-suite-google-5ab6f1f0dbc9b7.1299911115219389289003.jpg" alt="" srcset="">
          Google Sign In
        </g-signin-button>
      </div>
      <router-link to="/register">
          <button class='btn btn-link p-0 mt-3'>Sign Up Here</button>
        </router-link>
    </form>
  </div>
  <footer>SHOPPINGKUY &copy; Adam Primarizki</footer>
 </div>
 <loading-now v-if="nowLoading"></loading-now>
 </div>
</template>

<script>
import LoadingNow from '../components/LoadingNow'
export default {
  name: 'LogInPage',
  data: () => {
    return {
      dataLogin: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.dataLogin)
    },
    onSignInSuccess (googleUser) {
      this.$store.dispatch('onSignInSuccess', googleUser)
    },
    onSignInError (error) {
      this.$store.dispatch('onSignInError', error)
    }
  },
  computed: {
    nowLoading () {
      return this.$store.state.nowLoading
    },
    googleSignInParams () {
      return this.$store.state.googleSignInParams
    }
  },
  components: {
    LoadingNow
  }
}
</script>

<style>
form{
  width: 100%;
}
.btn-primary{
  background-color: rgb(26, 92, 167) !important;
}
a {
  cursor: pointer;
  text-decoration: none !important;
  color: black;
}
a:hover{
  text-decoration: none !important;
  color: black;
}
.g-signin-button {
  cursor: pointer;
  background-color: rgb(230, 230, 230);
  width: 2rem !important;
}
</style>

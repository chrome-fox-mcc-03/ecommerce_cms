<template>
 <div class="d-flex align-items-center flex-column" style="width:100vw;height:100vh;background-image:url('https://images.unsplash.com/photo-1501946623428-b301146b83af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80')">
 <div class="d-flex align-items-center justify-content-between flex-column pt-5 pb-5 shadow-lg" style="width:40vw;height:100vh;background-color:whitesmoke">
   <router-link to="/" style="tex-decoration:none">
     <h1 class="display-4">SHOPPINGKUY</h1>
   </router-link>
  <div class="d-flex container" style="width:30vw;height:50vh">
    <form @submit.prevent="sendRegister">
      <h1 class="display-6">Register</h1>
      <small class="form-text text-muted  mb-4">Start making profit!</small>
      <div class="form-group">
        <input type="email" class="form-control pt-4 pb-4" placeholder="Email" v-model="dataRegister.email">
        <small class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <input type="text" class="form-control pt-4 pb-4" placeholder="Your Name" v-model="dataRegister.name">
      </div>
      <div class="form-group">
        <input type="password" class="form-control pt-4 pb-4" placeholder="Password" v-model="dataRegister.password">
      </div>
      <div class="form-group">
        <input type="password" class="form-control pt-4 pb-4" placeholder="Confirm Password" v-model="dataRegister.passwordConfirm">
      </div>
      <div class="d-flex align-items-center">
        <button type="submit" class="btn btn-primary pt-3 pb-3 pr-4 pl-4 ">Submit</button>
        <router-link to="/login">
          <button class='btn btn-link'>Already have an account?</button>
        </router-link>
      </div>
    </form>
  </div>
  <footer class="mt-5">SHOPPINGKUY &copy; Adam Primarizki</footer>
 </div>
 <loading-now v-if="nowLoading"></loading-now>
 </div>
</template>

<script>
import LoadingNow from '../components/LoadingNow'
export default {
  name: 'RegisterPage',
  data: () => {
    return {
      dataRegister: {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLtnDcrpDZguhJOW3CvnrPo8VGexVYMy-2tSXPrJfXUO_XXsiJ', // sementara
        role: 'Admin', // sementara
        store_name: 'Toko Mita' // sementara
      }
    }
  },
  methods: {
    sendRegister () {
      this.$store.dispatch('register', this.dataRegister)
    }
  },
  computed: {
    nowLoading () {
      return this.$store.state.nowLoading
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
</style>

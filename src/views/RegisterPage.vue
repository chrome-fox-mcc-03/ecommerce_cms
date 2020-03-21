<template>
 <div class="d-flex align-items-center flex-column" style="width:100vw;height:100vh;background-image:url('https://images.unsplash.com/photo-1501946623428-b301146b83af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80')">
 <div class="d-flex align-items-center flex-column pt-5 pb-5 shadow-lg" style="width:40vw;height:100vh;background-color:whitesmoke">
   <router-link to="/" style="tex-decoration:none">
     <h1 class="display-4">SHOPPINGKUY</h1>
   </router-link>
  <div class="d-flex container mt-4" style="width:30vw;height:50vh">
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
      <fieldset class="form-group">
        <div class="row">
          <legend class="col-form-label col-4 p-0" style="text-align:center">Register Options: </legend>
          <div class="col-8 p-0">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" value="Admin" v-model="dataRegister.role">
              <label class="form-check-label" for="gridRadios1">
                As a Store Owner
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" value="Staff" v-model="dataRegister.role">
              <label class="form-check-label" for="gridRadios2">
                As a Staff
              </label>
            </div>
          </div>
        </div>
      </fieldset>
      <div class="form-group" v-if="dataRegister.role === 'Admin'">
        <input type="text" class="form-control pt-4 pb-4" placeholder="Your Store Name" v-model="dataRegister.store_name">
      </div>
      <div class="form-group" v-if="dataRegister.role === 'Staff'">
        <input type="text" class="form-control pt-4 pb-4" placeholder="Find Store (hit enter)"
          v-model="dataRegister.store_exist" list="stores">
          <datalist id="stores">
            <option v-for="(store, i) in storeSelected" :key="i" :value="store.name" ></option>
          </datalist>
        <small class="pl-1">{{ smallText }}</small>
      </div>
      <div class="d-flex align-items-center" style="margin-top:auto">
        <button type="submit" class="btn btn-primary pt-3 pb-3 pr-4 pl-4 ">Submit</button>
        <router-link to="/login">
          <button class='btn btn-link'>Already have an account?</button>
        </router-link>
      </div>
    </form>
  </div>
  <footer style="margin-top:auto">SHOPPINGKUY &copy; Adam Primarizki</footer>
 </div>
 <loading-now v-if="nowLoading"></loading-now>
 </div>
</template>

<script>
import LoadingNow from '../components/LoadingNow'
import debounce from 'lodash.debounce'
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
        role: '',
        store_name: '',
        store_exist: ''
      },
      smallText: 'Start typing store name..'
    }
  },
  methods: {
    sendRegister () {
      this.$store.dispatch('register', this.dataRegister)
    },
    findStore () {
      this.$store.dispatch('fetchStoreList', this.storeName)
      this.smallText = 'Start typing store name..'
    }
  },
  computed: {
    nowLoading () {
      return this.$store.state.nowLoading
    },
    storeName () {
      return this.dataRegister.store_exist
    },
    storeSelected () {
      return this.$store.state.storeSelected
    }
  },
  components: {
    LoadingNow
  },
  watch: {
    storeName () {
      this.smallText = 'Finding store..'
      this.debounceGetStore()
    }
  },
  created () {
    this.debounceGetStore = debounce(this.findStore, 500)
    this.dataRegister.email = this.$store.state.googleEmail
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

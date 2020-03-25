<template>
  <div>
    <h1 class="h1 text-center">Login to your account</h1>
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <form @submit.prevent="submitLogin">
          <div class="form-group">
            <label>Email address</label>
            <input v-model="email" type="email" class="form-control" placeholder="Enter email" />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input v-model="password" type="password" class="form-control" placeholder="Password" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="col"></div>
    </div>
    <loading :active.sync="isLoading"
        :can-cancel="true"
        :is-full-page="true"></loading>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
export default {
  name: 'Login',
  components: {
    Loading
  },
  data () {
    return {
      email: '',
      password: '',
      isLoading: false
    }
  },
  methods: {
    submitLogin () {
      const data = {
        email: this.email,
        password: this.password
      }

      this.isLoading = true

      this.$store.dispatch('login', data)
        .then(result => {
          this.isLoading = false
          this.$router.push(result)
        })
        .catch(_ => {
          this.isLoading = false
        })
    }
  }
}
</script>

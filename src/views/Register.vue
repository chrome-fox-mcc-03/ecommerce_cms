<template>
  <div class="container d-flex justify-content-center align-items-center">
    <form class="mt-5">
    <div class="form-group">
      Email
      <input v-model="email" type="email" class="form-control" placeholder="Enter email">
    </div>
    <div class="form-group">
      Password
      <input v-model="password" type="password" class="form-control" placeholder="Enter password">
    </div>
    <input @click.prevent="register({email, password})" type="submit" class="btn btn-primary" value="Register">
    <small class="form-text text-danger">Error here</small>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions({
      register: 'register'
    })
  }
}
</script>

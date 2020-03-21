<template>
  <div class="container-fluid d-flex justify-content-center align-items-center bg-dark vh-100 text-dark text-center">
    <form class="mt-5 bg-light border rounded m-4 p-4">
      <div class="form-group">
        Email
        <input v-model="email" type="email" class="form-control" placeholder="Enter email">
      </div>
      <div class="form-group">
        Password
        <input v-model="password" type="password" class="form-control" placeholder="Enter password">
      </div>
      <input @click.prevent="$store.dispatch('login', {email, password})" type="submit" class="btn btn-success" value="Login">
      <small class="form-text" :class="$store.state.notification.color">{{ $store.state.notification.msg }}</small>
    </form>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  getters: {
  },
  methods: {
    ...mapActions({
      login: 'login'
    }),
    ...mapMutations({
      emptyNotification: 'emptyNotification'
    })
  },
  created () {
    this.emptyNotification()
  }
}
</script>

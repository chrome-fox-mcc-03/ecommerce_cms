<template>
  <div>
    <profile-loading v-if="pageLoading"></profile-loading>
    <div v-if="!pageLoading" class="container-fluid d-flex justify-content-center align-items-center bg-dark vh-100 text-dark text-center">
      <form class="mt-5 bg-light border rounded m-4 p-4">
      <div class="form-group">
        Email
        <input v-model="email" type="email" class="form-control" placeholder="Enter email">
      </div>
      <div class="form-group">
        Password
        <input v-model="password" type="password" class="form-control" placeholder="Enter password">
      </div>
      <input @click.prevent="register({email, password})" type="submit" class="btn btn-primary" value="Register">
      <small class="form-text" :class="$store.state.notification.color">{{ $store.state.notification.msg }}</small>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import ProfileLoading from '../components/ProfileLoading'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState({
      pageLoading: state => state._pageLoading
    })
  },
  methods: {
    ...mapActions({
      register: 'register'
    }),
    ...mapMutations({
      stopLoading: 'stopLoading',
      emptyNotification: 'emptyNotification'
    })
  },
  components: {
    ProfileLoading
  },
  created () {
    this.emptyNotification()
    this.stopLoading()
  }
}
</script>

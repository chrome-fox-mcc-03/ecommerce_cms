<template>
  <div>
    <profile-loading v-if="pageLoading"></profile-loading>
    <div v-if="!pageLoading" class="container d-flex justify-content-center align-items-center">
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
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
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
    })
  },
  components: {
    ProfileLoading
  }
}
</script>

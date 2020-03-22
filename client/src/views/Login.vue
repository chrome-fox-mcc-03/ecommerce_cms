<template>
  <div>
    <Error></Error>
    <Auth :action="'Login'"></Auth>
  </div>
</template>

<script>
import Auth from '../components/Auth'
import Error from '../components/Error'
import { mapMutations } from 'vuex'

export default {
  name: 'Login',
  components: {
    Auth,
    Error
  },
  methods: {
    ...mapMutations(['SHOW_ERROR'])
  }
}
</script>

<style>
</style>

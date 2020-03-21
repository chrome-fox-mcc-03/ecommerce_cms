<template>
  <div class="container alert alert-danger alt-auth" role="alert" v-if="error">
    <i class="fa fa-warning"></i>
    {{error}}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Error',
  computed: {
    ...mapState(['error'])
  }
}
</script>

<style>

</style>

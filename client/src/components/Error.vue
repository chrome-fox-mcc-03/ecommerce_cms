<template>
  <div class="row" role="alert" v-if="error">
    <div class="col-md-12">
      <b-alert
        :show="dismissCountDown"
        dismissible
        fade
        variant="danger"
        @dismiss-count-down="countDownChanged"
        >{{String(error)}}
      </b-alert>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Error',
  data () {
    return {
      dismissCountDown: 3
    }
  },
  computed: {
    ...mapState(['error'])
  },
  methods: {
    ...mapMutations(['SHOW_ERROR']),
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    }
  }
}
</script>

<style>

</style>

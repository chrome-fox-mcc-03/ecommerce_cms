<template>
  <div class="row bg-dark" id="dashboard">
    <div class="col-md-3">
      <div class="container bg-dark">
        <ul class="list-group text-center">
          <li class="list-group-item">
            <router-link to="/dashboard/products" class="btn btn-sm btn-outline-success">Show All Product</router-link>
          </li>
          <li class="list-group-item">
            <router-link to="/dashboard/create" class="btn btn-sm btn-outline-success">Add New Product</router-link>
          </li>
        </ul>
        <b-alert
          :show="dismissCountDown"
          dismissible
          fade
          variant="warning"
          @dismissed="dismissCountDown=0"
          class="mt-4"
        >
          <p>{{ alertMsg }}</p>
        </b-alert>
      </div>
    </div>
    <div class="col-md-9">
      <div class="container m-1 bg-light border rounded text-center">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { BAlert } from 'bootstrap-vue'

export default {
  data () {
    return {
      dismissSecs: 5,
      dismissCountDown: 0,
      needAlert: false,
      alertMsg: ''
    }
  },
  methods: {
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  },
  components: {
    BAlert
  },
  created () {
    this.needAlert = this.$store.getters.isAlert
    this.alertMsg = this.$store.getters.alertMsg
    if (this.needAlert) {
      this.showAlert()
      this.$store.commit('hideAlert')
    }
  }
}
</script>

<style>
#dashboard {
  padding-top: 4em;
}
</style>

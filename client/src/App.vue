<template>
  <div id="app">
    <top-navbar v-if="isLogin"></top-navbar>
    <side-navbar v-if="isLogin"></side-navbar>
    <div class="container-fluid">
      <div class="row d-flex justify-content-center">
        <main role="main" class="col-md-9 col-lg-10 px-4"
          :class="{ 'ml-sm-auto': isLogin }">
          <router-view/>
        </main>
      </div>
    </div>
    <notifications/>
  </div>
</template>

<script>
import TopNavbar from './components/TopNavbar'
import SideNavbar from './components/SideNavbar'
import { mapState } from 'vuex'

export default {
  components: {
    TopNavbar,
    SideNavbar
  },
  computed: {
    ...mapState(['errorObj', 'successObj', 'isLogin'])
  },
  watch: {
    successObj () {
      const { message } = this.successObj
      this.$notify({
        type: 'success',
        text: message
      })
    },
    errorObj () {
      const { message, errors } = this.errorObj
      errors.forEach(err => {
        this.$notify({
          title: message,
          type: 'error',
          text: err
        })
      })
    }
  }
}
</script>

<style>
body {
  font-size: 0.875rem;
}
[role="main"] {
  padding-top: 133px!important; /* Space for fixed navbar */
}

@media (min-width: 768px) {
  [role="main"] {
    padding-top: 48px!important; /* Space for fixed navbar */
  }
}
</style>

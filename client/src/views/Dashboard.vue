<template>
  <div class="d-flex flex-row justify-content-around align-items-start">
      <div class="sidebar">
          <Sidebar />
      </div>
      <div class="content">
          <h2>this is dashboard content</h2>
          <router-view />
      </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'

export default {
  name: 'Dashboard',
  components: {
    Sidebar
  }
}
</script>

<style>

</style>

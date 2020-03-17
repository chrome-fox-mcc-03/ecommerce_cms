<template>
  <div class="d-flex flex-row justify-content-around align-items-start">
      <div class="sidebar">
          <Sidebar />
      </div>
      <div class="content">
          <h2>this is dashboard content</h2>
      </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'

export default {
  components: {
    Sidebar
  }
}
</script>

<style>

</style>

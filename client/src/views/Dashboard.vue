<template>
  <div class="d-flex flex-row justify-content-around align-items-start">
      <Sidebar />
      <router-view />
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

<style scoped>

.sidebar {
  align-self: stretch;
  height: 90vh;
  width: 15vw;
}

</style>

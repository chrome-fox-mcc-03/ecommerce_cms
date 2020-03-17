<template>
  <div>
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  name: 'DashboardPage',
  components: {
    Navbar
  },
  created () {
    console.log('VUEVUEVUE')
  }
}
</script>

<style scoped>
</style>

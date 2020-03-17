<template>
  <div>
    <Navbar />
    <h2>Dashboard!!!</h2>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  name: 'DashboardPage',
  components: {
    Navbar
  }
}
</script>

<style>
</style>

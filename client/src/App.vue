<template>
  <div id="app">
    <div id="nav">
    </div>
    <top-navbar></top-navbar>
    <side-navbar></side-navbar>
    <router-view/>
    <notifications/>
  </div>
</template>

<script>
import TopNavbar from './components/TopNavbar'
import SideNavbar from './components/SideNavbar'

export default {
  components: {
    TopNavbar,
    SideNavbar
  }
}
</script>

<style>

</style>

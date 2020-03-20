<template>
  <div id="side-nav">
    <ul id="sidenav-content" class="sidenav sidenav-fixed brown lighten-4">
      <li>
        <div class="user-view">
          <div id="nav-logo">
            <img src="../assets/logo.png">
            <span></span>
          </div>
        </div>
      </li>
      <li><div class="divider"></div></li>
      <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
      <li><a href="#!">Second Link</a></li>
      <li><a class="subheader">Subheader</a></li>
      <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
    </ul>
  </div>
</template>

<script>
import M from 'materialize-css'
export default {
  mounted () {
    M.AutoInit()
  }
}
</script>

<style>

</style>

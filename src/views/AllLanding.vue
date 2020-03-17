<template>
  <div class='landing'>
    <img class="landing-background" src='../assets/landing_logo.svg'>
    <user-login></user-login>
  </div>
</template>

<script>
import UserLogin from '../components/UserLogin'
export default {
  components: {
    UserLogin
  }
}

</script>

<style>
  .landing {
    display: flex;
  }
  .landing-background {
    width: auto;
    height: auto;
  }
</style>

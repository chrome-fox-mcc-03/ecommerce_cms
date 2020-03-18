<template>
  <div class='landing'>
    <img class="landing-background" src='../assets/landing_logo.svg'>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLogin: false
    }
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

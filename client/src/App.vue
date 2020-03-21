<template>
  <div id="app">
    <lottie-player
        src="https://assets2.lottiefiles.com/datafiles/67bae0ddb57b26679d10e9ce7c1d445f/data.json"  background="transparent"  speed="1"  style="margin-left:30%; width: 80%; height: 90%; position: fixed; top:0; left:0; right:0, bottom:0; z-index:101"  loop autoplay v-if="this.$store.state.isLoading" >
    </lottie-player>
    <notifications animation-type="velocity" group="foo"/>
    <router-view/>
  </div>
</template>

<script>
export default {
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

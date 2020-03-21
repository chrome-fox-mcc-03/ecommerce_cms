<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'Home',
	components: {
		// HelloWorld
	}
}
</script>

<style>
.home {
  text-align: left;
  display: flex !important;
  justify-content: center;
  align-items: center;
}
</style>

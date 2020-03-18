<template>
  <div class="home">
    <div>VIEWS/HOME</div>
    <div>{{ vuex }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState({
      vuex: 'testVuex'
    })
  }
}
</script>

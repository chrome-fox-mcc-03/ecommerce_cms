<template>
  <div></div>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.removeItem(this.$parent.appName)
      this.$router.push({ name: 'Login' })
    }
  },
  created () {
    console.log('logout here')
    this.logout()
  }
}
</script>

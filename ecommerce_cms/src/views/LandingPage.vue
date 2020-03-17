<template>
  <div>
    <h1>login page</h1>
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
    if(localStorage.token) {
      next('/')
    }
    else{
      next('/login')
    }
  }
}
</script>
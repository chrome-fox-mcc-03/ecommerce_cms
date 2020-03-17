<template>
  <div class="home">
    <Navbar/>
    <Listproduct/>
  </div>
</template>

<script>
// @ is an alias to /src
import Listproduct from './ListProduct'
import Navbar from '../components/NavBar'
export default {
  name: 'Home',
  components: {
    Navbar,
    Listproduct
  },
  beforeRouteEnter (to, from, next) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
    if(localStorage.token) {
      next()
    }
    else{
      next('/login')
    }
  }
}
</script>

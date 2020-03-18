<template>
  <div>
    <nav class="level">
      <!-- Left side -->
      <div class="level-left">
        <div class="level-item">
          <p class="subtitle is-5">
            <strong>
                <router-link to="/dashboard">Dashboard</router-link>
            </strong>
          </p>
        </div>
      </div>

      <!-- Right side -->
      <div class="level-right">
        <p class="level-item">
          <router-link to="/products">Products</router-link>
        </p>
        <p class="level-item">
            <router-link to="/products/add">Add Product</router-link>
        </p>
        <p class="level-item">
          <a v-on:click="logout()" class="button is-dark">logout</a>
        </p>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

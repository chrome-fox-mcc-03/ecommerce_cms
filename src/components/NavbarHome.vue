<template>
  <nav class="navbar navbar-light d-flex justify-content-between">
      <h3 class="navbar-brand" v-if="!isLoggedIn">SHOPPINGKUY</h3>
      <h4 class="navbar-brand" v-if="isLoggedIn">{{ name }}</h4>
      <h3 class="navbar-brand" v-if="isLoggedIn">{{ store_name }}</h3>
      <router-link to="/login" v-if="!isLoggedIn">
          <a class="btn btn-link sign-in-btn mr-4 pr-4 pl-4 pt-2 pb-2 shadow">Log In</a>
      </router-link>
      <div v-if="isLoggedIn" class="acc-sign-out">
          <a class="btn btn-link sign-out-btn" @click.prevent="logout">Log Out</a>
      </div>
  </nav>
</template>

<script>
export default {
  props: {
    isLoggedIn: Boolean
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    name () {
      return localStorage.getItem('name')
    },
    store_name () {
      return localStorage.getItem('store_name')
    }
  }
}
</script>

<style>
    h3 {
        font-size: 24px !important;
        margin: 0 !important;
        color: white !important;
        padding: 0 !important;
    }
    h4 {
        font-size: 16px !important;
        margin:0 !important;
        color: white !important;
        padding:0 !important;
    }
    .navbar {
        width: 100vw;
        background-color: rgb(19, 58, 116);
        padding-right: 3vw;
        padding-left: 3vw;
    }
    .sign-in-btn {
        background-color: rgb(26, 92, 167) !important;
        border-radius: 5px;
        color: white !important;
        cursor: pointer;
    }
    .sign-out-btn {
        border: 2px solid white;
        font-size: 10px;
        border-radius: 20px;
        color: white !important;
        cursor: pointer;
        font-weight: bold;
    }
    .sign-out-btn:hover {
      color: rgb(26, 92, 167) !important;
      background-color: white !important;
    }
    a {
        cursor: pointer;
        text-decoration: none !important;
    }
    a:hover {
        text-decoration: none !important;
    }
</style>

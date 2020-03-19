<template>
  <div id="app">
    <Navbar></Navbar>
    <ErrorMessage v-if="error" class="container w-50 mt-3" />
    <Spinner v-if="loading" />
    <b-container fluid="md" class="w-75 mt-5">
      <router-view />
    </b-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Spinner from "@/components/Spinner.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Spinner,
    ErrorMessage
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
    error() {
      return this.$store.state.error;
    }
  },
  created() {
    if (localStorage.access_token) {
      this.$store.commit('SUCCESS_AUTH');
    }
  }
};
</script>

<style>
Navbar {
  margin-top: 100px;
}
</style>
<template>
  <v-app>
    <router-link to="/login">Login</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
    <router-link to="/productcard">Product Card</router-link>
    <router-view />

    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/Footer';

export default {
  name: 'App',

  components: {
    Footer
  },

  computed: {
    load() {
      return this.$store.state.loading;
    },
    error() {
      return this.$store.state.error;
    }
  }
};
</script>

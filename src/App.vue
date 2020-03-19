<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <Navigation v-if="load" />

    <v-content></v-content>

    <Footer />
  </v-app>
</template>

<script>
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Navigation,
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

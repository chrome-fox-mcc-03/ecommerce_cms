<template>
  <div class="home">
    <Navigation />

    <!-- <v-app-bar app color="primary" dark>
      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <Navigation v-if="load" />

    <v-content></v-content>
    -->
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'Dashboard',
  components: {
    Navigation
  }
};
</script>

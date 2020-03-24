<template>
  <v-footer class="pa-3 white" color="secondary">
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
    <v-tooltip>
      <template v-slot:activator="{ on }">
        <v-btn icon large href="#" target="_blank" v-on="on">
          <v-icon color="warning">mdi-github</v-icon>
        </v-btn>
      </template>
      <span>Juleshwa Github</span>
    </v-tooltip>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped>
.white * {
  color: #fff;
}
</style>>

<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar color="blue" dark flat>
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-form>
              <v-card-text>
                <v-text-field label="Email" name="email" prepend-icon="mdi-account" type="email"></v-text-field>
                <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  prepend-icon="mdi-lock"
                ></v-text-field>
              </v-card-text>
            </v-form>
            <v-card-actions class="white">
              <v-spacer></v-spacer>
              <v-btn color="blue">Login</v-btn>
              <v-btn color="red">Cancel</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'login'
};
</script>

<style scoped>
.white * {
  color: #fff;
}
</style>>

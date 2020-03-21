<template>
  <div class="form-vue">
    <FormLandingPage :titleForm="'Register'"></FormLandingPage>
    <router-link to="/">Login Here!</router-link>
    <router-view />
  </div>
</template>

<script>
import FormLandingPage from "@/components/FormLandingPage.vue";
export default {
  name: "Register",
  components: {
    FormLandingPage
  }
};
</script>

<style>
.form-vue {
  width: 50%;
  margin: 0 auto;
}
</style>
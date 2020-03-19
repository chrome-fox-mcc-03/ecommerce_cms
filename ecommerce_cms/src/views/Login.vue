<template>
  <div class="form-vue">
    <FormLandingPage :titleForm="'Login'"></FormLandingPage>
    <router-link to="/register">Register Here!</router-link>
    <router-view />
  </div>
</template>

<script>
import FormLandingPage from "@/components/FormLandingPage.vue";
export default {
  name: "Login",
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
<template>
<div class="bg-gradient-primary login-page">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-9 col-lg-12 col-xl-10">
        <login-form />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import LoginForm from '../components/landing/LoginForm.vue';

export default {
  components: {
    LoginForm,
  },
  data() {
    return {
      // imageLink: require('assets/img/dogs/image3.jpeg'),
    };
  },
};
</script>

<style scoped>
.login-page {
  height: 100vh;
}
</style>

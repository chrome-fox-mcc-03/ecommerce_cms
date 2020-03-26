<template>
  <form @submit.prevent="sendToLanding">
    <h1>Welcome Back !</h1>
    <hr />
    <div class="form-group">
      <input type="email" placeholder="Insert email" v-model="email" />
    </div>
    <div class="form-group">
      <input type="password" placeholder="Insert password" v-model="password" />
    </div>
    <input type="submit" class="btn btn-primary" value="Login" />
    <hr />
    <a href="javascript:;" @click="changeToRegister"
      >Doesn't have an account?</a
    >
  </form>
</template>

<script>
export default {
  name: "LandingLogin",
  data() {
    return {
      email: null,
      password: null,
      username: null
    };
  },
  methods: {
    changeToRegister() {
      this.$emit("change-to-register");
    },
    sendToLanding() {
      this.$emit("login-user", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style scoped></style>

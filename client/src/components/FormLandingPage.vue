<template>
  <div>
    <h1 class="text-center mb-3">{{titleForm }}</h1>
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          required
          placeholder="Enter email"
          :state="emailState"
          autofocus
        ></b-form-input>
        <b-form-invalid-feedback id="email-live-feedback">Enter a valid email</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="password"
          required
          placeholder="Enter Password"
          type="password"
          :state="passwordState"
        ></b-form-input>
        <b-form-invalid-feedback id="password-live-feedback">Password length between 5 - 20</b-form-invalid-feedback>
      </b-form-group>

      <b-button type="submit" variant="dark" class="mr-1">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "FormLandinPage",
  props: {
    titleForm: String
  },
  data() {
    return {
      email: "",
      password: "",
      role: true,
      show: true
    };
  },
  methods: {
    onSubmit() {
      // register
      if (this.titleForm === 'Register') {
        const payload = {
          email: this.email,
          password: this.password,
          role: this.role
        }
        this.$store.dispatch("registerAdmin", payload)
          .then(({ data }) => {
            this.$store.commit('SET_LOADING', false)
            this.$store.commit('SET_ERROR_STATUS', false)
            this.$store.commit("SUCCESS_AUTH", data.access_token)
            localStorage.access_token = data.access_token
            this.$router.push('/home')
          })
          .catch(({ response }) => {
            this.$store.commit('SET_LOADING', false)
            this.$store.commit('SET_ERROR_MESSAGE', response.data.message)
          })
      } else if (this.titleForm === 'Login') { //login
        const payload = {
          email: this.email,
          password: this.password,
        };
        this.$store.dispatch("loginAdmin", payload)
          .then(({ data }) => {
            this.$store.commit('SET_LOADING', false)
            this.$store.commit('SET_ERROR_STATUS', false)
            this.$store.commit("SUCCESS_AUTH", data.access_token)
            localStorage.access_token = data.access_token
            this.$router.push('/home')
          })
          .catch(({ response }) => {
            this.$store.commit('SET_LOADING', false)
            this.$store.commit('SET_ERROR_MESSAGE', response.data.message)
          });
      }
    },
    onReset() {
      this.email = "";
      this.password = "";
    }
  },
  computed: {
    emailState() {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(this.email).toLowerCase())
    },
    passwordState() {
      return this.password.length >= 5 && this.password.length <= 20
        ? true
        : false
    }
  }
};
</script>

<style  scoped>
</style>
<template>
  <div>
    <b-container v-if="show">
      <b-row align-h="center">
        <b-col cols="12" md="8" lg="6" xl="4">
          <b-img thumbnail src="https://i2.wp.com/d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2020/01/16161919/hacktiv8.png" alt="Hacktiv 8" width="150" height="150"></b-img>
          <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
            <b-form-group id="input-group-3" label="Your Name:" label-for="input-3">
              <b-form-input
                id="input-3"
                v-model="form.name"
                required
                placeholder="Enter name"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label="Your Email address:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Email address"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
              <b-form-input
                id="input-2"
                type="password"
                v-model="form.password"
                required
                placeholder="Password"
              ></b-form-input>
            </b-form-group>
            <b-row>
              <b-col md="6" class="mb-3">
                <b-button type="submit" variant="primary" size="lg" block>Register</b-button>
              </b-col>
              <b-col md="6">
                <b-button type="reset" variant="danger" size="lg" block>Reset</b-button>
              </b-col>
            </b-row>
            <b-row>
              have account already? click <router-link to="/login">here</router-link> to login!
            </b-row>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        password: ''
      },
      show: true,
      isLoading: false
    }
  },
  methods: {
    onSubmit () {
      this.isLoading = true
      Axios({
        method: 'POST',
        url: 'http://localhost:3000/admin/register',
        data: {
          name: this.form.name,
          email: this.form.email,
          password: this.form.password
        }
      })
        .then(response => {
          const { token, name } = response.data

          localStorage.setItem('token', token)
          localStorage.setItem('name', name)

          this.$notify({
            type: 'primary',
            text: 'You successfully logged in'
          })
        })
        .catch(err => {
          const { errors } = err.response.data

          errors.forEach(err => {
            this.$notify({
              title: 'Input Error!',
              type: 'warn',
              text: err
            })
          })
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    onReset () {
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.password = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="justify-content-center row">
        <div class="card">
          <article class="card-body">
            <h4 class="card-title text-center mb-4 mt-1">{{ action }}</h4>
            <hr>
              <form @submit.prevent="submitForm">
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"></span>
                    </div>
                    <input name="" class="form-control" placeholder="Email" type="email" v-model="email" required>
                  </div>
                </div>
                  <div class="form-group">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"> </span>
                    </div>
                      <input
                      class="form-control"
                      placeholder="******"
                      type="password"
                      v-model="password"
                      required>
                  </div>
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-primary btn-block" :value="action"> {{ action }} </button>
                </div>
              </form>
          </article>
        </div>

        <div class="col-md-12 center"
             v-if="loading === true">
            <lottie-player
                src="https://assets2.lottiefiles.com/datafiles/DsjK4Q0K3WGTIVf/data.json"
                background="transparent"
                speed="0.6"
                style="width: 300px; height: 200px;"
                loop autoplay>
            </lottie-player>
            <p class="font-weight-light mt-0 h4">Loading....</p>
        </div>

    </div>
  </div>
</template>

<script>

import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Auth',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  props: {
    action: String
  },
  computed: {
    ...mapState(['loading'])
  },
  methods: {
    ...mapMutations(['SET_LOADING', 'SET_ISLOGIN', 'SHOW_ERROR']),
    ...mapActions(['login', 'register']),
    submitForm () {
      this.SET_LOADING(true)
      const data = {
        email: this.email,
        password: this.password
      }
      if (this.action === 'Register') {
        data.role = 'customer'
        this.register(data)
          .then(({ data }) => {
            localStorage.setItem('token', data.token)
            this.SET_ISLOGIN(true)
            this.$router.push('/products')
            this.SET_LOADING(false)
          })
          .catch(err => {
            this.SHOW_ERROR(err.response.data.error)
            this.SET_LOADING(false)
          })
      } else if (this.action === 'Login') {
        this.login(data)
          .then(({ data }) => {
            localStorage.setItem('token', data.token)
            this.SET_ISLOGIN(true)
            this.$router.push('/products')
            this.SET_LOADING(false)
          })
          .catch(err => {
            this.SHOW_ERROR(err.response.data.error)
            this.SET_LOADING(false)
          })
      }
    }
  }
}
</script>

<style scoped>

.card {
  height: 300px;
  width: 350px;
}

</style>

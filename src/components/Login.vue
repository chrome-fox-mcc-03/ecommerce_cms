<template>
  <div class="login">
    <div class="row">
      <div class="col s6 offset-s3">
        <h1>{{ msg }}</h1>
      </div>
      <div id="login-card" class="col s6 offset-s3">
        <div class="card-panel z-depth-3 brown lighten-4">
          <h3>Login</h3>
          <form id="login-form" @submit.prevent="login">
            <div class="row">
              <div class="input-field col s10 offset-s1">
                <input id="email" type="email" class="validate" v-model="email">
                <label for="email">Email</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s10 offset-s1">
                <input id="password" type="password" minlength="3" class="validate" v-model="password">
                <label for="password">Password</label>
              </div>
            </div>

            <div class="row center">
              <button type="submit" class="waves-effect waves-light btn-large">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String
  },

  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    login () {
      this.$store.commit('LOADING')
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
        .then(({ data }) => {
          localStorage.setItem('token', data.token)
          localStorage.setItem('username', data.username)
          this.$router.push('/admin')
          this.$store.commit('SUCCESS', 'Login successful')
        })
        .catch(err => {
          this.email = ''
          this.password = ''
          this.$store.commit('ERROR', err)
        })
        .finally(() => this.$store.commit('LOADING'))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  background-color: #d7ccc8;
  color: #fdfdfd;
}
h3 {
  margin: 0 0 3vh 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0
  10px;
}
#login-card{
  color: #fdfdfd;
}
</style>

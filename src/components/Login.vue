<template>
<div v-if="!isLogin" class="container login-container">
  <div class="row justify-content-center">
    <div class="col-md-6 login-form-1">
        <h3>Login</h3>
        <form @submit.prevent="login">
            <div class="form-group">
                <input v-model="dataLogin.email" type="text" class="form-control" placeholder="Your Email *" value="" />
            </div>
            <div class="form-group">
                <input v-model="dataLogin.password" type="password" class="form-control" placeholder="Your Password *" value="" />
            </div>
            <div class="form-group">
                <input type="submit" class="btnSubmit" value="Login" />
            </div>
        </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      dataLogin: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  methods: {
    login () {
      this.$store.commit('SET_LOADING', true)
      this.$store.dispatch('login', this.dataLogin)
        .then(response => {
          console.log(response.data)
          localStorage.setItem('token', response.data.token)
          this.$router.push('/dashboard')
          this.$store.commit('SET_LOGIN', true)
          this.$store.commit('SET_PROFILE', response.data.payload)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(_ => {
          this.$store.commit('SET_LOADING', false)
        })
    }
  }
}
</script>

<style scoped>
.login-container{
    margin-top: 5%;
    margin-bottom: 5%;
}
.login-form-1{
    padding: 5%;
    background: #a8d8ea;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-1 h3{
    text-align: center;
    color: #fff;
}
.login-container form{
    padding: 10%;
}
.btnSubmit
{
    width: 50%;
    border-radius: 1rem;
    padding: 1.5%;
    border: none;
    cursor: pointer;
}
.login-form-1 .btnSubmit{
    font-weight: 600;
    color: #aa96da;
    background-color: #fff;
}
</style>

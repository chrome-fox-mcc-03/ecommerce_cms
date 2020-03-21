<template>
  <div class="login">
    <at-card style="width: 300px;" :bordered="false">
      <h3 slot="title">Login</h3>
      <div>
        <form>
          <div class="input">
            <p>Email: </p>
            <at-input v-model="email" placeholder="Please input"></at-input>
          </div>
          <div class="input">
            <p>Password: </p>
            <at-input v-model="password" type="password" placeholder="Please input Password"></at-input>
          </div>
          <div class="input">
            <at-button type="primary" @click="login({password, email})">submit</at-button>
          </div>
        </form>
      </div>
    </at-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login (payload) {
      this.start()
      this.$store.dispatch('login', payload)
        .then(data => {
          this.finish()
          this.open3('Login Success')
          localStorage.setItem('token', data.data.token)
          this.$router.push('/admin/product')
        })
        .catch(err => {
          this.error()
          this.open4('error faild')
          console.log(err)
        })
    },
    start () {
      this.$Loading.start()
    },
    finish () {
      this.$Loading.finish()
    },
    error () {
      this.$Loading.error()
    },
    open3 (message) {
      this.$Notify.success({
        message,
        duration: 2000
      })
    },
    open4 (message) {
      this.$Notify.error({
        message,
        duration: 2000
      })
    }
  }
}
</script>

<style>
.login {
  display: flex;
  justify-content: center;
  padding-top: 100px !important;
}
.input {
  margin-top: 25px;
}

.input p {
  text-align: justify;
  margin-bottom: 10px;
}
</style>

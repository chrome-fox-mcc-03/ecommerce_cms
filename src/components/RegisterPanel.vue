<template>
<div>
    <NavbarPanel/>
    <div class="modal-dialog text-center">
      <div class="col-sm-20 main-section">
          <div class="modal-content">
              <div class="col-12 form-input">
                  <form @submit.prevent="register">
                      <h1>NEW ADMIN</h1>
                      <div class="form-group">
                          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp" v-model="email">
                      </div>
                      <div class="form-group">
                          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
                      </div>
                      <button type="submit" class="btn btn-success m-2 p-2">Submit</button>
                      <button type="button" @click="cancel"  class="btn btn-success m-2 p-2" style="background-color: #AD6A6C;">Cancel</button>
                  </form>
              </div>
          </div>
      </div>
  </div>
</div>
</template>

<script>
import axiosCMS from '../config/index'
import NavbarPanel from '../components/NavbarPanel'

export default {
  name: 'RegisterPanel',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    NavbarPanel
  },
  methods: {
    register () {
      console.log('KE HIT REGISTER')
      axiosCMS({
        method: 'post',
        url: '/register',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(user => {
          console.log('KE HIT KE SINIIIIII THEEENNN')
          this.$router.push({ path: '/' })
        })
        .catch(({ response }) => {
          const { data } = response
          // data.errors.forEach(error => {
          // if()
          console.log(data)
          console.log('KE HIT ERRRRORRRRRR')
          this.$vToastify.error(data.errors[0])
          // })
        })
    },
    cancel () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>

</style>

<template>
<div class="card shadow-lg o-hidden border-0 my-5">
        <div class="card-body p-0">
          <div class="row">
            <div class="col-lg-6 d-none d-lg-flex">
              <div class="flex-grow-1 bg-login-image"
        :style="{'background-image': `url(${require('../../assets/img/dogs/image3.jpeg')})`}"></div>
            </div>
            <div class="col-lg-6">
              <div class="p-5">
                <div class="text-center">
                  <h4 class="text-dark mb-4">Welcome Back!</h4>
                </div>
                <form @submit.prevent="login" class="user">
                  <div class="form-group">
                    <input class="form-control form-control-user" v-model="userData.email"
                      type="email" id="exampleInputEmail" aria-describedby="emailHelp"
                      placeholder="Enter Email Address..." name="email"></div>
                  <div class="form-group">
                    <input class="form-control form-control-user" v-model="userData.password"
                      type="password" id="exampleInputPassword" placeholder="Password"
                      name="password"></div>
                  <button class="btn btn-primary btn-block text-white btn-user"
                    type="submit">Login</button>
                  <hr><a class="btn btn-primary btn-block text-white btn-google btn-user"
                    role="button"><i class="fab fa-google"></i>&nbsp; Login with Google</a><a
                    class="btn btn-primary btn-block text-white btn-facebook btn-user"
                    role="button"><i class="fab fa-facebook-f"></i>&nbsp; Login with Facebook</a>
                  <hr>
                </form>
                <div class="text-center"><a class="small" href="forgot-password.html">Forgot
                    Password?</a></div>
                <div class="text-center"><a class="small" href="register.html">Create an
                    Account!</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
// import { mapActions } from 'vuex';

export default {
  name: 'loginForm',
  data() {
    return {
      userData: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      const loader = this.$loading.show({
        // Optional parameters
        container: null,
        canCancel: true,
        onCancel: this.onCancel,
      });

      this.$store.dispatch('login', this.userData)
        .then((result) => {
          this.email = '';
          this.password = '';
          localStorage.setItem('access_token', result.data.access_token);
          this.$router.push('/dashboard');
          loader.hide();
        })
        .catch((err) => {
          this.email = '';
          this.password = '';
          loader.hide();
          this.$toasted.show(err.response.data.errors[0], {
            theme: 'bubble',
            position: 'top-right',
            duration: 3000,
          });
        });
    },
  },
};
</script>

<style>

</style>

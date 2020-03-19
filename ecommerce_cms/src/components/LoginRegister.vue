<template>
  <div class="container d-flex justify-content-center">
    <div id="loginbox" style="margin-top:50px;" class="mainbox col-md-4 col-md-offset-3 col-sm-8 col-sm-offset-2">
      <div class="panel panel-info" >
      <div class="panel-heading">
        <div class="panel-title">Log In</div>
      </div>
      <div style="padding-top:30px" class="panel-body">
        <div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>
          <form id="loginform" class="form-horizontal" role="form">
            <div style="margin-bottom: 25px" class="input-group">
              <input id="login-username" type="text" class="form-control" name="username" value="" placeholder="username or email">
            </div>
            <div style="margin-bottom: 25px" class="input-group">
              <input id="login-password" type="password" class="form-control" name="password" placeholder="password">
            </div>
            <div style="margin-top:10px;" class="form-group">
              <!-- Button -->
              <div class="col-sm-12 controls">
                <router-link id="btn-login" to="#" class="btn btn-success">Login</router-link>
                <router-link id="btn-glogin" to="#" class="btn btn-warning" style="margin-left:10px">Google Login</router-link>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12 control">
                <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%" >
                  Don't have an account?
                  <router-link to="#" @Click="changeForm()">
                    Register Here
                  </router-link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Login',
  props: {
    msg: String
  },
  methods: {
    ...mapMutations(['changeForm'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.panel-title {
  font-weight: bolder;
}
</style>

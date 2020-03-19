<template>
    <div class="container d-flex justify-content-center">
    <div id="loginbox" style="margin-top:50px;" class="mainbox col-md-4 col-md-offset-3 col-sm-8 col-sm-offset-2">
      <div class="panel panel-info" >
      <div class="panel-heading">
        <div class="panel-title">Register</div>
      </div>
      <div style="padding-top:30px" class="panel-body">
        <div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>
          <form id="loginform" class="form-horizontal" role="form">
            <div style="margin-bottom: 25px" class="input-group">
              <input id="login-email" type="text" class="form-control" name="email" value="" placeholder="email">
            </div>
            <div style="margin-bottom: 25px" class="input-group">
              <input id="login-name" type="text" class="form-control" name="name" value="" placeholder="name">
            </div>
            <div style="margin-bottom: 25px" class="input-group">
              <input id="login-password" type="password" class="form-control" name="password" placeholder="password">
            </div>
            <div style="margin-top:10px;" class="form-group">
                <!-- Button -->
                <div class="col-sm-12 controls">
                    <router-link id="btn-login" to="#" class="btn btn-success">Register</router-link>
                </div>
            </div>
            <div class="form-group">
              <div class="col-md-12 control">
                <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%" >
                    have an account?
                    <router-link to="#" @Click="$store.commit('changeForm')">
                        Login Here
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
export default {

}
</script>

<style>

</style>

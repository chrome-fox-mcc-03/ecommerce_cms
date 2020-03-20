<template>
  <div class="row justify-content-center">
        <div class="col-xs-12 col-sm-6 col-md-6">
            <div class="well well-sm">
                <div class="row align-items-center" >
                    <div class="col-sm-6">
                        <img src="https://1rul3edyje33mh89fawaqtao-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/dummy-profile-pic-male1-300x300.jpg" alt="" class="img-rounded img-responsive" />
                    </div>
                    <div class="col-sm-6">
                        <h4>
                            Administrator</h4>
                        <small><cite title="San Francisco, USA">Hacktiv8 MCC</cite></small>
                        <p>
                            {{profile.email}}
                            <br />
                            June 02, 1988
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    profile () {
      return this.$store.state.profile
    }
  }
}
</script>

<style>
small {
display: block;
line-height: 1.428571429;
color: #999;
}
</style>

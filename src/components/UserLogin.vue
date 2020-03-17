<template>
  <div id="login-canvas" uk-offcanvas>
    <div class="uk-offcanvas-bar">

      <button class="uk-offcanvas-close" type="button" uk-close></button>

      <fieldset class="uk-fieldset">
        <form action="" id="login-form">
          <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Email">
          </div>
          <div class="uk-margin">
            <input class="uk-input" type="password" placeholder="Password">
          </div>
          <div class="uk-margin">
            <button class="uk-button-text uk-button">Login</button>
          </div>
        </form>
      </fieldset>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UserLogin',
  methods: {
    login () {
      axios({
        method: 'POST'
      })
    }
  }
}

</script>

<style>
.uk-offcanvas-bar.uk-offcanvas-bar-animation.uk-offcanvas-slide {
  background: rgb(27,38,44);
  background: linear-gradient(180deg, rgba(27,38,44,1) 0%, rgba(15,76,117,1) 100%);
}

#login-form{
  margin-top: 15rem;
}

</style>

<template>
  <div class="container">
    <div class="card card-logreg">
      <h3>Register Admin Page</h3>
      <form>
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input is-primary" type="email" placeholder="Email" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input is-primary" type="password" placeholder="Password" />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <button type="submit" class="button is-primary is-outlined">Register</button>
      </form>

      <div id="nav" class="card-footer">
        <p>
          Do you have an account? you can
          <router-link to="/login">Login Now!</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

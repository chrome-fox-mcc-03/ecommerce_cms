<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand" to="/dashboard"> <img src="../../public/Shoesify-Logo.svg" alt="Logo" style="height: 2rem"> </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <router-link class="nav-item nav-link" to="/dashboard/">All Products<span class="sr-only">(current)</span></router-link>
                <router-link class="nav-item nav-link" to="/dashboard/add">Add New Product<span class="sr-only">(current)</span></router-link>
                <a class="nav-item nav-link" @click="signOut">Logout<span class="sr-only">(current)</span></a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    signOut: function () {
      this.$vToastify.prompt({
        body: 'Are you sure you want to sign out?',
        answers: { Yes: true, No: false }
      })
        .then(value => {
          if (value) {
            localStorage.clear()
            this.$router.push('/')
          }
        })
    }
  }
}
</script>

<style>
a {
  cursor: pointer;
}
</style>

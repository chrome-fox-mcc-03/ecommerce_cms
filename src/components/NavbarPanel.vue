<template>
    <div>
      <nav class="navbar navbar-light bg-costum">
          <!-- <span class="navbar-brand mb-0 h1">
              <img src="https://i.pinimg.com/originals/22/6d/5c/226d5cd7f24a676a8c1925bd061cd33d.gif" style="width: 80px; height: 80px;">
              Admin CMS</span> -->
          <router-link class="nav-link text-dark" :to="`/register`" style="font-weight: 500px; font-size:30px;padding-left: 20px;padding-top: 34px;text-decoration: none;">Add Admin</router-link>
          <router-link class="text-dark mb-0 h1 title-app m-3" :to="`/`" style="font-weight: 500px; font-size:75px;text-decoration: none;">Jolie</router-link>
          <button @click="logout" class="nav-link text-dark bg-transparent " style="font-weight: 500px; font-size:30px;padding-left: 20px; padding-top: 34px;border: none;">Logout</button>

          <!-- <ul class="nav">
              <li class="nav-item h3">
                  <router-link class="nav-link text-dark" :to="`/register`">Add Admin</router-link>
              </li>
              <li class="nav-item h3">
                  <router-link class="nav-link text-dark" :to="`/register`">Add Admin</router-link>
              </li>
              <li class="nav-item h3">
                <button @click="logout" class="nav-link text-dark bg-transparent " style="border: none;">Logout</button>
              </li>
            </ul> -->
      </nav>
    </div>
</template>

<script>
// import '../store/index'

export default {
  name: 'NavbarPanel',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>

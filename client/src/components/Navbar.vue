<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <router-link to="/" class="navbar-brand" href="#">Felix</router-link>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/product" class="nav-link" href="#">Products</router-link>
                </li>
                <li class="nav-item">
                    <ul class="navbar-nav">
                        <li v-if="!isLogin" class="nav-item">
                            <router-link to="/login" class="nav-link">Login</router-link>
                        </li>
                        <li v-else class="nav-item">
                            <a @click.prevent="logout" class="nav-link" href="#">Logout</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
	methods: {
		logout () {
			localStorage.clear()
			this.$store.commit('SET_ISLOGIN', false)
			this.$router.push({ name: 'Home' })
		}
	},
	computed: {
		isLogin () {
			return this.$store.state.isLogin
		}
	}
}
</script>

<style>

</style>

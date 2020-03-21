<template>
  <div class="login">
    <div class="container" style="width: 25vw;">
      <h2 class="ui teal header">
        <div class="content">
          Log-in admin JAGONYA HELM
        </div>
      </h2>
      <Message />
      <form class="ui form" @submit.prevent="login">
        <div class="ui stacked segment">
          <div class="field">
            <div
              class="ui left icon input"
              placeholder="E-mail address"
            >
              <input
                type="email"
                v-model="email"
                placeholder="E-mail address"
                required
              />
              <i class="user icon"></i>
            </div>
          </div>
          <div class="field">
            <div
              class="ui left icon input"
              placeholder="Password"
            >
              <input
                type="password"
                v-model="password"
                placeholder="Password"
                required
              >
              <i class="lock icon"></i>
            </div>
          </div>
          <button role="button" class="ui teal fluid large button">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Message from '@/components/Message.vue'

export default {
  name: 'FormLogin',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('adminLogin', {
        email: this.email,
        password: this.password
      })
    }
  },
  components: {
    Message
  }
}
</script>

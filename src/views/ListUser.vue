<template>
    <div>
        <h2>User List</h2>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <th scope="row">{{ user.id }}</th>
                    <td>{{ user.email }}</td>
                    <td>{{ user.role }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'ListUser',
  computed: {
    users () {
      return this.$store.state.users
    }
  },
  mounted () {
    this.$store.commit('SET_ERROR', false)
    this.$store.commit('SET_ERRORS', [])
  }
}
</script>

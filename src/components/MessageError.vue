<template>
    <div>
        <div v-for="(error, i) in errors" :key="i" :error="error" class="alert alert-danger" role="alert">
            {{ error }}
        </div>
    </div>
</template>

<script>
export default {
  name: 'MessageError',
  computed: {
    errors () {
      return this.$store.state.errors
    }
  }
}
</script>

<style scoped>
    div.alert.alert-danger {
        text-align: center;
        margin: 0;
        padding: 0;
    }
</style>

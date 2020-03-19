<template>
  <div>
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
      <b-form-group id="input-group-1" label-for="input-1" class="mb-5">
        <h3 class="text-center">Are you sure?</h3>
      </b-form-group>

      <div class="mr-auto flex-row">
        <b-button type="submit" variant="dark" class="mr-2 float-left">Delete</b-button>
        <b-button type="reset" variant="danger float-right">Cancel</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'DeleteProduct',
  props: {
    idProduct: Number
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('deleteProduct', this.idProduct)
        .then(() => {
          this.$store.commit('SET_ERROR_STATUS', false);
          return this.$store.dispatch('fetchProduct');
        })
        .then(({ data }) => {
          this.$store.commit('SET_LOADING', false);
          this.$store.commit('SET_ERROR_STATUS', false);
          this.$store.commit('SET_ITEMS', data.data);
          this.$emit('closeModal');
        })
        .catch(({ response }) => {
          this.$store.commit('SET_LOADING', false);
          this.$store.commit('SET_ERROR_MESSAGE', response.data.message);
          this.$emit('closeModal');
          if (response.status === 401) {
            this.$router.push('/');
            this.$store.commit('LOGOUT');
            localStorage.removeItem("access_token");
          }
        });
    },
    onReset() {
      this.$emit('closeModal');
    }
  }
}
</script>

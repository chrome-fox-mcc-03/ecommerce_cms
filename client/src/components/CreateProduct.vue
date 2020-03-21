<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <b-form-group id="input-group-1" label="Product name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="name"
          type="text"
          required
          placeholder="Enter product name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Image URL:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="image_url"
          type="text"
          required
          placeholder="Enter image url"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Price:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="price"
          type="number"
          required
          placeholder="Enter product price"
          min="1"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Stock:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="stock"
          type="number"
          required
          placeholder="Enter product stock"
          min="1"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="dark">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'CreateProduct',
  data() {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    };
  },
  methods: {
    onSubmit() {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      };
      this.$store.dispatch('createProduct', payload)
        .then(() => {
          this.$emit('closeModal');
          this.$store.commit('SET_ERROR_STATUS', false);
          return this.$store.dispatch('fetchProduct');
        })
        .then(({ data }) => {
          this.$store.commit('SET_LOADING', false);
          this.$store.commit('SET_ERROR_STATUS', false);
          this.$store.commit('SET_ITEMS', data.data);
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
    }
  }
}
</script>
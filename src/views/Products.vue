<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center> </v-layout>
    <TableProduct />
  </v-container>
</template>

<script>
// @ is an alias to /src
import TableProduct from '../components/TableProduct';

export default {
  name: 'Products',
  components: {
    TableProduct
  }
};
</script>

<style></style>

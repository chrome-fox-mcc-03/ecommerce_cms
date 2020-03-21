<template>
  <div class="showpage">
    <Navbar></Navbar>
    <!-- <div v-if="!isLoading" class="dashboard">
      <h2>LIST PRODUCTS</h2>
      <div class="row">
        <Card
         v-for="product in products"
         :key="product.id"
         :product="product">
        </Card>
      </div>
    </div>
    <div v-else>
        <Loading></Loading>
    </div> -->
    <router-view/>
  </div>
</template>
<script>
import Navbar from '../components/Navbar'
export default {
  name: 'ListProducts',
  components: {
    Navbar
  },
  data () {
    return {}
  },
  methods: {},
  computed: {
  },
  created () {
  }
}
</script>

<style>
  .showpage {
    width: 100% !important;
    margin: 2vh;
    padding: 2vh;
  }

  .dashboard {
    width: 100% !important;
    margin: 2vh;
    padding: 2vh;
  }

  h2 {
    text-align: center;
  }
  .row {
    /* width: 65% !important; */
    width: 100% !important;
    margin:2vh auto;
    /* left:25%;
    right:0; */
    display: flex;
    padding:2vh;
    justify-content: center;

  }
</style>

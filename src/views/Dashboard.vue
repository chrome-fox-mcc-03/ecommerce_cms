<template>
    <div>
        <h2>Dashboard</h2>
        <div class="cotainer">
            <div class="row">
                <div class="col-4 border border-dark rounded mr-md-3 p-3">
                    <h3>Total Users</h3>
                    <h4>
                      <animated-number
                            :value='getUsersLength'
                            :round='1'
                            :duration='1000'
                        />
                    </h4>
                </div>
                <div class="col-4 border border-dark rounded mr-md-3 p-3">
                    <h3>Total Products</h3>
                    <h4>
                      <animated-number
                            :value='getProductsLength'
                            :round='1'
                            :duration='1000'
                        />
                    </h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue"

export default {
  components: {
    AnimatedNumber
  },
  computed: {
    getProductsLength () {
      const products = this.$store.state.products
      const productsLength = products.length
      return productsLength
    },
    getUsersLength () {
      const users = this.$store.state.users
      const usersLength = users.length
      return usersLength
    }
  }
}
</script>

<style scoped>
    h3 {
        text-align: center;
    }
    h4 {
        text-align: center;
    }
</style>

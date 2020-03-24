<template>
  <div id="store">
      <div class="container-fluid">
        <div class="row">
            <aside class="col-2 px-0 fixed-top" id="left">
                <img class="img-fluid" src="../assets/logocms.png" alt="" style="height: 65px">
                <div class="list-group w-100">
                    <router-link to="/store" class="list-group-item list-group-item-action list-group-item-secondary">home</router-link>
                    <router-link to="/store/product" class="list-group-item list-group-item-action list-group-item-secondary">Products</router-link>
                    <router-link to="/store/order" class="list-group-item list-group-item-action list-group-item-secondary">Orders</router-link>
                    <router-link to="/store/customer" class="list-group-item list-group-item-action list-group-item-secondary">Customers</router-link>
                    <router-link to="/store/analystic" class="list-group-item list-group-item-action list-group-item-secondary">Analystics</router-link>
                </div>
            </aside>
            <main class="col-10 invisible">
                <!--hidden spacer-->
            </main>
            <main class=" col offset-2 h-100">
                <div class="row sticky-top" style="background-color: #8e2072">
                    <div class="col-12 d-flex justify-content-between text-light">
                        <div class="py-4">
                            Hello, {{ $store.state.name }}
                        </div>
                        <div class="py-3">
                            <button type="button" @click.prevent="logout" class="btn btn-dark">logout</button>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 py-4">
                        <router-view style=""></router-view>
                    </div>
                </div>
            </main>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.commit('LOGOUT')
    }
  },
  created () {
    this.$store.commit('SET_USER')
  }
}
</script>

<style>
#store {
    background-color: #f4f6f8;
}
.list-group {
    margin-top: 6px
}
</style>

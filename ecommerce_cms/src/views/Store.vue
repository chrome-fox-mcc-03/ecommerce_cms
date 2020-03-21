<template>
  <div>
      <div class="container-fluid">
        <div class="row">
            <aside class="col-2 px-0 fixed-top" id="left">
                <img class="img-fluid" src="../assets/logocms.png" alt="" style="height: 65px">
                <div class="list-group w-100">
                    <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">Link</a>
                    <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">Link</a>
                    <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">Link</a>
                    <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">Link</a>
                </div>
            </aside>
            <main class="col-10 invisible">
                <!--hidden spacer-->
            </main>
            <main class=" col offset-2 h-100">
                <div class="row bg-light sticky-top">
                    <div class="col-12 d-flex justify-content-between">
                        <div class="py-4">
                            Hello, {{ $store.state.name }}
                        </div>
                        <div class="py-3">
                            <button type="button" @click.prevent="logout" class="btn btn-dark">logout</button>
                        </div>
                    </div>
                </div>
                <div class="row bg-white">
                    <div class="col-12 py-4">
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
  }
}
</script>

<style>
.list-group {
    margin-top: 6px
}
</style>

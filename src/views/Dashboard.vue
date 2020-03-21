<template>
  <div class="container flex-grow-1 dashboard-container-small rounded m-5 row dashboard">
    <div class="side-nav col-2 d-flex flex-column">
      <router-link to="/home/list" class="navs p-4"><p>Product List</p></router-link>
      <router-link to="/home/new" class="navs p-4"><p>Add New Product</p></router-link>
      <router-link :to="{ path: `/home/productDetail/${selected}`}" class="navs p-4" :class="{ 'navs-disabled': !isSelected }" v-if="this.isSelected"><p>Product Detail</p></router-link>
      <div class="flex-grow-1 fill"></div>
    </div>
    <div class="dashboard-content col-10 d-flex">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data: () => {
    return {
      listActive: true,
      newActive: false,
      isSelected: false
    }
  },
  methods: {
    changeActive () {
      this.listActive = !this.listActive
      this.newActive = !this.newActive
    }
  },
  computed: {
    selected () {
      return this.$store.state.selectedId
    }
  },
  watch: {
    selected (val) {
      if (!val) this.isSelected = false
      else {
        this.isSelected = true
        this.$router.push({ path: `/home/productDetail/${val}` })
      }
    }
  }
}
</script>

<style>
.dashboard-container-small{
  background-color: rgb(255, 255, 255);
  padding: 0 !important;
  width: 60rem;
}
.side-nav {
  border-right: 0;
  padding: 0 !important;
}
.navs {
  background-color: #f9fafb;
  border-left: 1.3px solid #dfe3e8;
  border-top: 1.3px solid #dfe3e8;
}
.navs-disabled {
  background-color: #f9fafb;
  color: #dfe3e8;
  border-left: 1.3px solid #dfe3e8;
  border-top: 1.3px solid #dfe3e8;
  cursor: default;
}
.navs-disabled:hover {
  color: #dfe3e8;
}
.router-link-active{
  background-color: white;
}
.router-link-active p{
  border-left: 12px solid rgb(26, 92, 167);
  padding-left: 12px
}
.dashboard-content {
  border-right: 1.3px solid #dfe3e8;
  border-top: 1.3px solid #dfe3e8;
  border-bottom: 1.3px solid #dfe3e8;
}
.fill {
  border-top: 1.3px solid #dfe3e8;
  background-color: #f9fafb;
  border-right: 1.3px solid #dfe3e8;
}
p {
  margin: 0 !important;
}
.dashboard {
  height: 80vh;
}
</style>

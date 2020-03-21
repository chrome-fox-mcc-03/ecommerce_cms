<template>
  <div>
    <at-table :columns="columns1" :data="data2" pagination></at-table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      columns1: [
        {
          title: 'name product',
          key: 'name'
        },
        {
          title: 'quantity',
          key: 'age',
          sortType: 'normal'
        },
        {
          title: 'profit',
          key: 'address',
          sortType: 'normal'
        }
      ],
      data2: this.fecthHistory
    }
  },
  methods: {
  },
  computed: {
    fecthHistory () {
      return this.$store.state.history
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .modaltag {
    margin-top: 20px;
  }
</style>

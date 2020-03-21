<template>
  <div>
    <at-table :columns="columns1" :data="data2" pagination></at-table>
    <at-modal v-model="modal2" :styles="{top: '20px'}" >
      <div slot="header" style="text-align:center;">
        <span>Ready to Edit</span>
      </div>
      <div style="text-align:left;">
        <form>
          <div class="modaltag1">
            <p>Name :</p>
            <at-input v-model="name" placeholder="Please input Name Product">name</at-input>
          </div>
          <div class="modaltag">
            <p>Description :</p>
            <at-input v-model="description" placeholder="Please input Description"></at-input>
          </div>
          <div class="modaltag">
            <p>Price :</p>
            <at-input-number :min="0" v-model="price" placeholder="Please input Price"></at-input-number>
          </div>
          <div class="modaltag">
            <p>Stock :</p>
            <at-input-number :min="0" v-model="stock" placeholder="Please input Stock input"></at-input-number>
          </div>
          <div class="modaltag">
            <p>Url Image : </p>
            <at-input v-model="url" placeholder="Please input url" icon="link"></at-input>
          </div>
          <at-button style="margin-top: 20px;">submit</at-button>
        </form>
      </div>
      <div slot="footer">
        <at-button style="width:100%;" type="error" @click="closeModal2">Cancel</at-button>
      </div>
  </at-modal>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age',
          sortType: 'normal'
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: 'Operation',
          render: (h, params) => {
            return h('div', [
              h('AtButton', {
                props: {
                  size: 'small',
                  hollow: true
                },
                style: {
                  marginRight: '8px'
                },
                on: {
                  click: () => {
                    this.modal2 = true
                    // this.$Message(params.item.name)
                  }
                }
              }, 'Edit'),
              h('AtButton', {
                props: {
                  size: 'small',
                  hollow: true
                },
                on: {
                  click: () => {
                    this.$Message(params.item.address)
                  }
                }
              }, 'delete')
            ])
          }
        }
      ],
      data2: this.fecthHistory,
      modal2: false,
      name: '',
      description: '',
      price: 0,
      stock: 0,
      url: ''
    }
  },
  methods: {
    closeModal2 () {
      this.modal2 = false
    },
    start () {
      this.$Loading.start()
    },
    finish () {
      this.$Loading.finish()
    },
    error () {
      this.$Loading.error()
    },
    open3 () {
      this.$Notify({
        title: 'Here is Title',
        message: 'Here is Content~~~',
        duration: 2000
      })
    },
    open4 (message) {
      this.$Notify.error({
        message,
        duration: 2000
      })
    }
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

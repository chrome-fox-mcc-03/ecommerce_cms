<template>
  <div>
    <at-table :columns="columns1" :data="data1" pagination></at-table>
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
            <at-input :min="0" v-model="price" placeholder="Please input Price"></at-input>
          </div>
          <div class="modaltag">
            <p>Stock :</p>
            <at-input :min="0" v-model="stock" placeholder="Please input Stock input"></at-input>
          </div>
          <div class="modaltag">
            <p>Url Image : </p>
            <at-input v-model="url" placeholder="Please input url" icon="link"></at-input>
          </div>
          <at-button style="margin-top: 20px;" @click="update({name, description, price, stock, url, id})">submit</at-button>
          {{price}}
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
          title: 'Desription',
          key: 'description'
        },
        {
          title: 'Price',
          key: 'price',
          sortType: 'normal'
        },
        {
          title: 'Stock',
          key: 'stock',
          sortType: 'normal'
        },
        {
          title: 'Url_image',
          key: 'url'
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
                    this.name = params.item.name
                    this.description = params.item.description
                    this.price = +params.item.price
                    this.stock = +params.item.stock
                    this.url = params.item.url
                    this.id = params.item.id
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
                    const { id } = params.item
                    this.deleted(id)
                  }
                }
              }, 'delete')
            ])
          }
        }
      ],
      modal2: false,
      name: '',
      description: '',
      price: 0,
      stock: 0,
      url: '',
      id: 0
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
    fecthData () {
      this.$store.dispatch('fecthData')
    },
    deleted (id) {
      this.start()
      this.$store.dispatch('deleted', id)
        .then(data => {
          this.finish()
          this.open3(data.data.message)
          this.fecthData()
        })
        .catch(err => {
          this.error()
          this.open4(err.response.data.message)
        })
    },
    update (payload) {
      this.start()
      this.$store.dispatch('edit', payload)
        .then(data => {
          this.finish()
          this.closeModal2()
          this.fecthData()
        })
        .catch(err => {
          this.error()
          console.log(err.response)
        })
    },
    open3 (message) {
      this.$Notify({
        message,
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
    loading () {
      return this.$store.state.loading
    },
    message () {
      return this.$store.state.message
    },
    data1 () {
      return this.$store.state.data
    }
  },
  created () {
    this.fecthData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .modaltag {
    margin-top: 20px;
  }
</style>

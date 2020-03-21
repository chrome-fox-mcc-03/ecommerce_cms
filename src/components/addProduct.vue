<template>
  <div class="main-add">
    <at-button @click="modal2=true" type="error" >Add Product here</at-button>
    <at-modal v-model="modal2" :styles="{top: '20px'}" >
      <div slot="header" style="text-align:center;">
        <span>Ready to Add</span>
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
            <at-input type='number' v-model="price" placeholder="Please input Price"></at-input>
          </div>
          <div class="modaltag">
            <p>Stock :</p>
            <at-input :min="0" type='number' v-model="stock" placeholder="Please input Stock input"></at-input>
          </div>
          <div class="modaltag">
            <p>Url Image : </p>
            <at-input v-model="url" placeholder="Please input url" icon="link"></at-input>
          </div>
          <at-button style="margin-top: 20px;" @click="addproduct({name, description, price, stock, url})">submit</at-button>
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
  data () {
    return {
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
    addproduct (payload) {
      this.start()
      this.$store.dispatch('addProduct', payload)
        .then(data => {
          this.finish()
          this.open3('add success')
          this.closeModal2()
        })
        .catch(error => {
          this.error()
          this.open4(error.response.data.message)
        })
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
    open3 (message) {
      this.$Notify.success({
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
  }
}
</script>

<style>
  .main-add {
    padding-top: 180px;
    align-content: center;
  }
</style>

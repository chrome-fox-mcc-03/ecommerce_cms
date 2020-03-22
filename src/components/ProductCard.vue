<template>
  <div class="row pt-2 pb-2 pr-3 cards mt-2 mb-2 mr-3" @click.prevent="showDetail" style="cursor:pointer;">
    <div class="col-2 d-flex align-items-center">
        <img class="item-img" :src='img_url' alt="" srcset=""></div>
    <div class="col-10 d-flex align-items-center row">
        <div class="col-6 ml-2">
          <div class="d-flex flex-column">
              <p>{{ name }}</p>
              <small class="form-text text-muted">{{ priceParsed }}</small>
              <small class="form-text text-muted">Stock(s): 2</small>
          </div>
        </div>
        <div class="col-5 d-flex flex-column">
          <p class="btn highlighted mb-2" v-if="highlighted">Highlighted Product</p>
          <p class="btn tags">Category : {{ category || 'no category' }}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    price: Number,
    stock: Number,
    category: String,
    id: Number,
    highlighted: Boolean,
    img_url: String
  },
  computed: {
    priceParsed () {
      const priceTemp = String(this.price).split('')
      let priceParsed = ''
      for (let i = 0; i < priceTemp.length; i++) {
        if ((priceTemp.length - i) % 3 === 0 && (priceTemp.length - i) !== priceTemp.length) priceParsed += `.${priceTemp[i]}`
        else priceParsed += `${priceTemp[i]}`
      }
      return `Rp. ${priceParsed}, 00`
    }
  },
  methods: {
    showDetail () {
      this.$store.commit('CHANGE_SELECTED_ID', this.id)
    }
  }
}
</script>

<style>
.tags {
  padding: 0 10px;
  font-size: 12px;
  font-weight: bold;
}
.highlighted {
  cursor: default;
  background-color: rgb(56, 116, 247);
  color: white;
  padding: 0 10px;
  font-size: 12px;}
.cards {
  border: 1.3px solid #dfe3e8;
  border-radius: 15px;
  transition: background-color 0.4s;
}
.cards:hover {
  background-color: rgb(236, 236, 236) ;
}
.item-img {
  border-radius: 10px;
}
</style>

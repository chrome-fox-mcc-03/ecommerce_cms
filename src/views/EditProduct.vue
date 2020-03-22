<template>
  <div class="d-flex container pl-5 pr-5 pt-4">
      <div class="d-flex flex-column align-items-center flex-grow-1">
        <h2 class="display-5">Product id: {{id}}</h2>
        <form class="mt-4 flex-grow-1 pb-4 d-flex flex-column">
          <div class="form-group">
            <input type="text" class="form-control pt-4 pb-4" placeholder="Name" v-model="dataProduct.name">
          </div>
          <div class="form-row">
            <div class="col">
              <input type="number" class="form-control pt-4 pb-4" placeholder="Price" v-model="dataProduct.price">
            </div>
            <div class="col">
              <input type="number" class="form-control pt-4 pb-4" placeholder="Stock" v-model="dataProduct.stock">
            </div>
          </div>
          <div class="form-row pb-3">
            <div class="form-row img-row pb-3 pt-3">
            <div class="col-4 d-flex">
              <img :src="dataProduct.img_url" alt="" style="width: 12rem;">
            </div>
            <div class="custom-file col-4">
              <small>Image url (paste the img link here)</small>
              <input type="text" class="form-control pt-4 pb-4" v-model="imgUrlShow">
            </div>
            <div class="col-4 d-flex align-items-end justify-content-end flex-column">
              <small>Category:</small>
              <input class="pl-2" type="text" list="cats" v-model="dataProduct.category" placeholder="Type to add new category"/>
              <datalist id="cats">
                <option v-for="(category, i) in categoryList.data" :key="i" :value="category" ></option>
              </datalist>
            </div>
          </div>
          </div>
          <div class="form-group">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Description" v-model="dataProduct.description"></textarea>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" v-model="dataProduct.highlighted">
            <label class="form-check-label" for="exampleCheck1">Highlight this product!</label><br>
            <small>Highlighted product will be shown on your banner.</small>
          </div>
          <div class="d-flex align-self-end justify-self-end mb-4" style="margin-top: auto">
            <button type="submit" class="btn btn-primary pt-1 pb-1 pr-4 pl-4 mr-4" @click.prevent="editProduct">Edit</button>
            <a type="submit" class="pt-1 pb-1 pr-4 pl-4 ml-4" v-if="!confirmation" @click.prevent="confirm"><img src="https://cdn4.iconfinder.com/data/icons/linecon/512/delete-512.png" alt="" style="width:2rem"></a>
            <a type="submit" class="pt-1 pb-1 pr-4 pl-4 ml-4" v-if="confirmation"  @click.prevent="deleteProduct">Confirm?</a>
          </div>
        </form>
      </div>
  <loading-now v-if="nowLoading"></loading-now>
  </div>
</template>

<script>
import LoadingNow from '../components/LoadingNow'
export default {
  data () {
    return {
      confirmation: false
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    dataProduct () {
      return this.$store.state.selectedProduct
    },
    nowLoading () {
      return this.$store.state.nowLoading
    },
    categoryList () {
      return this.$store.state.categoryList
    },
    imgUrlShow: {
      get: function () {
        const placeholderImg = 'https://2x5ito1uusjd19czwpsrbt7c-wpengine.netdna-ssl.com/wp-content/themes/total-child-theme/assets/images/common/image-placeholder.png'
        if (this.imgUrl === placeholderImg) {
          return 'Default Picture'
        } else {
          return this.imgUrl
        }
      },
      set: function (newValue) {
        const placeholderImg = 'https://2x5ito1uusjd19czwpsrbt7c-wpengine.netdna-ssl.com/wp-content/themes/total-child-theme/assets/images/common/image-placeholder.png'
        if (!newValue) {
          this.$store.state.selectedProduct.img_url = placeholderImg
          this.imgUrl = placeholderImg
        } else {
          this.$store.state.selectedProduct.img_url = newValue
          this.imgUrl = newValue
        }
      }
    }
  },
  created () {
    this.$store.dispatch('getProduct', this.$route.params.id)
  },
  methods: {
    editProduct () {
      this.$store.dispatch('editProduct')
      this.$store.dispatch('fetchCategories')
    },
    confirm () {
      this.confirmation = !this.confirmation
    },
    deleteProduct () {
      this.$store.dispatch('deleteProduct', this.$route.params.id)
    }
  },
  components: {
    LoadingNow
  }
}
</script>

<style>
</style>

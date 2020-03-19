<template>
  <div>
    <!-- update -->
    <div>
      <b-modal id="modal-2" ref="modal-2-ref" title="Update Product">
        <UpdateProduct :idProduct="idProduct" @closeModal="closeModal" />
        <template v-slot:modal-footer>
          <div class="w-100 h-auto"></div>
        </template>
      </b-modal>
    </div>

    <!-- delete -->
    <div>
      <b-modal id="modal-3" ref="modal-3-ref" title="Delete Product">
        <DeleteProduct :idProduct="idProduct" @closeModal="closeModal" />
        <template v-slot:modal-footer>
          <div class="w-100 h-auto"></div>
        </template>
      </b-modal>
    </div>

    <!-- show image -->
    <div>
      <b-modal id="modal-4" ref="modal-4-ref" :title="currentClickImageName">
        <ShowImage :imageLink="imageLink" @closeModal="closeModal" />
        <template v-slot:modal-footer>
          <div class="w-100 h-auto"></div>
        </template>
      </b-modal>
    </div>

    <!-- table -->
    <b-table
      :items="items"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      responsive="sm"
    >
      <template v-slot:cell(Stock)="data">{{printStock(data.value)}}</template>
      <template v-slot:cell(Price)="data">{{printPrice(data.value)}}</template>

      <template v-slot:cell(Image)="data">
        <a @click="showImage(data.value, items[data.index].Name)" class="image-product">
          <i class="fas fa-images"></i>
          <small class="text-image">Show</small>
        </a>
      </template>

      <template v-slot:cell(id)="data">
        <button class="btn btn-outline-primary" @click.prevent="updateProduct(data.value)">
          Update
        </button> |
        <button class="btn btn-outline-danger" @click.prevent="deleteProduct(data.value)">
          Delete
        </button>
      </template>
    </b-table>

    <div>
      Sorting By:
      <b>{{ sortBy }}</b>, Sort Direction:
      <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
    </div>
  </div>
</template>

<script>
import UpdateProduct from './UpdateProduct.vue';
import DeleteProduct from './DeleteProduct.vue';
import ShowImage from './ShowImage.vue';
export default {
  data() {
    return {
      sortBy: 'age',
      sortDesc: false,
      fields: [
        { key: 'Name', sortable: true },
        { key: 'Image', sortable: true },
        { key: 'Price', sortable: true },
        { key: 'Stock', sortable: true },
        { key: 'id', label: 'Options' },
      ],
      idProduct: '',
      imageLink: '',
      currentClickImageName: ''
    };
  },
  components: {
    UpdateProduct,
    DeleteProduct,
    ShowImage
  }
  ,
  methods: {
    fetchData() {
      this.$store.dispatch('fetchProduct')
        .then(({ data }) => {
          console.log(data)
          this.$store.commit('SET_LOADING', false);
          this.$store.commit('SET_ERROR_STATUS', false);
          this.$store.commit('SET_ITEMS', data.data);
        })
        .catch(({ response }) => {
          this.$store.commit('SET_LOADING', false);
          this.$store.commit('SET_ERROR_MESSAGE', response.data.message);
          if (response.status === 401) {
            this.$router.push('/');
            this.$store.commit('LOGOUT');
            localStorage.removeItem("access_token");
          }
        });
    },
    deleteProduct(id) {
      this.$refs['modal-3-ref'].show();
      this.idProduct = id;
    },
    updateProduct(id) {
      this.idProduct = id;
      this.$refs['modal-2-ref'].show();
    },
    closeModal() {
      this.$refs['modal-2-ref'].hide();
      this.$refs['modal-3-ref'].hide();
      this.$refs['modal-4-ref'].hide();
    },
    printStock(value) {
      if (Number(value) === 1)
        return `${value} item`;
      else
        return `${value} items`;
    },
    printPrice(value) {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value);
    },
    showImage(link, name) {
      this.imageLink = link;
      this.currentClickImageName = name;
      this.$refs['modal-4-ref'].show();
    }
  },
  computed: {
    items() {
      const products = [];
      this.$store.state.items.forEach(el => {
        products.push({
          Name: el.name,
          Image: el.image_url,
          Price: el.price,
          Stock: el.stock,
          id: el.id
        });
      });
      return products;
    }
  },
  created() {
    this.fetchData();
  }
}
</script>

<style >
.image-product:hover,
.fa-edit:hover,
.fa-trash-alt:hover {
  cursor: pointer;
}
.fa-images,
.text-image,
.fa-edit {
  color: rgb(61, 61, 223);
}
.fa-trash-alt {
  color: red;
}
</style>
<template>
  <div class="container">
    <div class="container-fluid">
      <h1>Edit Product</h1>
      <hr />
      <form id="contactForm" @submit.prevent="editProduct">
        <input type="hidden" class="form-control" name="Introduction"
          value="This email was sent from www.awebsite.com" />
        <input type="hidden" class="form-control" name="subject"
          value="Awebsite.com Contact Form" />
        <input type="hidden" class="form-control" name="to" />
        <div class="form-row">
          <div class="col-md-6">
            <div id="successfail"></div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-12 col-md-6" id="message">
            <h2 class="h4"> Product&#39;s {{ product.id }} detail<small></small></h2>
            <div class="form-group"><label for="from-name">Name</label>
              <input v-model="productData.name" type="text" class="form-control" name="name"
                placeholder="product&#39;s name" />
              <div class="input-group">
                <div class="input-group-prepend"></div>
              </div>
            </div>
            <div class="form-group"><label for="from-email">Image</label>
              <div class="input-group">
                <div class="input-group-prepend"><span class="input-group-text"><i
                      class="fas fa-link"></i></span></div>
                <input v-model="productData.image_url" type="text" class="form-control"
                  id="from-email" name="email" required placeholder="Image Url" />
              </div>
            </div>
            <div class="form-row">
              <div class="col-12 col-sm-6 col-md-12 col-lg-6">
                <div class="form-group"><label for="from-phone">Price</label>
                  <div class="input-group">
                    <div class="input-group-prepend"><span class="input-group-text"><i
                          class="fas fa-dollar-sign"></i></span></div>
                    <input v-model="productData.price" type="number" class="form-control"
                      id="from-phone" name="phone" required placeholder="Price" />
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-12 col-lg-6">
                <div class="form-group"><label for="from-calltime">Stock</label>
                  <div class="input-group">
                    <div class="input-group-prepend"><span class="input-group-text"><i
                          class="fas fa-box-open"></i></span></div>
                    <input v-model="productData.stock" type="number" class="form-control"
                      placeholder="Stock" />
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group"><label for="from-calltime">Category</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-list"></i></span>
                </div>
                <select v-model="productData.CategoryId" class="form-control" id="from-calltime"
                  name="call time">
                  <optgroup label="Category List">
                    <option v-for="category in categories" :key="category.id" :value="category.id">
                      {{ category.name }}</option>
                  </optgroup>
                </select>
              </div>
            </div>
            <div class="form-group"><label for="from-comments">Description</label>
              <textarea v-model="productData.description" class="form-control" id="from-comments"
                name="comments" placeholder="Enter Comments" rows="5"></textarea></div>
            <div class="form-group">
              <div class="form-row">
                <div class="col"><button class="btn btn-primary btn-block" type="reset"><i
                      class="fa fa-undo"></i> Reset</button></div>
                <div class="col"><button class="btn btn-primary btn-block" type="submit">Submit <i
                      class="fa fa-chevron-circle-right"></i></button></div>
              </div>
            </div>
            <hr class="d-flex d-md-none" />
          </div>
          <div class="col mt-5">
            <div class="dashed_upload">
              <div class="wrapper">
                <div class="drop">
                  <div class="cont"><i class="fas fa-cloud-upload-alt"></i>
                    <div class="tit">
                      Drag &amp; Drop
                    </div>
                    <div class="desc">
                      or
                    </div>
                    <div class="browse">
                      click here to browse
                    </div>
                  </div><output id="list"></output><input id="files" multiple name="files[]"
                    type="file" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditProduct',
  data() {
    return {
      productData: {
        id: this.product.id,
        name: this.product.name,
        image_url: this.product.image_url,
        price: this.product.price,
        stock: this.product.stock,
        description: this.product.description,
        CategoryId: this.product.CategoryId,
      },
    };
  },
  props: ['product'],
  methods: {
    // kasih template loading nanti sebelum form / image muncul
    editProduct() {
      const loader = this.$loading.show({
        // Optional parameters
        container: null,
        canCancel: true,
        onCancel: this.onCancel,
      });
      this.$store.dispatch('editProduct', this.productData)
        .then(() => {
          loader.hide();
          this.$toasted.show('Product Edited', {
            theme: 'outline',
            position: 'top-right',
            duration: 3000,
          });
        })
        .catch((err) => {
          loader.hide();
          this.$toasted.show(err.response.data.errors[0], {
            theme: 'bubble',
            position: 'top-right',
            duration: 3000,
          });
        });
    },
  },
  created() {
    this.$store.dispatch('getCategory');
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
};
</script>

<style scoped>
*, *:before, *:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

input:focus, select:focus, textarea:focus, button:focus {
  outline: none;
}

.drop {
  width: 90%;
  height: 220px;
  border: 3px dashed #DADFE3;
  border-radius: 15px;
  overflow: hidden;
  text-align: center;
  background: transparent;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
  margin-top: 0px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.drop .cont {
  width: 500px;
  height: 170px;
  color: #8E99A5;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.drop .cont i {
  font-size: 40px;
  color: #787e85;
  position: relative;
}

.drop .cont .tit {
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 300;
}

.drop .cont .desc {
  color: #787e85;
  font-size: 18px;
}

.drop .cont .browse {
  margin: 10px 25%;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  background: #00c993;
}

.drop input {
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: red;
  opacity: 0;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

#list {
  width: 100%;
  text-align: left;
  position: absolute;
  left: 0;
  top: 0;
}

.dashed_upload {
  height: 200px;
}

</style>

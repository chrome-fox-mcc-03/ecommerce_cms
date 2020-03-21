<template>
  <div class="container">
    <div class="container-fluid">
      <h1>Edit category</h1>
      <hr />
      <form id="contactForm" @submit.prevent="editCategory">
        <div class="form-row">
          <div class="col-12 col-md-6" id="message">
            <h2 class="h4"> Category&#39;s {{ category.id }} detail<small></small></h2>
            <div class="form-group"><label for="from-name">Name</label>
              <input v-model="categoryData.name" type="text" class="form-control" name="name"
                placeholder="category&#39;s name" />
              <div class="input-group">
                <div class="input-group-prepend"></div>
              </div>
            </div>
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
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditCategory',
  props: ['category'],
  data() {
    return {
      categoryData: {
        id: this.category.id,
        name: this.category.name,
      },
    };
  },
  methods: {
    editCategory() {
      const loader = this.$loading.show({
        // Optional parameters
        container: null,
        canCancel: true,
        onCancel: this.onCancel,
      });
      this.$store.dispatch('editCategory', this.categoryData)
        .then(() => {
          loader.hide();
          this.$toasted.show('Category Edited', {
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
    console.log(this.category);
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

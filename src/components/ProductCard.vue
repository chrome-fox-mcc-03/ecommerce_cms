<template>
  <div>
    <v-layout>
      <v-flex xs8 offset-xs2 sm6 offset-sm3 md3 offset-md3>
        <v-card>
          <v-img
            contain
            class="white--text"
            height="250px"
            src="https://pngimg.com/uploads/men_shoes/men_shoes_PNG7475.png"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <!--                   <span class="headline"></span> -->
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <div class="mx-5">
              <span class="title blue--text">{{title}}</span>
              <br />
              <v-rating
                readonly
                small
                dense
                background-color="orange"
                color="orange"
                v-model="rating"
              ></v-rating>
              <span class="title">${{display_price}}</span>
              <del class>${{price}}</del>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn
              large
              round
              depressed
              :color="color"
              class="mx-auto"
              @click="colchange"
            >ADD TO CART</v-btn>
          </v-card-actions>
          <br />
        </v-card>
      </v-flex>
      <v-flex xs8 offset-xs2 sm6 offset-sm3 md3 offset-md3>
        <v-card>
          <v-img
            contain
            class="white--text"
            height="250px"
            src="https://pngimg.com/uploads/men_shoes/men_shoes_PNG7475.png"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <!-- <span class="headline"></span> -->
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <div class="mx-5">
              <span class="title blue--text">{{title}}</span>
              <br />
              <span class="title">${{display_price}}</span>
              <del class>${{price}}</del>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn
              large
              round
              depressed
              :color="color"
              class="mx-auto"
              @click="colchange"
            >ADD TO CART</v-btn>
          </v-card-actions>
          <br />
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  data() {
    return {
      title: 'Black Shoes for Men',
      rating: 3,
      price: 57.0,
      reduc: 0.5,
      color: 'grey lighten-2'
    };
  },
  computed: {
    display_price() {
      return this.price * this.reduc;
    }
  },
  methods: {
    colchange() {
      this.color = this.color === 'blue' ? 'grey lighten-2' : 'blue';
    }
  }
};
</script>

<style scoped></style>>

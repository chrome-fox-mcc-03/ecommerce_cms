<template>
    <div>
        <NavbarPanel/>
        <div class="main-board">
            <div class="row d-flex justify-content-between categories">
                <div class="col-6 text-center">
                    <img src="https://www.vuescript.com/wp-content/uploads/2018/11/Pure-CSS-Donut-Charts-For-Vue.js.png" class="img-fluid" alt="Responsive image">
                </div>

                <div class="col-6">
                    <div class="row  d-flex justify-content-center align-item-center option m-3">
                        <img class="image-left" src="../assets/total.png" alt="" >
                        <router-link :to="`/`" class="option-text" style="color: #AD6A6C;  padding-top: 73px; padding-left:50px;">Total</router-link>
                    </div>
                    <div class="row  d-flex justify-content-center align-item-center option m-3">
                        <router-link :to="`/products`" class="option-text" style="color: #CE848F; padding-top: 35px; padding-right:100px;">View All<br> Products</router-link>
                        <img class="image-right" src="../assets/products.png" alt="" >
                    </div>
                    <div class="row  d-flex justify-content-center align-item-center option m-3">
                        <img class="image-left" src="../assets/add.png" alt="" >
                        <router-link :to="`/add`" class="option-text" style="color: #996888; padding-top: 73px;  padding-left:22px;">Add <br> Products</router-link>
                    </div>
                </div>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>
import NavbarPanel from '../components/NavbarPanel'

export default {
  name: 'AdminPanel',
  components: {
    NavbarPanel
  }
}
</script>

<style>

</style>

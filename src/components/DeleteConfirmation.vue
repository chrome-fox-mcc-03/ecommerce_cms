<template>
    <div class="card-delete">
        <!-- <div class="card" style="width: 25rem;"> -->
            <!-- <div class="card-body"> -->
                <h5 style=" font-size: 30px; text-align:center;">Are you sure deleting this item?</h5>
                <button @click="remove" type="button" class="button" style="height: 47px;border-radius: 10px;margin: 19px; width: 337px; color: white; padding:3px;">Yes</button>
                <button @click="``" class="button"  style="height: 47px;border-radius: 10px; ;margin: 19px; width: 337px; color: white; padding:3px;">No</button>
            <!-- </div> -->
        <!-- </div> -->
    </div>
</template>

<script>
import axiosCMS from '../config/index'

export default {
  name: 'DeleteConfirmation',
  methods: {
    remove () {
      axiosCMS({
        method: 'DELETE',
        url: `/products/${this.$route.params.id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          this.$router.push('/products')
        })
        .catch(({ response }) => {
          console.log(response)
        })
    }
  }
}
</script>

<style>

</style>

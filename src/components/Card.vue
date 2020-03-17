<template>
    <div class="card mr-md-3" style="width: 18rem;">
        <img class="card-img-top" :src="product.image_url" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <a href="#" class="btn btn-primary">View Detail</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: ["product"]
}
</script>

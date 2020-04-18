<template>
    <div class="product-item">
        <img src="https://placeimg.com/300/200/nature" alt="" />
        <div class="desc">
            <h1>{{ item.product_name }}</h1>
            <p>{{ item.price }}</p>
            <button
                class="buy-btn"
                name="buy-btn"
                @click="$emit('add-product', item)"
            >
                Купить
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {type: Object}
    },
};
</script>

<style>
</style>
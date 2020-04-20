<template>
    <div class="cart-item">
        <img src="https://placeimg.com/100/80/nature" alt="photo">
        <div class="product-desc">
            <p class="product-title">
                {{ item.product_name }}
            </p>
            <p class="product-quantity">
                {{ item.quantity }}
            </p>
            <p class="product-single-price">
                {{ item.price }}
            </p>
        </div>
        <div class="right-block">
            <button name="del-btn" class="del-btn" @click="$emit('remove-product', item)">
                &times;
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {type: Object}
    }
};
</script>

<style>
</style>
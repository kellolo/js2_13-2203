<template>
    <div class="cart-block">
        <div class="d-flex">
            <strong class="d-block">Всего товаров</strong>
            <div id="quantity">{{ countGoods }}</div>
        </div>
        <hr />
        <div class="cart-items">
            <item v-for="item of items" :key="item.id_product" :item="item" @remove-product="removeProductFromCart"/>
        </div>
        <hr />
        <div class="d-flex">
            <strong class="d-block">Общая ст-ть:</strong>
            <div id="price">{{ amount }}</div>
        </div>
    </div>
</template>

<script>
import item from "../components/cartItem.vue";

export default {
    components: { item },
    props: [ 'items' ],
    data() {
        return {

        }
    },
    methods: {
        removeProductFromCart(item) {
            this.$emit('remove-product', item)
        }
    },
    computed: {
        amount() {
            return this.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
        },
        countGoods() {
            return this.items.reduce((acc, item) => acc + item.quantity, 0)
        }
    },
    mounted() {

    }
};
</script>

<style>
</style>
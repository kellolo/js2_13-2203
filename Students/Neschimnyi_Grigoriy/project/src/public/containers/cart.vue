<template>
        <div class="cart-block">
            <div v-if="items.length != 0">
                <div class="d-flex">
                    <strong class="d-block">Всего товаров</strong>
                    <div id="quantity">{{ totalItems }}</div>
                </div>
                <hr />
                <div class="cart-items">
                    <item v-for="item of items" :key="item.product_id" :item="item" :type="'cart'"/>
                </div>
                <hr />
                <div class="d-flex">
                    <strong class="d-block">Общая ст-ть:</strong>
                    <div id="price">{{ totalPrice }}</div>
                </div>
            </div>
            <div v-else class="d-flex">
                <strong>Here will be your products!</strong>
            </div>
        </div>
</template>

<script>
import item from "../components/list_item.vue";

export default {
    components: { item },
    data() {
        return {
                totalPrice: 0,
                totalItems: 0,
                items: []
        }
    },
    methods: {
        deleteClickHandler(item) {
            if (item.quantity == 1) {
                this.items.splice(this.items.indexOf(item), 1)
            } else if (item.quantity > 1) {
                item.quantity--
            }
            this.totalItems--
            this.totalPrice -= item.price
        }
    },
}
</script>

<style>
</style>
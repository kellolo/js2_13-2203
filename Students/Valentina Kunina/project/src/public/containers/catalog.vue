<template>
    <div class="products">
        <item v-for="item of items" :key="item.id_product" :item="item" @add-product="addProductToCart"/>
    </div>
</template>

<script>
import item from "../components/catalogItem.vue";

export default {
    components: { item },
    props: {
        items: { type: Array }
    },
    data() {
        return {};
    },
    methods: {
        addProductToCart(item) {
            this.$emit('add-product', item);
        }
    },
    mounted() {}
};
</script>

<style>
</style>
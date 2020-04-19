<template>
    <div class="products">
        <item v-for="item of items" :key="item.product_id" :item="item" :type="'catalog'"/>
    </div>
</template>

<script>
import item from "../components/list_item.vue";

export default {
    components: { item },
    data() {
        return {
            items: [], // динамичный массив, изменяющийся полем поиска
            defaultItems: [], // статичный массив. Если в поиске пусто, то items заново сгенерируется из этого массива
            API_url: "./src/public/json/catalog.json"
        }
    },
    methods: {
        buyClickHandler(item) {
            if (!this.$parent.$refs.cart.items.includes(item)) {
                this.$parent.$refs.cart.items.push(item)
            } else {
                console.log(this.$parent.$refs.cart.items)
                item.quantity++
            }
            this.$parent.$refs.cart.totalItems++
            this.$parent.$refs.cart.totalPrice += Number(item.price)
        }
    },
    mounted() {
        this.$parent.getData(this.API_url)
            .then(data => (this.defaultItems = data))
            .then(data => (this.items = data));
    }
}
</script>

<style>
</style>
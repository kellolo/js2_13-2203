<template>
  <div class="cart-block ">
    <div class="d-flex">
        <strong class="d-block">Всего товаров</strong> <div id="quantity"></div>
    </div>
    <hr>
    <div class="cart-items">
        <item v-for="item of items" :key="item.id_product" :item="item" :type="'cart'"/>
    </div>
    <hr>
    <div class="d-flex">
        <strong class="d-block">Общая ст-ть:</strong> <div id="price"></div>
    </div>
</div>
</template>

<script>
import item from '../components/list_item.vue'
export default {
    components: { item },
    data() {
        return {
            items: [],
            url: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json',
        }
    },
    methods: {
        removeItem() {
            
        }
    },
    mounted() {
        this.$parent.get(this.url)
        .then(data => this.items = data.contents)
    }
}
</script>

<style>
</style>
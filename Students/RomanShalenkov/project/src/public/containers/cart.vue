<template>
    <div class="cart-block ">
        <div class="d-flex">
            <strong class="d-block">Всего товаров</strong> <div id="quantity"></div>
        </div>
        <hr>
        <div class="cart-items">
            <!--item /-->
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
            }
        },
        methods: {
        },
        mounted() {
            
        }
    }
</script>

<style>
</style>
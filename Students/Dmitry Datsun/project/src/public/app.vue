<template>
    <div>
    <header>
        <div class="logo">E-shop</div>
        <div class="cart">
            <form action="#" class="search-form">
                <input type="text" class="search-field">
                <button class="btn-search">
                    <i class="fas fa-search"></i>
                </button>
            </form>
            <button class="btn-cart" v-on:click="isVisibleCart=!isVisibleCart">Cart</button>
            <cart />
        </div>
    </header>
    <main>
        <button class="buy-btn" name="new-btn">Создать</button>
        <catalog />
    </main>
    </div>
</template>

<script>
import cart from './containers/cart.vue'
import catalog from './containers/catalog.vue'

export default {
    components: {cart, catalog},
    data() {
        return {
            isVisibleCart: false,
        }
    },
    methods: {
        getData(url) {
            return fetch(url).then(d => d.json())
        },
        getChild(tag) {
            return this.$children.find(x => x.$options._componentTag == tag)
        },
    }
}
</script>

<style>

</style>
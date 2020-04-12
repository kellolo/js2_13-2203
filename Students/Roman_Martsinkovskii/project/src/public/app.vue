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
            <button class="btn-cart">Cart</button>
            <cart />
        </div>
    </header>
    <main>
        <catalog />
    </main>
  </div>
</template>

<script>
import cart from './containers/cart.vue'
import catalog from './containers/catalog.vue'
import template from './containers/temp.vue'
export default {
    components: { cart, catalog },
    methods: {
        get(url) {
            return fetch(url).then(d => d.json())
        }
    }
}
</script>

<style lang="sass">
</style>
<template>
  <div>
    <header>
        <div class="logo">E-shop</div>
        <div class="cart">
            <search-component @search="$refs.catalog.filter"/>
            <button class="btn-cart">Cart</button>
            <cart ref="cartRef"/>
        </div>
    </header>
    <main>
        <catalog ref="catalog" />
    </main>
  </div>
</template>

<script>
import cart from './containers/cart.vue'
import catalog from './containers/catalog.vue'
import searchComponent from './components/searchComponent.vue'

export default {
    components: { cart, catalog, searchComponent },
    // components: { cart: cart, catalog: catalog, tagName: componentName },
    methods: {
        get(url) {
            return fetch(url).then(d => d.json())
        }
    }
}
</script>

<style lang="sass">

</style>

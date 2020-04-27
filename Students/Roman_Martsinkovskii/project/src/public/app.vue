<template>
  <div :class="{
      big: big,
      small: !big
  }">
    <header class="d-flex">
        <div class="logo">E-shop</div>
        <div class="cart">
            <form action="#" class="search-form">
                <input type="text" class="search-field">
                <button class="btn-search">
                    <i class="fas fa-search"></i>
                </button>
            </form>
            <button class="btn-cart">Cart</button>
            <cart ref="cartRef"/>
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
import searchComponent from './components/searchComponent.vue'

export default {
    data() {
        return {
            big: false
        }
    },
    components: { cart, catalog, searchComponent },
    // components: { cart: cart, catalog: catalog, tagName: componentName },
    methods: {
        get(url) {
            return fetch(url).then(d => d.json())
        },
        post(url, obj) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                    },
                body: JSON.stringify(obj)
            }).then(d => d.json())
        },
        delete(url) {
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                    }
            }).then(d => d.json())
        },
        put(url, obj) {
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                    },
                body: JSON.stringify(obj)
            }).then(d => d.json())
        }
    }
}
</script>

<style>
    .small {
        font-size: 1em
    }
    .big {
        font-size: 3em
    }
</style>
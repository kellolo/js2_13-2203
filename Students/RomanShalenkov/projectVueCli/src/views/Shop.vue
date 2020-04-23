<template>
  <div>
    <header class="d-flex">
        <div class="logo">E-shop</div>
        <div class="cart">
            <search-component @search="$refs.catalog.filter()"/>
            <button class="btn-cart" @click="show=!show">Cart</button>
            <cart ref="cartRef"/>            
        </div>
    </header>
    <main>
        <catalog ref="catalog" />
    </main>
  </div>
</template>

<script>
import cart from '../containers/cart.vue';
import catalog from '../containers/catalog.vue';
import searchComponent from '../components/searchComponent.vue';

export default {
    components: { cart, catalog, searchComponent },
    data() {
        return {
            show: true
        };
    },
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
                    },
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

</style>
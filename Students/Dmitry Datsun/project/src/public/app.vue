<template>
    <div>
    <header class="d-flex">
        <div class="logo">E-shop</div>
        <div class="cart">
            <search-comp @search="$refs.catalogRef.filter()" />
            <button class="btn-cart" v-on:click="isVisibleCart=!isVisibleCart">Cart</button>
            <cart ref="cartRef" />
        </div>
    </header>
    <main>
        <button class="buy-btn" name="new-btn">Создать</button>
        <catalog ref="catalogRef" />
    </main>
    </div>
</template>

<script>
import cart from './containers/cart.vue'
import catalog from './containers/catalog.vue'
import searchComp from './components/searchComp.vue'

export default {
    components: {cart, catalog, searchComp},
    data() {
        return {
            isVisibleCart: false,
        }
    },
    methods: {
        getData(url) {
            return fetch(url)
            .then(d => d.json())
        },
        postData(url, obj) {
            return fetch(url, {
                method: 'POST',
                headers: {"Content-Type": 'application/json'},
                body: JSON.stringify(obj)
            })
            .then(d => d.json())
        },
        deleteData(url) {
            return fetch(url, {
                method: 'DELETE',
                headers: {"Content-Type": 'application/json'}
            })
            .then(d => d.json())
        },
        putData(url, obj) {
            return fetch(url, {
                method: 'PUT',
                headers: {"Content-Type": 'application/json'},
                body: JSON.stringify(obj)
            })
            .then(d => d.json())
        },
    }
}
</script>

<style>

</style>
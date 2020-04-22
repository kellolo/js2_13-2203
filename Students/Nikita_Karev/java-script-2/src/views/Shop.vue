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
                <button class="btn-cart" @click="showCart = !showCart">Cart</button>
                <!-- //cart-block -->
                <cart ref="cart" v-show="showCart"/>
            </div>
        </header>
        <main>
            <!-- //catalog -->
            <catalog ref="catalog"/>
        </main>
    </div>
</template>

<script>
import cart from '../containers/cart.vue'
import catalog from '../containers/catalog.vue'

export default {
    components: { cart, catalog },
        data: function() {
            return { 
                showCart: false
            }
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
    },
    mounted() {}   
}
</script>
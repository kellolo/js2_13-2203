<template>
    <div>
        <header>
            <div class="logo">E-shop</div>
            <div class="cart">
                <search />
                <button class="btn-cart" @click="showCart ? showCart = false : showCart = true">Cart</button>
                <cart ref="cart" v-show="showCart" />
            </div>
        </header>
        <main>
            <catalog ref="catalog" />
            <button id="plus-btn" @click="showModal ? showModal = false : showModal = true"><img src="http://cdn.onlinewebfonts.com/svg/img_447722.png" alt=""></button>
            <modal v-show="showModal"/>
        </main>
    </div>
</template>

<script>
import cart from "./containers/cart.vue";
import modal from "./containers/modal.vue";
import search from "./components/search.vue";
import catalog from "./containers/catalog.vue";

export default {
    components: { cart, modal, search, catalog },
    data() {
        return {
            showCart: false, // отображение корзины по кнопке
            showModal: false
        }
    },
    methods: {
        getData(url) {
            return fetch(url).then(d => d.json());
        }
    }
}
</script>

<style>
#plus-btn {
    position: fixed;
    width: 45px;
    height: 45px;
    border-radius: 50px;
    padding: 0;
    right: 15px;
    bottom: 15px;
    border: none;
}
</style>
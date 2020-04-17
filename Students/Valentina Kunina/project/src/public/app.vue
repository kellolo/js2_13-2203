<template>
    <div>
        <header>
            <div class="logo">E-shop</div>
            <div class="cart">
                <form action="#" class="search-form">
                    <input type="text" class="search-field" />
                    <button class="btn-search">
                        <i class="fas fa-search"></i>
                    </button>
                </form>
                <button class="btn-cart" @click="showCart">Cart</button>
                <cart :items="cartItems" v-if="show" @remove-product="removeProductFromCart"/>
            </div>
        </header>
        <main>
            <catalog :items="catalogItems" @add-product="addProductToCart" />
        </main>
    </div>
</template>

<script>
import cart from "./containers/cart.vue";
import catalog from "./containers/catalog.vue";

const catalogUrl = "src/public/json/catalog.json";
const cartUrl = "src/public/json/getCart.json";

export default {
    data() {
        return {
            show: false,
            catalogItems: [],
            cartItems: []
        };
    },
    components: { cart, catalog },
    methods: {
        getCatalog() {
            this.getData(catalogUrl).then(data => (this.catalogItems = data));
        },
        getCart() {
            this.getData(cartUrl).then(
                data => (this.cartItems = data.contents)
            );
        },
        getData(url) {
            return fetch(url).then(data => data.json());
        },
        showCart(cartBlock) {
            this.show = !this.show;
        },
        addProductToCart(item) {
            const findItem = this.cartItems.find(
                el => el.id_product === item.id_product
            );
            if (findItem) {
                findItem.quantity++;
            } else {
                this.cartItems.push({ ...item, quantity: 1 });
            }
        },
        removeProductFromCart(item) {
            const findItem = this.cartItems.find(
                el => el.id_product === item.id_product
            );
            if (findItem.quantity > 1) {
                findItem.quantity--;
            } else {
                this.cartItems = this.cartItems.filter((item) => item.id_product != findItem.id_product);
            }
        }
    },
    computed: {},
    mounted() {
        this.getCatalog(), this.getCart();
    }
};
</script>

<style>
</style>
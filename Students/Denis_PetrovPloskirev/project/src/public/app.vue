<template>
  <div>
    <header>
        <div class="logo">E-shop</div>
        <div class="cart">
            <search-block ref="search"/>
            <button class="btn-cart" @click="showCart = !showCart">Cart</button>
            <cart ref="cart"v-show="showCart"/>
        </div>
    </header>
    <main>
        <catalog ref="catalog" v-show="catalogIsLoaded"/>
        <admin-panel ref="adminPanel" v-show="!catalogIsLoaded || adminPanelIsShown"/>
    </main>
  </div>
</template>

<script>
import cart from './containers/cart.vue'
import catalog from './containers/catalog.vue'
import adminPanel from './containers/adminPanel.vue'
import searchBlock from './containers/filter.vue'

export default {
    components: { cart, catalog, adminPanel, searchBlock },
    // components: { cart: cart, catalog: catalog, tagName: componentName },
    data: function() {
        return {
            catalogIsLoaded: false,
            adminPanelIsShown: true,
            showCart: false
        }
    },
    methods: {
        get(url) {
            return fetch(url).then(d => d.json())
        },
        addItem(item) {
            this.get('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/addToBasket.json')
         .then((response) => {
           if (response.result == 1) {
             let id = +item.id_product
             let find = this.$refs.cart.items.find(elem => elem.id_product === id)
             if (find) {
               find.quantity++
             } else {
               this.$refs.cart.items.push({...item, quantity: 1})
             }
           }
         })
        },
        newItem() {
            this.catalogIsLoaded = true
            let item = {}
            item.id_product = +this.$refs.adminPanel.id
            item.price = +this.$refs.adminPanel.price
            item.product_name = this.$refs.adminPanel.name
            this.$refs.catalog.items.push(item)
        }
    }
}
</script>

<style lang="sass">

</style>

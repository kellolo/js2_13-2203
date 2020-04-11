<template>
  <div>
    <header>
        <div class="logo">E-shop-vue</div>
        <div class="cart" id="cart">
     <form action="#" class="search-form">     
         <input type="text" class="search-field" v-model="str">
         <button class="btn-search" type="submit">
             <i class="fas fa-search"></i>
         </button>
     </form>
        <button class="btn-cart"  @click="showCart()">Cart</button>            
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


export default {
    components: { cart, catalog },
    // равнозначное components: { cart: cart, catalog: catalog, tagName: componentName },
    
    methods: {
        get(url) {
            return fetch(url).then(d => d.json())
        },
        showCart() {
       invisibleCart = !invisibleCart
       invisibleCart = !'.invisible'
     }
    }
}
    


</script>

<style lang="sass">
</style>B
<template>
  <div>
    <header class="header-wrapper">
    <section class="header">
        <button class="logo" @click="isVisiblePanel = !isVisiblePanel">E-shop-7</button>
        <div class="admin-block" v-show="isVisiblePanel">            
            <aside></aside> 
             <label for=""><input type="text"></label>
            <span>a Admin Panel is Here</span>         
        </div>
        <div class="cart">
            <form action="#" class="search-form" >
                <input type="text" class="search-field" v-model="searchLine">
                <button class="btn-search" @click="FilterGoods()">
                    <i class="fas fa-search"></i>
                </button>
            </form>
            <button class="btn-cart" @click="isVisibleCart = !isVisibleCart">Cart</button>
            <cart ref="cartRef" v-show="isVisibleCart" />
        </div>
    </section>
    </header>
    <main>
        <catalog/>
    </main>
  </div>
</template>



<script>
import cart from './containers/cart.vue'
import catalog from './containers/catalog.vue'



export default {    
    components: { cart, catalog },
    // components: { cart: cart, catalog: catalog, tagName: componentName },
    data() {
        return {            
            isVisibleCart: false, 
            isVisiblePanel: true,           
            searchLine: " "
                      
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
        filter(name){         
         this.$children[1].items=this.$children[1].items.filter(product=> product.product_name==name)        
        }
    }
  }

</script>



        
<style lang="sass">

</style>
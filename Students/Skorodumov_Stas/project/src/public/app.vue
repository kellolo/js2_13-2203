<template>
  <div :class="{
      big: big,
      small: !big
  }">  
    <header class="header-wrapper">
    <section class="header">
        <button class="logo" @click="isVisiblePanel = !isVisiblePanel">E-shop-7</button>
        <div class="admin-block" v-show="isVisiblePanel">            
            <aside></aside> 
             <label for=""><input type="text"></label>
            <span>a Admin Panel is Here</span>         
        </div>        
        <div class="cart">
            <form action="#" class="search-form"  > 
                <input type="text" class="search-field" placeholder="Product name search" v-model="searchLine" @input="filterGoods()">    
                <button class="btn-search"><i class="fas fa-search"></i></button>
            </form>
            <button class="btn-cart" @click="isVisibleCart = !isVisibleCart">Cart</button>
            <cart ref="cartRef" v-show="isVisibleCart" />
        </div>
    </section>
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
    // components: { cart: cart, catalog: catalog, tagName: componentName },
    data() {
        return {            
            isVisibleCart: false, 
            isVisiblePanel: true,            
            searchLine: " ",            
            big: false
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
        },

    filterGoods() {
       /*   let reg = new RegExp(str, 'gi');  */   
       return this.catalog.search (item => {
            return item.product_name.toLowerCase().includes(this.searchLine.toLowerCase())
        })
        }
    }


  }

</script>
<style>
    .small {
        font-size: 1em
    }
    
    .big {
        font-size: 2em
    }
</style>

<template>
  <div>
    <header>
      <div class="logo">E-shop</div>
      <div class="cart">
        <search-item />
        <button class="btn-cart" @click="show=!show">Cart</button>
        <cart ref="cart" />
      </div>
    </header>
    <main>
      <catalog ref="catalog" />
    </main>
  </div>
</template>

<script>
import cart from "./containers/cart.vue";
import catalog from "./containers/catalog.vue";
import searchItem from "./components/searchProduct.vue";

export default {
  components: { cart, catalog, searchItem },
  data(){
    return{
      show:true
    }
  },
  methods: {
    get(url) {
      return fetch(url).then(d => d.json());
    },
    post(url, obj) {      
      return fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj)
      }).then(d => d.json());
    },
    put(url,obj) {      
      return fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj)        
      }).then(d => d.json());
    },
    delete(url) {      
      return fetch(url, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },        
      }).then(d => d.json());
    },   
  }
}
</script>

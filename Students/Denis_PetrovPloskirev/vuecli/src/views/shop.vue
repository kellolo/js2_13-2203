<template>
  <div>
    <header>
      <div class="logo">E-shop</div>
      <div class="cart">
        <search-block ref="search" />
        <button class="btn-cart" @click="showCart = !showCart">Cart</button>
        <cart ref="cart" v-show="showCart" />
      </div>
    </header>
    <main>
      <catalog ref="catalog" />
      <admin-panel ref="adminPanel" />
    </main>
  </div>
</template>

<script>
import cart from "../containers/cart.vue";
import catalog from "../containers/catalog.vue";
import adminPanel from "../containers/adminPanel.vue";
import searchBlock from "../containers/filter.vue";

export default {
  components: { cart, catalog, adminPanel, searchBlock },
  // components: { cart: cart, catalog: catalog, tagName: componentName },
  data: function() {
    return {
      showCart: false
    };
  },
  methods: {
    get(url) {
      return fetch(url).then(d => d.json());
    },
    post(url, obj) {
      return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      }).then(d => d.json());
    },
    delete(url) {
      return fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(d => d.json());
    },
    put(url, obj) {
      return fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      }).then(d => d.json());
    }
  }
};
</script>
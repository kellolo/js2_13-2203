<template>
  <div class="cart-block">
    <div class="d-flex">
      <strong class="d-block">Всего товаров: {{ totalAmount }}</strong>
      <div id="quantity"></div>
    </div>
    <hr />
    <div class="cart-items">
      <item v-for="item of items" :key="item.id_product" :item="item" type="cart" />
    </div>
    <hr />
    <div class="d-flex">
      <strong class="d-block">Общая ст-ть: {{ totalCost }}</strong>
      <div id="price"></div>
    </div>
  </div>
</template>

<script>
import item from "../components/list_item.vue"
export default {
  components: { item },
  data() {
    return {
      items: [],
      // url: "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json"
      url: "/api/cart"
    }
  },
  methods: {
    addItem(obj) {
      this.$parent.post(this.url, obj).then(res => {
        console.log(res)
        this.items = res.contents
      })
    },
    removeProduct(obj) {
      this.$parent.delete(this.url, obj).then(res => {
        console.log(res)
        this.items = res.contents
      })
    }
  },
  computed: {
    totalAmount() {
      let total = 0
      this.items.forEach(elem => (total += elem.quantity))
      return total
    },
    totalCost() {
      let total = 0
      this.items.forEach(elem => (total += elem.price * elem.quantity))
      return total
    }
  },
  mounted() {
    this.$parent.get(this.url).then(data => (this.items = data.contents))
  }
}
</script>

<style>
</style>
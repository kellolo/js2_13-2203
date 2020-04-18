<template>
  <div class="cart-block">
    <div class="d-flex">
      <strong class="d-block">Всего товаров: {{ totalCoast }}</strong>
      <div id="quantity"></div>
    </div>
    <hr>
    <div class="cart-items">
      <item v-for="item of items" :key="item.id_product" :item="item" :type="'cart'"/>
    </div>
    <hr>
    <div class="d-flex">
      <strong class="d-block">Общая ст-ть: {{ totalAmount }}</strong>
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
      url: "https://raw.githubusercontent.com/JohnCarmack117/online-store-api/master/responses/getBasket.json"
    };
  },
  methods: {
    addItem(item) {
            this.$parent.get('https://raw.githubusercontent.com/JohnCarmack117/online-store-api/master/responses/addToBasket.json')
            .then((response) => {
                if (response.result == 1) {
                    let id = +item.id_product
                    let find = this.items.find(elem => elem.id_product === id)
                        if (find) {
                            find.quantity++
                        } else {
                            this.items.push({...item, quantity: 1})
                        }
                }
            })
    },
    removeItem(item) {
            this.$parent.get("https://raw.githubusercontent.com/JohnCarmack117/online-store-api/master/responses/deleteFromBasket.json")
            .then(response => {
                if (response.result == 1) {
                    let id = +item.id_product
                    let find = this.items.find(elem => elem.id_product === id)
                        if (find.quantity > 1) {
                            find.quantity--
                        } else {
                            this.items.splice(this.items.indexOf(find), 1)
                        }
                }
            })
    },
  },
  computed: {
    totalAmount() {
        let total = 0
        this.items.forEach(elem => total += elem.price * elem.quantity)
        return total
    },
    totalCoast() {
        let total = 0
        this.items.forEach(elem => total += elem.quantity)
        return total
    }
  },
  mounted() {
        this.$parent.get(this.url).then(data => (this.items = data.contents))
  }
};
</script>

<style>
</style>
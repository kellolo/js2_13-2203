<template>
  <div class="cart-block" v-if="$parent.showCart">
    <div class="d-flex">
      <strong class="d-block">Всего товаров: </strong>
      <div id="quantity"></div>
    </div>
    <hr>
    <div class="cart-items">
      <item v-for="item of items" :key="item.id_product" :item="item" :type="'cart'" @removeCartItem="removeItem"/>
    </div>
    <hr>
    <div class="d-flex">
      <strong class="d-block">Общая ст-ть: </strong>
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
      url: '/api/cart'
    };
  },
  methods: {
    addItem(item) {
            let find = this.items.find(el => el.id_product == item.id_product)
            if (find) {
                find.quantity++
            } else {
                let newItem = JSON.parse(JSON.stringify(item))
                this.$parent.post(this.url, newItem).then(res => {            
                    if (res) {
                        this.items.push(Object.assign({}, res, { quantity: 1 }))
                    }
                })
            }
    },
    removeItem(item) {
            let find = this.items.find(el => el.id_product == item.id_product)
            if (item.quantity > 1) {
                item.quantity--
            } else {
                this.$parent.get(`${this.url}/${item.id_product}`).then(res => {
                    if (res) {
                    this.items.splice(this.items.indexOf(item), 1)
                    }
                })
            }
    }
  },
  computed: {
    // totalAmount() {
    //     let total = 0
    //     this.items.forEach(elem => total += elem.price * elem.quantity)
    //     return total
    // },
    // totalCoast() {
    //     let total = 0
    //     this.items.forEach(elem => total += elem.quantity)
    //     return total
    // }
  },
  mounted() {
        this.$parent.get(this.url)
          .then(data => (this.items = data.contents))
  }
};
</script>

<style>
</style>
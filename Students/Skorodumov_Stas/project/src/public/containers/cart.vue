<template>
  <div class="cart-block">
    <div class="d-flex">
        <strong class="d-block">Product total:</strong><div id="quantity">{{ parseInt(totalQuantity) }}</div>
    </div>
    <div class="d-flex">
        <strong class="d-block">Total price:</strong><div id="price">{{ parseInt(totalPrice) }}</div>
    </div>     
    <hr> 
    <div class="cart-items">        
        <item 
        v-for="item of items" 
        :key="item.id_product" 
        :item="item" 
        :type="'cart'"
        @deleteitem="removeItem"/>
    </div>
    <hr>
</div>
</template>

<script>
import item from '../components/list_item.vue'
export default {    
    components: { item },
    data() {        
        return {
           // url: 'https://raw.githubusercontent.com/stanislavfor/online-store-url/master/responses/getBasket.json',
            items: [],
            url: '/api/getBasket'
            
        }
    },
    methods: { // (цена price производится без точности арифметического действия)
        addItem(item) {
            let find = this.items.find(el => el.id_product == item.id_product);           
            if (find) {
                find.quantity++
                find.price += find.price                         
            } else {
                this.items.push(Object.assign({}, item, {quantity: 1}))                
            }            
        },
        removeItem(item) {
            let find = this.items.find(el => el.id_product == item.id_product);
            if (find.quantity > 1) {
                find.price = find.price - (parseInt(find.price / find.quantity))
                find.quantity--                           
            } else {
                this.items.splice(this.items.indexOf(find), 1)
            }            
        }
    },
    computed: {
        totalQuantity() {
            let total = 0
            this.items.forEach(el => total += el.quantity)
            return total
        },
        totalPrice() {
            let total = 0
            this.items.forEach(el => total += (el.price * el.quantity))
            return total
        }
    },
    mounted() {
        this.$parent.get(this.url).then(d => this.items = d.contents)
    }
}
</script>

<style>

</style>
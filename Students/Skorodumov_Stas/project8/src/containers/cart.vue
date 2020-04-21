<template>
  <div class="cart-block">
    <div class="d-flex">
        <strong class="d-block">Product total:</strong><div id="quantity">{{ totalQuantity }}</div>
    </div>
    <div class="d-flex">
        <strong class="d-block">Total price:</strong><div id="price">{{ totalPrice }} $</div>
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
    components: { item, totalQuantity: 0, totalPrice: 0 },
   

    data() {     
        return {
           url: 'https://raw.githubusercontent.com/stanislavfor/online-store-url/master/responses/getBasket.json',
            items: [] 
        }
    },
    methods: { 
        addItem(item) {
            let find = this.items.find(el => el.id_product == item.id_product);           
            if (find) {
                this.$parent.put('/api/cart/' + item.id_product, { amount: 1 })
                /* find.price += find.price
                find.quantity++        */ 
                .then(res => {
                    if (res.status) {
                        find.quantity++
                        find.price += find.price
                    }
                })                               
            } else {
                //this.items.push(Object.assign({}, item, {quantity: 1})) 
                //let newItem = Object.assign({}, item, {quantity: 1})
                this.$parent.post('/api/cart')
                    .then(res => {
                        if (res.status) {
                            this.items.id_product = res.id
                            this.items.push(Object.assign({}, item, {quantity: 1}))
                        }
                    })               
                
            }            
        },
        removeItem(item) {
            let find = this.items.find(el => el.id_product == item.id_product);
            if (find.quantity > 1) {
                this.$parent.put('/api/cart/' + item.id_product, { amount: -1 })                
                /* find.price = find.price - (Math.round(find.price / find.quantity))
                find.quantity--   */ 
                    .then(res => {
                        if (res.status) {
                            find.price = find.price - (Math.round(find.price / find.quantity))
                            find.quantity--
                        }
                    })                                        
            } else {
                //this.items.splice(this.items.indexOf(find), 1)
                this.$parent.delete('/api/cart/' + item.id_product)
                    .then(res => {
                        if (res.status) {
                            this.items.splice(this.items.indexOf(find), 1)
                        }
                    })                
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
            this.items.forEach(el => total += el.price)
            return total
        }
    },
    mounted() {
        this.$parent.get('/api/cart').then(d => this.items = d.contents)
    }
}
</script>

<style>

</style>
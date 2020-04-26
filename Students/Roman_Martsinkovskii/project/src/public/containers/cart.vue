<template>
  <div class="cart-block ">
    <div class="cart-items">
        <item 
        v-for="item of items" 
        :key="item.id_product" 
        :item="item" 
        :type="'cart'"
        @deleteitem="removeItem"/>
    </div>
</div>
</template>

<script>
import item from '../components/list_item.vue'
export default {
    components: { item },
    data() {
        return {
            url: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json',
            items: []
        }
    },
    methods: {
    addItem(item) {
            let find = this.items.find(el => el.id_product == item.id_product);
            if (find) {
                this.$parent.put('/api/cart/' + item.id_product, { amount: 1 })
                    .then(res => {
                        if (res.status) {
                            find.quantity++
                        }
                    })
            } else {
                let newItem = Object.assign({}, item, {quantity: 1})
                this.$parent.post('/api/cart', newItem)
                    .then(res => {
                        if (res.status) {
                            newItem.id_product = res.id
                            this.items.push(newItem)
                        }
                    })
                
            }
        },
        removeItem(item) {
            let find = this.items.find(el => el.id_product == item.id_product);
            if (find.quantity > 1) {
                this.$parent.put('/api/cart/' + item.id_product, { amount: -1 })
                    .then(res => {
                        if (res.status) {
                            find.quantity--
                        }
                    })
            } else {
                this.$parent.delete('/api/cart/' + item.id_product)
                    .then(res => {
                        if (res.status) {
                            this.items.splice(this.items.indexOf(find), 1)
                        }
                    })
            }
        }
    },
    mounted() {
        this.$parent.get('/api/cart').then(d => this.items = d.contents)
    }
}
</script>

<style>
</style>
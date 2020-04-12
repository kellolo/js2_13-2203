<template>    
  <div class="cart-block" v-show="invisibleCart">
    <div class="d-flex">
        <strong class="d-block">Total products:</strong>{{ getAmount.qua }}  <div id="quantity"></div>
    </div>
    <hr>
    <div class="cart-items">
        <!--item /-->
    </div>
    <hr>
    <div class="d-flex">
        <strong class="d-block">Total cost:</strong>{{ getAmount.pr }}  <div id="price"></div>
    </div>
</div>
</template>

<script>
import item from '../components/list_item.vue'

export default {
    components: { item },
    data() {   
        show: false    
        return {
            items: [],            
            
            url: 'https://raw.githubusercontent.com/stanislavfor/online-store-url/master/responses/getBasket.json',
            urlAdd: 'https://raw.githubusercontent.com/stanislavfor/online-store-url/master/responses/addToBasket.json',
            urlDel: 'https://raw.githubusercontent.com/stanislavfor/online-store-url/master/responses/deleteFromBasket.json',
        }
    },
    methods: {
       addProduct (pr) {
            this.$parent.get(this.urlAdd)
                .then (ans => {
                    if (ans.result) {
                        let find = this.items.find (item => item.id_product === pr.id_product) 
                        if (find) {
                            find.quantity++
                        } else {
                            this.items.push (Object.assign ({}, pr, {quantity: 1}))
                        }
                    }
                })
        },
        delProduct (pr) {
            this.$parent.get(this.urlDel)
                .then (ans => {
                    if (ans.result) {
                        let find = this.items.find (item => item.id_product === pr.id_product) 
                        if (find.quantity > 1) {
                            find.quantity--
                        } else {
                            this.items.splice (this.items.indexOf (find), 1)
                        }
                    }
                })
        }
    },
    mounted() {
        this.$parent.get(this.url)
            .then (data => {
                this.items = data.contents
            })        
    },
    
    computed: {
        getAmount () {           
            let qua = 0
            let pr = 0
            this.items.forEach(el => {               
                qua += el.quantity
                pr += el.price * el.quantity
            })
            return {qua, pr}
        }
        
    }    
}
</script>

<style>

</style>


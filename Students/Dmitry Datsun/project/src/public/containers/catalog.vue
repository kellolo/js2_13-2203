<template>
    <div class="products">
        <item v-for="item of filteredList" :key="item.id_product" :item="item" :type="'catalog'"/>
    </div>
</template>

<script>
import item from '../components/list_item.vue'
export default {
    components: { item },
    data() {
        return {
            items: [],
            url: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json',
        }
    },
    methods: {
        addItem(item) {
            let cart = this.$parent.getChild('cart')
            if (cart) {
                if (find = cart.items.find(x => x.id_product === item.id_product)) {
                    find.quantity++
                } else {
                    cart.items.push ({
                        product_name: item.product_name,
                        price: item.price,
                        id_product: item.id_product,
                        quantity: 1
                    })
                }
                console.log(item.product_name + ' added')
                cart.checkTotalAndSum()
            }
        }
    },
    computed: {
        cart() {
            return this.$parent.getChild('cart')
        },
        filteredList: function() {
            return this.items.filter(function (elem) {
                return true
                if (this.search_line.length == 0) 
                    return true;
                else 
                    return elem.product_name.indexOf(this.search_line) > -1;
            })
        }
    },
    mounted() {
        this.$parent.getData(this.url)
        .then(data => this.items = data)
    }
}
</script>

<style>

</style>
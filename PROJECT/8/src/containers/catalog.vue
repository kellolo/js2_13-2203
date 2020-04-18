<template>
  <div class="products">
    <item v-for="item of items" :key="item.id_product" :item="item"/>
    <item :type="'temp'" @createnew="addNewCatalogItem"/>
  </div>
</template>

<script>
import item from '../components/list_item.vue'
export default {
    components: { item },
    data() {
        return {
            items: [],
            // url: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json'
            url: '/api/catalog'
        }
    },
    methods: {
        addItem(item) {
            this.$parent.$refs.cartRef.addItem(item)
        },
        addNewCatalogItem(prod) {
            let newItem = JSON.parse(JSON.stringify(prod));
            this.$parent.post(this.url, newItem)
            .then(res => {
                if(res.id) {
                    this.items.push({
                        id_product: res.id,
                        product_name: newItem.product_name,
                        price: newItem.price
                    })
                }
            })
        }
    },
    mounted() {
        this.$parent.get(this.url)
        .then(data => this.items = data)
    }
}
</script>

<style>

</style>
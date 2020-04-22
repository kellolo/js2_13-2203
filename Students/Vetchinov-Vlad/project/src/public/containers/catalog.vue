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
            url: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json'
        }
    },
    methods: {
        addItem(item) {
            this.$parent.$refs.cartRef.addItem(item)
        },
        addNewCatalogItem(p) {
            this.items.push({
                id_product: new Date() + '',
                product_name: p.name,
                price: p.price
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
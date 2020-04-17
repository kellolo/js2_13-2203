<template>
  <div class="products">
    <item v-for="item of filteredItems" :key="item.id_product" :item="item"/>
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
            filteredItems: [],
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
        },
        filter(str) {
            if (!str) {
                this.filteredItems = this.items
            } else {
                let reg = new RegExp(str, 'gi')
                this.filteredItems = this.items.filter (item => item.product_name.search(reg))
            }
        }
    },
    mounted() {
        this.$parent.get(this.url)
        .then(data => {
            this.items = data
            this.filteredItems = data
        })
    }
}
</script>

<style>

</style>
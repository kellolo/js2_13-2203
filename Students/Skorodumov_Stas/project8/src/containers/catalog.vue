<template>
  <div class="products">
    <item v-for="item in filteredItems" :key="item.id_product" :item="item"/>
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
            url: '/api/catalog'           
        }
    },
    methods: {
        addItem(item) {
            this.$parent.$refs.cartRef.addItem(item)
        },
        addNewCatalogItem(p) {
            let newItem = JSON.parse(JSON.stringify(p));
            this.$parent.post(this.url, newItem)
            .then(res => {
                if(res.id) {
                    this.items.push({
                        id_product: res.id,
                        product_name: newItem.product_name,
                        price: newItem.price,
                        img: newItem.img
                    })
                }
            })
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



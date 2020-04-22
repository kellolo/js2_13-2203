<template>
    <div class="products">
        <item v-for="item of items" :key="item.id_product" :item="item" />
    </div>
</template>

<script>
import item from "../components/list_item.vue";
export default {
    components: { item },
    data() {
        return {
            items: [],
            url:
                "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json"
        };
    },
    methods: {
        addItem(item) {
            let newItem = {
                id_product: item.id_product,
                product_name: item.product_name,
                price: item.price,
                quantity: 1
            }
            let find = this.$parent.$children[0].items.find(
                product => product.product_name == item.product_name
            )
            if (find) {
                find.quantity++
            } else {
                this.$parent.$children[0].items.push(newItem)
            }          
        }
    },
    mounted() {
        this.$parent.get(this.url).then(data => (this.items = data))
    }
}
</script>

<template>
    <div class="products">
        <item type="'templ'" />
    </div>
</template>

<script>
import item from "../components/list_item.vue";
export default {
    components: { item },
    data() {
        return {
            items: [{ product_name: "", price: "" }]
        }
    },
    methods: {        
        addNew(newProduct) {
            debugger
          this.$parent.$children[1].items.push(newProduct)
        }
    }   
}
</script>

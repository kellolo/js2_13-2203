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
            items: [{ product_name: "", price: "", id_product: ""}]
        }
    },
    methods: {        
        addNew(newProduct) {
        }
    }   
};
</script>

<style>

</style>
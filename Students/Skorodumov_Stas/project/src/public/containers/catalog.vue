<template>
  <div class="products">
    <item v-for="item of items" :key="item.id_product" :item="item"/>
  </div>
</template>

<script>
import item from '../components/list_item.vue'
export default {
    components: { item },
    data() {
        return {
            items: [],
            url: 'https://raw.githubusercontent.com/stanislavfor/online-store-url/master/responses/catalogData.json'
        }
    },
    methods: {
        addItem(item) {
            console.log(item.product_name + ' added to cart')
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
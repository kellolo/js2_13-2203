<template>
    <div class="products">
        <item v-for="item of filteredItems" :key="item.id_product" :item="item" :type="'catalog'"/>
        <item :type="'temp'" @createNew="addNewCatalogItem" />
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
            // url: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json',
            url: "api/catalog"
        }
    },
    methods: {
        addItem(item) {
            this.$parent.getData(this.url + '/' + item.id_product)
            .then(data => {
                if (data) {
                    this.$parent.$refs.cartRef.addItem(item);
                    this.$parent.$refs.cartRef.checkTotalAndSum();
                }
            })
        },
        addNewCatalogItem(prod) {
            let newItem = JSON.parse(JSON.stringify(prod))
            this.$parent.postData(this.url, newItem)
            .then(res => {
                if (res.id) {
                    this.items.push({
                        id_product: res.id,
                        product_name: newItem.product_name,
                        price: newItem.price
                    });
                }
            })
        },
        filter(str) {
            console.log(str)
            if (!str) {
                this.filteredItems = this.items;
            } else {
                let reg = new RegExp(str, 'gi');
                this.filteredItems = this.items.filter(x => x.product_name.search(reg))
            }
        }
    },
    computed: {
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
        .then(data => {
            this.items = data;
            this.filteredItems = data;
        })
    }
}
</script>

<style>

</style>
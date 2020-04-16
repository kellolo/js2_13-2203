<template>
    <form action="#" class="search-form" @submit="filterItems">
        <input type="text" class="search-field" v-model="search" />
        <button class="btn-search">
            <i class="fas fa-search"></i>
        </button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            search: ""
        };
    },
    methods: {
        filterItems() {
            this.$parent.$refs.catalog.items = this.$parent.$refs.catalog.defaultItems;
            if (this.search != "") {
                this.$parent.$refs.catalog.items = this.$parent.$refs.catalog.items.filter(element => element.product_name == this.search)
            }
        }
    }
}
</script>

<style>
</style>
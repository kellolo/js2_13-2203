<template>
  <form action="#" class="search-form">
    <input type="text" class="search-field" v-model="searchText" @input="filterItems()" />
    <button class="btn-search">
      <i class="fas fa-search"></i>
    </button>
    <div class="filteredResultBlock" v-show="filtered.length > 0">
      <item v-for="item of filtered" type="filtered" key="item.id_product" :item="item" />
    </div>
  </form>
</template>

<script>
import item from "../components/list_item.vue"
export default {
  components: { item },
  data() {
    return {
      searchText: "",
      filtered: []
    }
  },
  methods: {
    filterItems() {
      this.searchText.length > 0
        ? (this.filtered = this.$parent.$refs.catalog.items.filter(
            elem =>
              elem.product_name.toLowerCase().indexOf(this.searchText) > -1
          ))
        : (this.filtered = [])
    }
  }
}
</script>

<style>
.filteredResultBlock {
  position: absolute;
  width: 100%;
  background-color: #fff;
}

.filtered-item {
  display: flex;
  justify-content: space-between;
  padding: 4px;
}

img.filtered {
  height: 30px;
}

.descp {
  display: flex;
  height: 30px;
  font-size: 0.4em;
  color: #333;
  justify-content: space-between;
}

.descpHead {
  height: 30px;
  line-height: 30px;
  margin: 0 5px;
  flex-grow: 1;
}
</style>
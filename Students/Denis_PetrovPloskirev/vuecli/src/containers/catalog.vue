<template>
  <div class="products">
    <item v-for="item of items" :key="item.id_product" :item="item" />
  </div>
</template>

<script>
import item from "../components/list_item.vue"
export default {
  components: { item },
  data() {
    return {
      items: [],
      isLoaded: false,
      // url: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json',
      url: "/api/catalog",
      searchText: ""
    }
  },
  methods: {
    searchItem() {
      return this.items.filter(
        elem => elem.product_name.toLowerCase().indexOf(this.searchText) > -1
      )
    }
  },
  mounted() {
    this.$parent
      .get(this.url)
      .then(data => (this.items = data))
      .then(() => {
        this.$parent.catalogIsLoaded = true
      })
      .then(() => {
        this.$parent.adminPanelIsShown = false
      })
  }
}
</script>

<style>
</style>
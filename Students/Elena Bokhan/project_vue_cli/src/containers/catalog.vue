<template>
  <div class="products">
    <item v-for="item of filterItems" :key="item.id_product" :item="item" />
    <item @createnew="addNewProduct" :type="'templ'" />
  </div>
</template>

<script>
import item from "../components/list_item.vue";
export default {
  components: { item },
  data() {
    return {
      items: [],
      filterItems: [],
      url: "api/catalog"
    };
  },
  methods: {
    addItem(item) {
      this.$parent.$refs.cart.addItem(item);
    },
    addNewProduct(product) {
      let newItem = JSON.parse(JSON.stringify(product));
      this.$parent.post(this.url, newItem).then(res => {
        if (res.id) {
          this.items.push({
            id_product: res.id,
            product_name: newItem.product_name,
            price: newItem.price
          });
        }
      });
    },
    filter(str) {
      if (!str) {
        this.filterItems = this.items;
      } else {
        let reg = new RegExp(str, "gi");
        this.filterItems = this.items.filter(
          item => item.product_name.search(reg) != -1
        );
      }
    }
  },
  mounted() {
    this.$parent.get(this.url).then(data => {
      this.items = data;
      this.filterItems = data;
    });
  }
};
</script>

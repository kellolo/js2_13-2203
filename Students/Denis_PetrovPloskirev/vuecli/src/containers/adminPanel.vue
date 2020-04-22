<template>
  <div class="products">
    <div class="desc">
      <item type="adminPanel" />
    </div>
  </div>
</template>

<script>
import item from "../components/list_item.vue"
export default {
  components: { item },
  data: function() {
    return {
      newObj: {
        product_name: "",
        price: null
      }
    }
  },
  methods: {
    newItem(obj) {
      console.log(this.$parent.$refs.catalog.url)
      this.$parent.post(this.$parent.$refs.catalog.url, obj).then(res => {
        console.log(res)
        if (res.id) {
          console.log("ttttt")
          let item = {}
          item.id_product = res.id
          item.price = +obj.price
          item.product_name = obj.product_name
          this.$parent.$refs.catalog.items.push(item)
          console.log(item)
        }
      })
    }
  }
}
</script>

<style>
</style>
<template>
  <div class="products">
    <div class="desc">
      <item type="adminPanel"/>
    </div>
  </div>
</template>

<script>
import item from '../components/list_item.vue'
export default {
  components: { item },
  data: function() {
    return {
      name: '',
      price: 0,
      id: 0
    }
  },
  methods: {}
}
</script>

<style>

</style>
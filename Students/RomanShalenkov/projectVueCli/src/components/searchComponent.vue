<template>
  <form action="#" class="search-form" @submit="$emit('search', searchString)">
                <input type="text" class="search-field" v-model="searchString">
                <button class="btn-search">
                    <i class="fas fa-search"></i>
                </button>
            </form>
</template>

<script>
export default {
    data() {
        return {
            searchString: ''
        };
    }
}
</script>

<style>

</style>
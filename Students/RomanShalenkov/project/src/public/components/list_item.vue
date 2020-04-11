<template>
  <div :class="calcWrapClass">
  <img :src="calcImg" alt="_">
    <template v-if="type === 'catalog'">
        <div class="desc">
            <h1>{{ item.product_name }}</h1>
            <p>{{ item.price }}</p>
            <button 
            class="buy-btn" 
            name="buy-btn"
            @click="$parent.addItem(item)"
            >Купить</button>
        </div>
    </template>
    <template v-else-if="type === 'cart'">
        <div class="product-desc">
            <p class="product-title">{{ item.product_name }}</p>
            <p class="product-quantity">{{ item.quantity }}</p>
            <p class="product-single-price">{{ item.price }}</p>
        </div>
        <div class="right-block">
            <button name="del-btn" class="del-btn">&times;</button>
        </div>
    </template>
    <template v-else-if="type === 'temp'">
    
    </template>
</div>

</template>

<script>
    export default {
        // props: ['item', 'type']
        props: {
            item: { type: Object },
            type: { type: String, default: 'catalog' }
        },
        computed: {
            calcWrapClass() {
                console.log('Я пытаюсь понять какой враппер оформить')
                return this.type === 'catalog' ? 'product-item' : 'cart-item'
            },
            calcImg() {
                return `https://placehold.it/${this.type === 'catalog' ? '300x200' : '100x80'}`
            },
        },
    }
</script>
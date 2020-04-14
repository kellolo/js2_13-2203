<template>
    <div :class="calcWrapClass">
        <img :src="calcImg" alt="_">
        <template v-if="type === 'catalog'">
            <div class="desc">
                <h1>{{item.product_name}}</h1>
                <p>{{item.price}}</p>
                <button class="buy-btn" name="buy-btn" @click="$parent.addItem(item)">Купить</button>
            </div>
        </template>
        <template v-else-if="type === 'cart'">
            <div class="product-desc">
                <p class="product-title">{{item.product_name}}</p>
                <p class="product-quantity">{{this.item.quantity}}</p>
                <p class="product-single-price">{{this.item.price}}</p>
            </div>
            <div class="right-block">
                <button name="del-btn" class="del-btn" @click="$parent.removeItem(item)">&times;</button>
            </div>
        </template>
        <template v-else-if="type === 'temp'">
            <div class="product-desc">
                <input type="text" v-model="product_name" class="product-title" /><br>
                <input type="text" v-model="quantity" class="product-quantity" /><br>
                <input type="text" v-model="price" class="product-single-price" /><br>
                <button class="buy-btn" name="buy-btn">Добавить</button>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    // props: ['item', 'type']
    props: {
        item: {type: Object},
        type: {type: String, default: 'temp'}
    },
    computed: {
        calcWrapClass() {
            return this.type === 'catalog' ? 'product-item' : 'cart-item'
        },
        calcImg() {
            return `https://placehold.it/${this.type === 'catalog' ? '300x200' : '100x80'}`
        }
    },
    data() {
        return {
            product_name: '',
            quantity: 1,
            price: 0,
        }
    }
    
}
</script>

<style>

</style>
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
        <div class="desc">
                <p>ID:</p>
                <input type="text" @input="id=$event.target.value">
                <h1>Name:</h1>                
                <input type="text" @input="product_name=$event.target.value">
                <p>Price:</p>
                <input type="text" @input="price=$event.target.value">
                <button>Добавить</button>
            </div>
    </template>
</div>

</template>

<script>
export default {
    props: {
        item: { type: Object },
        type: { type: String, default: 'catalog' }
    },
    computed: {
        calcWrapClass() {
            if (this.type === "catalog") return "product-item"
            else if (this.type === "cart") return "cart-item"
            else return "product-item"
        },
        calcImg() {
            return `https://placehold.it/${this.type === 'catalog' ? '300x200' : '100x80'}`
        },
    },
}
</script>
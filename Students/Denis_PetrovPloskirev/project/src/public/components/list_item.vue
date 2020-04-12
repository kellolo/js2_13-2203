<template>
  <div :class="calcWrapClass">
  <img :src="calcImg" v-if="(type !== 'adminPanel') && (type !== 'filtered')" alt="_">
    <template v-if="type === 'catalog'">
        <div class="desc">
            <h1>{{ item.product_name }}</h1>
            <p>{{ item.price }}</p>
            <button 
            class="buy-btn" 
            name="buy-btn"
            @click="$parent.$parent.addItem(item)"
            >Купить</button>
            </div>
    </template>
    <template v-else-if="type === 'cart'">
        <div class="product-desc">
            <p class="product-title">{{ item.product_name }}</p>
            <p class="product-quantity">Qua: {{ item.quantity }}</p>
            <p class="product-single-price">Price: {{ item.price }}</p>
        </div>
        <div class="right-block">
            <button 
            name="del-btn" 
            class="del-btn" 
            @click="$parent.removeProduct(item)"
            >&times;</button>
        </div>
    </template>
    <template v-else-if="type === 'adminPanel'">
        <div class="product-item">
            <h1>Новый товар</h1>
            <input type="text" name="name" placeholder="name" v-model.lazy="$parent.name">
            <input type="text" name="price" placeholder="price" v-model.lazy="$parent.price">
            <input type="text" name="id" placeholder="id" v-model.lazy="$parent.id">
            <button class="buy-btn" @click="$parent.$parent.newItem()">add</button>
            
        </div>
    </template>
    <template v-else-if="type === 'filtered'">
                <img class="filtered" src="https://placehold.it/50x40">
                <div class="descp">
                    <h1 class="descpHead">{{ item.product_name }}</h1>
                <button 
                class="buy-btn" 
                name="buy-btn"
                @click="$parent.$parent.addItem(item)"
                >Buy</button>
                </div>
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
            if (this.type == 'catalog') {
                return 'product-item'
            } else if (this.type == 'filtered') {
                return 'filtered-item'
            } else {
                return 'cart-item'
            }
        },
        calcImg() {
            return `https://placehold.it/${this.type === 'catalog' ? '300x200' : '100x80'}`
        },
    },
}
</script>

<template>
    <div :class="calcWrapClass">
        <img :src="calcImg" alt="_">
            <template v-if="type.match(/catalog/)">
                <div class="desc">
                    <h1>{{ item.product_name }}</h1>
                    <p>{{ item.price }}</p>
                    <button 
                        class="buy-btn" 
                        name="buy-btn"
                        @click="$parent.$parent.$refs.cart.addItem(item)"
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
                    <button
                        name="del-btn"
                        class="del-btn"
                        @click="$parent.$parent.$refs.cart.removeItem(item)"
                        >&times;</button>
                </div>
            </template>
            <template v-else-if="type === 'temp'">
                <!-- <img :src="'https://placehold.it/200x150'" @click="addImg" class="pointer"> -->
                <div class="desc w-100">
                    <label >
                        <input type="text" placeholder="Item name" v-model="newProduct.name" class="w-100">
                    </label>
                    <label >
                        <input type="number" placeholder="Item price" v-model="newProduct.price" class="w-100">
                    </label>
                    <button class="buy-btn" 
                        name="buy-btn"
                        @click="createNew(newProduct)"
                        >Добавить</button>
                </div>
            </template> 
    </div> 
</template>

<script>
// import cart from '../containers/cart.vue'
// import catalog from '../containers/catalog.vue'

export default {
    // components: { cart, catalog },
    // components: { cart: cart, catalog: catalog, tagName: componentName }
    props: {
        item: { type: Object },
        type: { type: String, default: 'catalog' }
    },
    data() {
        return {
            newProduct: {
                name: '',
                price: 0
            }
        }
    },
    computed: {
        calcWrapClass() {
            // console.log('Я пытаюсь понять какой враппер оформить')
            return this.type.match(/catalog|temp/) ? 'product-item' : 'cart-item'
        },
        calcImg() {
            return `https://placehold.it/${this.type.match(/catalog|temp/) ? '300x200' : '100x80'}`
        },
    } ,
    methods: {
        createNew(item) {
            if (item.name && item.price) {
                this.$emit('create', item)
                this.newProduct.name = ''
                this.newProduct.price = 0
            }
        }
    }   
}
</script>

<style>
</style>
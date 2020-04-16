<template>
  <div :class="calcWrapClass">
  <img :src="calcImg" alt="image" >
    <template v-if="type.match(/catalog/)">
        <div class="desc">
            <h1>{{ item.product_name }}</h1>
            <p>{{ item.price }} $</p>
            <button 
            class="buy-btn" 
            name="buy-btn"
            @click="$parent.addItem(item)"
            >Add to Cart</button>
        </div>
    </template>

     <template v-else-if="type === 'cart'">
        <div class="product-desc">
            <p class="product-title">{{ item.product_name }}</p>
            <p class="product-quantity">{{ item.quantity }}</p>
            <p class="product-single-price">{{ item.price }}</p>
        </div>
        <div class="right-block">
            <button name="del-btn" class="del-btn" @click="$emit('deleteitem', item)">&times;</button>
        </div>
    </template>

     <template v-else-if="type === 'temp'">           
        <div class="desc w-100">
            <label class="text-label">
                <input type="text" placeholder="Item name" v-model="newProduct.product_name" class="w-100">
            </label>
            <label class="text-label">
                <input type="number" placeholder="Item price" v-model="newProduct.price" class="w-50">
            </label>
            <button class="buy-btn" name="buy-btn" @click="createNew(newProduct)">Add a Item
            </button>        
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
    data() {
        return {
            newProduct: {
                product_name: '',
                price: 0
            },
         '!isVisiblePanel': true   
        }
    },
    computed: {
        calcWrapClass() {
            return this.type.match(/catalog|temp/) ? 'product-item' : 'cart-item'
        },
        calcImg() {
            return `https://placehold.it/${this.type.match(/catalog|temp/) ? '300x200' : '100x80'}`
        },
    },
    methods: {
        createNew(item) {
            if(item.product_name && item.price) {
                this.$emit('createnew', item); //здесь событие сгенерировано
                this.newProduct.product_name = '';
                this.newProduct.price = 0;
            }
        }
    }
}
</script>

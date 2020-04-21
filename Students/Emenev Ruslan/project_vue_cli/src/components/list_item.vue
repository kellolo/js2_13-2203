<template>
    <div :class="calcWrapClass">
        <img :src="calcImage" alt="_" />
        <template v-if="type.match(/catalog/)">            
            <!--img src="${item.img}" width="300" height="200" alt="${item.product_name}"-->
            <div class="desc">
                <h1>{{ item.product_name }}</h1>
                <p>{{item.price}}</p>
                <button class="buy-btn" name="buy-btn" @click="$parent.addItem(item)">Купить</button>
            </div>
        </template>        
        <template v-else-if="type==='cart'">            
            <div class="product-desc">
                <p class="product-title">{{item.product_name}}</p>
                <p class="product-quantity">{{item.quantity}}</p>
                <p class="product-single-price">{{item.price}}</p>
            </div>
            <div class="right-block">
                <button name="del-btn" class="del-btn" @click="$emit('deleteitem',item)">&times;</button>
            </div>
        </template> 
        <template v-else-if="type=='templ'">           
            <div class="desc">
                <label>Name:
                <input type="text" v-model="newProduct.product_name">
                </label>
                <label>Price:
                <input type="number" v-model="newProduct.price">
                </label>
                <button class="buy-btn" name="buy-btn" @click="createNew(newProduct)">Добавить</button>
            </div>
        </template>        
    </div>
</template>

<script>
export default {
    props: {
        item: { type: Object },
        type: { type: String, default: "catalog" }
    },    
    data(){
        return {
            newProduct:{
                product_name:'',
                price:0
            }
        }
    },    
    computed: {
        calcWrapClass() {
            return this.type.match(/catalog|templ/)? "product-item" : "cart-item";
        },
        calcImage() {
            return `https://placehold.it/${this.type.match(/catalog|templ/) ? "300x200" : "100x80"}`;
        }
    },
    methods:{
         createNew(item){
            if (item.product_name && item.price){
                this.$emit('createnew',item);
                this.newProduct.product_name='';
                this.newProduct.price=0;
            }
        }
    }
}
</script>

<template>
    <div :class="calcItemClass">

        <template v-if="type == 'catalog'">
            <div class="img-wrap"><img :src="item.image" :alt="item.product_name"/></div>
            <div class="desc">
                <h1>{{ item.product_name }}</h1>
                <p>{{ item.price }}</p>
                <button class="buy-btn" name="buy-btn" @click="$parent.buyClickHandler(item)">Купить</button>
            </div>
        </template>

        <template v-else-if="type == 'cart'">
            <div class="left-block">
                <img :src="item.image" :alt="item.product_name"/>
                <div class="product-desc">
                    <p class="product-title">{{ item.product_name }}</p>
                    <p class="product-quantity">{{ item.quantity }}</p>
                    <p class="product-single-price">{{ item.price }}</p>
                </div>
            </div>
            <div class="right-block">
                <button name="del-btn" class="del-btn" @click="$parent.deleteClickHandler(item)">&times;</button>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: ['item', 'type'],
    computed: {
        calcItemClass() {
            switch (this.type) {
                case 'catalog': return 'product-item'
                case 'cart': return 'cart-item'
            }
        }
    }
}
</script>

<style>
</style>
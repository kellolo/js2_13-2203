<template>
    <div class="cart-block" v-show="$parent.isVisibleCart">
        <div class="d-flex">
            <strong class="d-block">Всего товаров</strong>{{countGoods}}<div id="quantity"></div>
        </div>
        <div v-show="countGoods">
            <hr>
            <div class="cart-items">
                <item v-for="item of items" :key="item.id_product" :item="item" :type="'cart'" @deleteItem="removeItem" />
            </div>
            <hr>
            <div class="d-flex">
                <strong class="d-block">Общая стоимость:</strong> <div id="price">{{amount}}</div>
            </div>
        </div>
        <!-- <template v-else>Нет данных</template> -->
    </div>
</template>

<script>
import item from '../components/list_item.vue'
export default {
    components: { item },
    data() {
        return {
            items: [],
            // url: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json',
            url: 'api/cart',
            countGoods: 0,
            amount: 0,
        }
    },
    methods: {
        addItem(item) {
            let find = this.items.find(x => x.id_product == item.id_product);
            if (find) {
                this.$parent.putData('api/cart/' + item.id_product, {amount: 1})
                .then(res => {
                    if (res.status) {
                        find.quantity++;
                        this.checkTotalAndSum()
                    }
                });
            } else {
                let newItem = Object.assign({}, item, {quantity: 1});
                this.$parent.postData('api/cart', newItem)
                .then(res => {
                    if (res.status) {
                        this.items.push(newItem);
                        this.checkTotalAndSum()
                    }
                });
            }
            console.log(item.product_name + ' added')
        },
        removeItem(item) {
            let find = this.items.find(x => x.id_product == item.id_product)
            if (find.quantity > 1) {
                this.$parent.putData('api/cart/' + item.id_product, {amount: -1})
                .then(res => {
                    if (res.status) {
                        find.quantity--;
                        this.checkTotalAndSum();
                    }
                });
            } else {
                this.$parent.deleteData('api/cart/' + item.id_product)
                .then(res => {
                    if (res.status) {
                        this.items.splice(this.items.indexOf(find), 1);
                        this.checkTotalAndSum();
                    }
                });
            }
            console.log(item.product_name + ' removed')
        },
        checkTotalAndSum () {
            let count = 0
            let price = 0
            this.items.forEach (item => {
                count += item.quantity
                price += item.price * item.quantity
            })
            this.countGoods = count
            this.amount = price
        }
    },
    mounted() {
        this.$parent.getData(this.url)
        .then(data => {
            this.items = data.contents
            this.checkTotalAndSum()
        })
    }
}
</script>

<style>

</style>
export default () => {

    let app = new Vue({
            el: '#app',
            data: {
                search: '', // фильтрация товаров
                defaultItems: [],

                items: [], // товары каталога
                API_url: '../src/public/json/',

                showCart: false, // фикс отображения корзины
                cart: {
                    totalPrice: 0,
                    totalItems: 0,
                    items: []
                }
            },
            methods: {
                buyClickHandler(item) {
                    if (!this.cart.items.includes(item)) {
                        this.cart.items.push(item)
                        item.quantity = 1
                    } else {
                        item.quantity++
                    }
                    this.cart.totalItems++
                    this.cart.totalPrice += Number(item.price)
                },
                deleteClickHandler(item) {
                    if (item.quantity == 1) {
                        this.cart.items.splice(this.cart.items.indexOf(item), 1)
                    } else if (item.quantity > 1) {
                        item.quantity--
                    }
                    this.cart.totalItems--
                    this.cart.totalPrice -= item.price
                },
                filterItems() {
                    if (this.search != '') {
                        this.items = this.items.filter(element => element.product_name == this.search)
                    } else {
                        this.items = this.defaultItems
                    }
                }
            },

            mounted() {
                fetch(this.API_url + 'catalog.json')
                    .then(data => data.json())
                    .then(data => this.items = data)
                    .then(data => this.defaultItems = data)
            }
        })
}
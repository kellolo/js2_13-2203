 'use strict'

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function getData(url) {
    return fetch(url).then(d => d.json())
}

let cart = new Vue ({
    el: '#header',
    data: {
        url: API + '/getBasket.json',
        items: [],
        amount: 0,
        countGoods: 0,
        isVisibleCart: false,
        search_str: '',
        search: '',
    },
    methods: {
        searchLine () {
            this.search_str = this.search;
        },
        findItem: function (id) {
            return this.items.find(item => item.id_product == id);
        },
        removeProduct (item) {
            let find = this.findItem (item.id_product)
            if (find.quantity > 1) {
                find.quantity--
            } else {
                this.items.splice (this.items.indexOf(find), 1)
            }
            this.checkTotalAndSum ()
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
    async mounted() {
        let answer = await getData(this.url);
        this.items = answer.contents;
        this.checkTotalAndSum ();
    }
})

let catalog = new Vue ({
    el: '#main',
    data: {
        url: API + '/catalogData.json',
        items: [],
    },
    computed: {
        filteredList: function() {
            return this.items.filter(function (elem) {
                if (cart.search_str.length == 0) 
                    return true;
                else 
                    return elem.product_name.indexOf(cart.search_str) > -1;
            })
        }
    },
    methods: {
        async addProduct(item) { 
            let data = await getData(API + '/addToBasket.json');
            if (data.result) {
                if (find = cart.findItem(item.id_product)) {
                    find.quantity++;
                } else {
                    cart.items.push ({
                        product_name: item.product_name,
                        price: item.price,
                        id_product: item.id_product,
                        quantity: 1
                    })
                }
                cart.checkTotalAndSum ();
            }
        }
    },
    async mounted() {
        this.items = await getData(this.url)
    }
})

export default () => {}

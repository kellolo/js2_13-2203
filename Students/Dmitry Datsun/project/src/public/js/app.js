 'use strict'
 //ИМИТАЦИЯ РАБОТЫ БАЗЫ ДАННЫХ И СЕРВЕРА

let productList = []
let url = './src/public/js/catalog.json'

class ProductCart {
    constructor (id) {
        productList.forEach(item => {
            if (item.id_product == id) {
                this.product = item
            }
        })
        this.quantity = 1
    }
}

function makeGETRequest(url) {
    return new Promise (function (res, rej) {
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                xhr.status == 200 ? res(JSON.parse(xhr.responseText)) : rej(new Error(`Ошибка загрузки ${url}`))
            }
        }
    
        xhr.open('GET', url, true);
        xhr.send();
    })
}

class Catalog {
    constructor(cart) {
        this.items = productList
        this.container = '.products'
        this.cart = cart
        this._init ()
    }

    _init () {
        this.render ()
        this._handleEvents ()
    }

    _handleEvents () {
        document.querySelector (this.container).addEventListener ('click', (evt) => {
            if (evt.target.name === 'buy-btn') {
                this.cart.addProduct (evt.target)
            }
        })
    }

    render () {
        let str = ''
        this.items.forEach (item => {
            str += `
                <div class="product-item">
                    <img src="${item.img}" alt="${item.product_name}">
                    <div class="desc">
                        <h1>${item.product_name}</h1>
                        <p>${item.price}</p>
                        <button 
                        class="buy-btn" 
                        name="buy-btn"
                        data-name="${item.product_name}"
                        data-price="${item.price}"
                        data-id="${item.id_product}"
                        >Купить</button>
                    </div>
                </div>
            `
        })

        document.querySelector(this.container).innerHTML = str
     }
}

class Cart {
    constructor () {
        this.items = []
        this.total = 0
        this.sum = 0
        this.container = '.cart-block'
        this.quantityBlock = document.querySelector ('#quantity')
        this.priceBlock = document.querySelector ('#price')
        this._init ()
    }

    _init () {
        this._handleEvents ()
    }

    _handleEvents () {
        document.querySelector (this.container).addEventListener ('click', (evt) => {
            if (evt.target.name === 'del-btn') {
                this.deleteProduct (evt.target)
            }
        })
    }

    findItem (id) {
        let result
        this.items.forEach(item => {
            if (item.product.id_product == id) {
                result = item
            }
        })
        return result
    }
    
    addProduct (product) {
        let id = product.dataset['id']
        if (find = this.findItem (id)) {
            find.quantity++
        } else {
            this.items.push (new ProductCart(id))
        }
         
        this._checkTotalAndSum ()
        this.render ()
    }

    deleteProduct (product) {
        let id = product.dataset['id']
        let find = this.findItem (id)
        if (find.quantity > 1) {
            find.quantity--
        } else {
            this.items.splice (this.items.indexOf(find), 1)
        }
         
        this._checkTotalAndSum ()
        this.render ()
    }
    
    _checkTotalAndSum () {
        let qua = 0
        let pr = 0
        this.items.forEach (item => {
            qua += item.quantity
            pr += item.product.price * item.quantity
        })
        this.total = qua
        this.sum = pr
    }

    render () {
        let itemsBlock = document.querySelector (this.container).querySelector ('.cart-items')
        let str = ''
        this.items.forEach (item => {
            str += `<div class="cart-item" data-id="${item.product.id_product}">
                    <img src="https://placehold.it/100x80" alt="">
                    <div class="product-desc">
                        <p class="product-title">${item.product.product_name}</p>
                        <p class="product-quantity">${item.quantity}</p>
                        <p class="product-single-price">${item.product.price}</p>
                    </div>
                    <div class="right-block">
                        <button name="del-btn" class="del-btn" data-id="${item.product.id_product}">&times;</button>
                    </div>
                </div>`
        })

        itemsBlock.innerHTML = str
        this.quantityBlock.innerText = this.total
        this.priceBlock.innerText = this.sum
    }
 }

export default () => {
    makeGETRequest (url)
    .then (
        list => {
            productList = list
            new Catalog(new Cart())
        }
    )
    .catch (
        err => alert(err)
    )
}

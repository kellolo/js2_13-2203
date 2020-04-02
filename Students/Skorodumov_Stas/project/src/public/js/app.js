//--------------------------------------DB imitation---------------

let PRODUCTS_NAMES = ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard']
let PRICES = [100, 120, 1000, 15, 18]
let IDS = [0, 1, 2, 3, 4]
let IMGS = [
    'https://i.ibb.co/s9gr3sF/1514188160141511997.jpg',
    'https://i.ibb.co/Y8FLz2v/HMUB2.png',
    'https://i.ibb.co/P1HmQS7/Xiaomi-Mi-Notebook-Air.jpg',
    'https://i.ibb.co/jfYmLvN/640-05-lg.jpg',
    'https://i.ibb.co/nbJxcp2/81-PLqxtr-J3-L-SX466.png'
]
//let products = [] //массив объектов

//--------------------------------------class Catalog---------------
class Catalog {
    constructor(PRODUCTS_NAMES, PRICES, IDS, IMGS, cart = null) {
        this.items = []
        this.container = '.products'
        this.cart = cart
        this._init(PRODUCTS_NAMES, PRICES, IDS, IMGS) //_ - это обозначение инкапсулированного метода
    }
    _init(PRODUCTS_NAMES, PRICES, IDS, IMGS) {
        this._handleData()
        this.render()
        this._handleEvents()
        this.IDS = IDS
    }
    _handleEvents() {
        document.querySelector(this.container).addEventListener('click', (evt) => {
            if (evt.target.name === 'buy-btn') {
                this.cart.addProduct(evt.target)
            }
        })
    }
    _handleData() {
        for (let i = 0; i < IDS.length; i++) {
            this.items.push(this._createNewProduct(i))
        }
    }
    _createNewProduct(index) {
        return {
            product_name: PRODUCTS_NAMES[index],
            price: PRICES[index],
            id_product: IDS[index],
            img: IMGS[index]
        }
    }

    // src="https://placehold.it/300x200"
    render() {
        let str = ''
        this.items.forEach(item => {
            str += `
                <div class="product-item">
                    <img class='item_image' src="${item.img}" alt="${item.product_name}">                    
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

//--------------------------------------class Cart---------------
class Cart {
    constructor() {
        this.items = []
        this.total = 0
        this.sum = 0
        this.container = '.cart-block'
        this.quantityBlock = document.querySelector('#quantity')
        this.priceBlock = document.querySelector('#price')
        this._init()

    }
    _init() {
        this._handleEvents()
    }
    _handleEvents() {
        document.querySelector(this.container).addEventListener('click', (evt) => {
            if (evt.target.name === 'del-btn') {
                this.deleteProduct(evt.target)
            }
        })
    }
    addProduct(product) {
        let id = product.dataset['id']
        let find = this.items.find(product => product.id_product === id)
        if (find) {
            find.quantity++
        } else {
            let prod = this._createNewProduct(product)
            this.items.push(prod)
        }
        this._checkTotalAndSum()
        this.render()
    }
    _createNewProduct(prod) {
        return {
            product_name: prod.dataset['name'],
            price: prod.dataset['price'],
            id_product: prod.dataset['id'],
            quantity: 1,
            img: IMGS[(prod.dataset['id'])]
        }
    }
    deleteProduct(product) {
        let id = product.dataset['id']
        let find = this.items.find(product => product.id_product === id)
        if (find.quantity > 1) {
            find.quantity--
        } else {
            this.items.splice(this.items.indexOf(find), 1)
        }

        this._checkTotalAndSum()
        this.render()
    }

    _checkTotalAndSum() {
        let qua = 0
        let pr = 0
        this.items.forEach(item => {
            qua += item.quantity
            pr += item.price * item.quantity
        })
        this.total = qua
        this.sum = pr
    }

    //src="https://placehold.it/100x80"
    render() {
        let itemsBlock = document.querySelector(this.container).querySelector('.cart-items')
        let str = ''
        this.items.forEach(item => {
            str += `<div class="cart-item" data-id="${item.id_product}">
                    <img src="${item.img}" width="100" height="80" alt="${item.product_name}">
                    <div class="product-desc">
                        <p class="product-title">${item.product_name}</p>
                        <p class="product-quantity">${item.quantity}</p>
                        <p class="product-single-price">${item.price}</p>
                    </div>
                    <div class="right-block">
                        <button name="del-btn" class="del-btn" data-id="${item.id_product}">&times;</button>
                    </div>
                </div>`
        })
        itemsBlock.innerHTML = str
        this.quantityBlock.innerText = this.total
        this.priceBlock.innerText = this.sum
    }
}

export default () => {
    new Catalog(PRODUCTS_NAMES, PRICES, IDS, IMGS, new Cart()) //тут происходит создание объекта и вся прочая магия
    new Cart()
}
 'use strict'

//fakes
const catalogImage = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

//PARENTS
class List {
    constructor(url, container) {
        this.url = url;
        this.container = container;
        this.items = [];
        this._init();
    }
    _init() {
        return false
    }
    getData(url) {
        return fetch(url)
        //axios

        // return new Promise ((res, rej) => {
        //     let xhr = new XMLHttpRequest()
            
        //     xhr.onreadystatechange = () => {
        //         if(xhr.readyState === 4) {
        //             if(xhr.status === 200) {
        //                 res(JSON.parse(xhr.responseText))
        //             } else {
        //                 rej()
        //             }
        //         }
        //     }

        //     xhr.open('GET', url, true)
        //     xhr.send()
        // })
    }
    
    render() {
        let block = document.querySelector(this.container)
        let htmlStr = ''
        this.items.forEach (item => {
            let newProd = new dependencies[this.constructor.name](item)
            htmlStr += newProd.render()
        })
        block.innerHTML = htmlStr
    }
 }

 class ListItem {
    constructor(obj, img = catalogImage) {
        this.item = obj
        this.img = img
    }
    render() {
        return `
            <div class="product-item">
                <img src="https://placehold.it/300x200" alt="${this.item.product_name}">
                <!--img src="${this.img}" width="300" height="200" alt="${this.item.product_name}"-->
                <div class="desc">
                    <h1>${this.item.product_name}</h1>
                    <p>${this.item.price}</p>
                    <button 
                    class="buy-btn" 
                    name="buy-btn"
                    data-name="${this.item.product_name}"
                    data-price="${this.item.price}"
                    data-id="${this.item.id_product}"
                    >Купить</button>
                </div>
            </div>
        `
    }
}
 
//CHILDREN
class Catalog extends List {
    constructor(cart, url = '/catalogData.json', container = '.products') {
        super(url, container);
        this.cart = cart
    }

    _init() {
        this.getData(API + this.url)
            .then(d => d.json())
            .then(data => { this.items = data })
            .finally (() => {
                this.render()
                this._eventHandler()
            })
    }

    _eventHandler() {
        document.querySelector (this.container).addEventListener ('click', (evt) => {
            if (evt.target.name === 'buy-btn') {
                this.cart.addProduct(evt.target)
            }
        })
    }
}

class Cart extends List {
    constructor(url = '/getBasket.json', container = '.cart-items') {
        super(url, container);
        this.quantityBlock = document.querySelector ('#quantity')
        this.priceBlock = document.querySelector ('#price')
    }

    _init() {
        this.getData(API + this.url)
            .then(d => d.json())
            .then(data => {
                this.items = data.contents
            })
            .finally (() => {
                this._render()
                this._eventHandler()
            })
    }

    _render () {
        this.render()
        this._checkTotalAndSum
    }

    _eventHandler() {
        document.querySelector (this.container).addEventListener ('click', (evt) => {
            if (evt.target.name === 'del-btn') {
                this.removeProduct(evt.target)
            }
        })
    }

    _findItem (item) {
        let result
        let id = Number(item.dataset.id)
        this.items.forEach(item => {
            if (item.id_product == id) {
                result = item
            }
        })
        return result
    }

    addProduct(item) {
        fetch(API + '/addToBasket.json')
            .then(d => d.json())
            .then(data => {
                //{result: 1}
                if (data.result) {
                    if (find = this._findItem (item)) {
                        find.quantity++
                    } else {
                        let obj = {
                            id_product: +item.dataset.id,
                            product_name: item.dataset.name,
                            price: +item.dataset.price,
                            quantity: 1
                        }
                        this.items.push (obj)
                    }
                    this._render()
                    console.log(`Add ${item.dataset.name}`)
                }
            })
    }

    removeProduct(item) {
        let find = this._findItem (item)
        if (find.quantity > 1) {
            find.quantity--
        } else {
            this.items.splice (this.items.indexOf(find), 1)
        }
         
        this._render ()
        console.log(`Removed ${item.dataset.name}`)
    }

    _checkTotalAndSum () {
        let total = 0
        let price = 0
        this.items.forEach (item => {
            total += item.quantity
            price += item.price * item.quantity
        })
        this.quantityBlock.innerText = total
        this.priceBlock.innerText = price
 }

 }

 class CatalogItem extends ListItem {}
 class CartItem extends ListItem {
     constructor(obj, img = cartImage) {
         super(obj, img)
     }
     render() {
         return `<div class="cart-item" data-id="${this.item.id_product}">
                    <img src="${this.img}" alt="">
                    <div class="product-desc">
                        <p class="product-title">${this.item.product_name}</p>
                        <p class="product-quantity">${this.item.quantity}</p>
                        <p class="product-single-price">${this.item.price}</p>
                    </div>
                    <div class="right-block">
                        <button name="del-btn" class="del-btn" 
                        data-id="${this.item.id_product}"
                        data-name="${this.item.product_name}">&times;</button>
                    </div>
                </div>`
     }
 }

let dependencies = {
    Catalog: CatalogItem,
    Cart: CartItem
}

 export default () => {
    let cart = new Cart()
    let catalog = new Catalog(cart)
 }
 

// let productList = []
// let url = './src/public/js/catalog.json'

// class ProductCart {
//     constructor (id) {
//         productList.forEach(item => {
//             if (item.id_product == id) {
//                 this.product = item
//             }
//         })
//         this.quantity = 1
//     }
// }

// function makeGETRequest(url) {
//     return new Promise (function (res, rej) {
//         var xhr = new XMLHttpRequest();

//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4) {
//                 xhr.status == 200 ? res(JSON.parse(xhr.responseText)) : rej(new Error(`Ошибка загрузки ${url}`))
//             }
//         }
    
//         xhr.open('GET', url, true);
//         xhr.send();
//     })
// }

// class Catalog {
//     constructor(cart) {
//         this.items = productList
//         this.container = '.products'
//         this.cart = cart
//         this._init ()
//     }

//     _init () {
//         this.render ()
//         this._handleEvents ()
//     }

//     _handleEvents () {
//         document.querySelector (this.container).addEventListener ('click', (evt) => {
//             if (evt.target.name === 'buy-btn') {
//                 this.cart.addProduct (evt.target)
//             }
//         })
//     }

//     render () {
//         let str = ''
//         this.items.forEach (item => {
//             str += `
//                 <div class="product-item">
//                     <img src="${item.img}" alt="${item.product_name}">
//                     <div class="desc">
//                         <h1>${item.product_name}</h1>
//                         <p>${item.price}</p>
//                         <button 
//                         class="buy-btn" 
//                         name="buy-btn"
//                         data-name="${item.product_name}"
//                         data-price="${item.price}"
//                         data-id="${item.id_product}"
//                         >Купить</button>
//                     </div>
//                 </div>
//             `
//         })

//         document.querySelector(this.container).innerHTML = str
//      }
// }

// class Cart {
//     constructor () {
//         this.items = []
//         this.total = 0
//         this.sum = 0
//         this.container = '.cart-block'
//         this.quantityBlock = document.querySelector ('#quantity')
//         this.priceBlock = document.querySelector ('#price')
//         this._init ()
//     }

//     _init () {
//         this._handleEvents ()
//     }

//     _handleEvents () {
//         document.querySelector (this.container).addEventListener ('click', (evt) => {
//             if (evt.target.name === 'del-btn') {
//                 this.deleteProduct (evt.target)
//             }
//         })
//     }

//     _findItem (id) {
//         let result
//         this.items.forEach(item => {
//             if (item.product.id_product == id) {
//                 result = item
//             }
//         })
//         return result
//     }
    
//     addProduct (product) {
//         let id = product.dataset['id']
//         if (find = this._findItem (id)) {
//             find.quantity++
//         } else {
//             this.items.push (new ProductCart(id))
//         }
         
//         this._checkTotalAndSum ()
//         this.render ()
//     }

//     deleteProduct (product) {
//         let id = product.dataset['id']
//         let find = this._SfindItem (id)
//         if (find.quantity > 1) {
//             find.quantity--
//         } else {
//             this.items.splice (this.items.indexOf(find), 1)
//         }
         
//         this._checkTotalAndSum ()
//         this.render ()
//     }
    
//     _checkTotalAndSum () {
//         let qua = 0
//         let pr = 0
//         this.items.forEach (item => {
//             qua += item.quantity
//             pr += item.product.price * item.quantity
//         })
//         this.total = qua
//         this.sum = pr
//     }

//     render () {
//         let itemsBlock = document.querySelector (this.container).querySelector ('.cart-items')
//         let str = ''
//         this.items.forEach (item => {
//             str += `<div class="cart-item" data-id="${item.product.id_product}">
//                     <img src="https://placehold.it/100x80" alt="">
//                     <div class="product-desc">
//                         <p class="product-title">${item.product.product_name}</p>
//                         <p class="product-quantity">${item.quantity}</p>
//                         <p class="product-single-price">${item.product.price}</p>
//                     </div>
//                     <div class="right-block">
//                         <button name="del-btn" class="del-btn" data-id="${item.product.id_product}">&times;</button>
//                     </div>
//                 </div>`
//         })

//         itemsBlock.innerHTML = str
//         this.quantityBlock.innerText = this.total
//         this.priceBlock.innerText = this.sum
//     }
//  }

// export default () => {
//     makeGETRequest (url)
//     .then (
//         list => {
//             productList = list
//             new Catalog(new Cart())
//         }
//     )
//     .catch (
//         err => alert(err)
//     )
// }

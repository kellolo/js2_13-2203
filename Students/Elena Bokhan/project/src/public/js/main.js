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
    }
    render() {
        let block = document.querySelector(this.container)
        let htmlStr = ''
        this.items.forEach(item => {
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
            .finally(() => {
                this.render()
                this._eventHandler()
            })
    }

    _eventHandler() {
        document.querySelector(this.container).addEventListener('click', (evt) => {
            if (evt.target.name === 'buy-btn') {
                this.cart.addProduct(evt.target)
            }
        })
    }
}
class Cart extends List {
    constructor(url = '/getBasket.json', container = '.cart-block') {
        super(url, container);
    }

    _init() {
        this.getData(API + this.url)
            .then(d => d.json())
            .then(data => { this.items = data.contents })
            .finally(() => {
                this.render()
                this._eventHandler()
            })
    }

    _eventHandler() {
        document.querySelector(this.container).addEventListener('click', (evt) => {
            if (evt.target.name === 'del-btn') {
                this.removeProduct(evt.target)
            }
        })
    }
    addProduct(item) {
        fetch(API + '/addToBasket.json')
            .then(d => d.json())
            .then(data => {
                if (data.result == 1) {
                    let name = item.dataset.name;
                    let find = this.items.find(product => product.product_name === name);//         
                    if (find) {
                        find.quantity++
                    } else {
                        debugger
                        let newProd = {
                            id_product: item.dataset.id,
                            product_name: item.dataset.name,
                            price: item.dataset.price,
                            quantity: 1
                        }
                        this.items.push(newProd);
                    }
                    //this._checkTotalAndSum()
                    this.render()
                }
            })
    }
    removeProduct(item) {
        fetch(API + '/deleteFromBasket.json')
            .then(d => d.json())
            .then(data => {
                if (data.result == 1) {
                    let name = item.dataset.name;
                    let find = this.items.find(product => product.product_name === name);//         
                    if (find.quantity > 1) {
                        find.quantity--
                    } else {
                        this.items.splice(this.items.indexOf(find), 1)
                    }
                    //this._checkTotalAndSum()
                    this.render()
                }
            })
    }
}

class CatalogItem extends ListItem { }
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

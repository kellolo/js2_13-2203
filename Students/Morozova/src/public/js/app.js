 //fake
 const catalogImage = 'https://placehold.it/200x150';
 const cartImage = 'https://placehold.it/100x80';
 const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
 //parents
 class List {
     constructor(url, container) {
         this.url = url;
         this.container = container;
         this.items = []
         this._init();
     }
     _init(){
        this.getData(API + this.url)
        .then(d => d.json())
        .then(data => {
          if (this.constructor.name == 'Catalog') {
            this.items = data
          } else if (this.constructor.name == 'Cart') {
            this.items = data.contents
            this._checkTotalAndSum()
            console.log(this)
        /* this.getData(this.url)
             .then(dataFromGetData => this.items = dataFromGetData)*/
         return false
     }
     getData(url) {
         return fetch(url)
         /*return new Promise ((res, rej)=> {
            let xhr = new XMLHttpRequest()
            
            xhr.onreadystatechange = () => {
                if(xhr.readyState === 4) {
                             if(xhr.status === 200) {
                                   res(JSON.parse(xhr.responseText))
                            } else {
                                    rej()
                              }
                           }
            }

            xhr.open('GET', url, true)
            xhr.send()
         })*/
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
 //children
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
 class Cart extends List {}

 class CatalogItem extends ListItem {}
 class CardItem extends ListItem {
    constructor(url = '/getBasket.json', container = '.cart-block') {
        super(url, container);
     }

     _init() {
        this.getData(API + this.url)
            .then(d => d.json())
            .then(data => { this.items = data.contents })
            .finally (() => {
                this.render()
                this._eventHandler()
            })
     }

     _eventHandler() {
        document.querySelector (this.container).addEventListener ('click', (evt) => {
            if (evt.target.name === 'del-btn') {
                this.removeProduct(evt.target)
            }
        })
     }
    addProduct(item) {
        fetch(API + '/addToBasket.json')
            .then(d => d.json())
            .then(data => {
                //{result: 1}
                if(data.result==1) {
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
                    this.render()
                }
            })
                    
                }
            
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
                this.render()
            }
        })

        
    }
 }
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

 let dependencies = {
    Catalog: CatalogItem,
    Cart: CartItem
}
export default () => {
    let cart = new Cart()
    let catalog = new Catalog(cart)
 }
 
 
 
 
 
 
 //ИМИТАЦИЯ РАБОТЫ БАЗЫ ДАННЫХ И СЕРВЕРА

 /*let PRODUCTS_NAMES = ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard']
 let PRICES = [100, 120, 1000, 15, 18]
 let IDS = [0, 1, 2, 3, 4]
 let IMGS = ['https://cs8.pikabu.ru/post_img/big/2017/12/25/5/1514188160141511997.jpg', 
 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/HMUB2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1563827752399',
 'https://zeon18.ru/files/item/Xiaomi-Mi-Notebook-Air-4G-Officially-Announced-Weboo-co-2%20(1)_1.jpg',
 'https://files.sandberg.it/products/images/lg/640-05_lg.jpg',
 'https://images-na.ssl-images-amazon.com/images/I/81PLqxtrJ3L._SX466_.jpg']

 //let products = [] //массив объектов
 
 class Catalog  {
     constructor (container, cart) {
    this.items = []
    this.container = container
    this.cart = null
    this.construct(cart)
}

    _init () {
        this._handleData ()
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
    _handleData () {
        for (let i = 0; i < IDS.length; i++) {
            this.items.push (this._createNewProduct (i))
        }
    }
    _createNewProduct (index) {
        return {
            product_name: PRODUCTS_NAMES [index],
            price: PRICES [index],
            id_product: IDS [index],
            img: IMGS [index]
        }
    }
    render () {
        let str = ''
        this.items.forEach (item => {
            str += `
                <div class="product-item">
                    <img src="https://placehold.it/300x200" alt="${item.product_name}">
                    <!--img src="${item.img}" width="300" height="200" alt="${item.product_name}"-->
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
   let Catalog = new Catalog('.products', null);

 class Cart {
     constructor () {
    this.items = []
    this.total = 0
    this.sum = 0
    this.container = '.cart-block'
    this.quantityBlock = document.querySelector ('#quantity')
    this.priceBlock = document.querySelector ('#price')

}
    construct () {
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
    addProduct (product) {
        let id = product.dataset['id']
        let find = this.items.find (product => product.id_product === id)
        if (find) {
            find.quantity++
        } else {
            let prod = this._createNewProduct (product)
            this.items.push (prod)
        }
         
        this._checkTotalAndSum ()
        this.render ()
    }
    _createNewProduct (prod) {
        return {
            product_name: prod.dataset['name'],
            price: prod.dataset['price'],
            id_product: prod.dataset['id'],
            quantity: 1
        }
    }
    deleteProduct (product) {
        let id = product.dataset['id']
        let find = this.items.find (product => product.id_product === id)
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
            pr += item.price * item.quantity
        })
        this.total = qua
        this.sum = pr
    }
    render () {
        let itemsBlock = document.querySelector (this.container).querySelector ('.cart-items')
        let str = ''
        this.items.forEach (item => {
            str += `<div class="cart-item" data-id="${item.id_product}">
                    <img src="https://placehold.it/100x80" alt="">
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
let Cart = new Cart();

 /*export default () => {
      catalog.construct (cart) //тут происходит создание объекта и вся прочая магия
      cart.construct ()
}*/
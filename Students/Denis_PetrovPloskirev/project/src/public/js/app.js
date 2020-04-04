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
    this.getData(API + this.url)
      .then(d => d.json())
      .then(data => {
        if (this.constructor.name == 'Catalog') {
          this.items = data
        } else if (this.constructor.name == 'Cart') {
          this.items = data.contents
          this._checkTotalAndSum()
          console.log(this)
        }
        
      })
      .finally(() => {
        this.render()
        this._eventHandler()
      })
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
   _eventHandler() {
    document.querySelector(this.container).addEventListener('click', (evt) => {
      if (evt.target.name === 'del-btn') {
        this.removeProduct(evt.target)
      } else if (evt.target.name === 'buy-btn') {
        this.cart.addProduct(evt.target)
      }
    })
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
 }
 class Cart extends List {
   constructor(url = '/getBasket.json', container = '.cart-items') {
     super(url, container);
   }
   addProduct(item) {
     fetch(API + '/addToBasket.json')
       .then(d => d.json())
       .then(data => {
         if (data.result == 1) {
           //доделать
           let id = +item.dataset['id']
           let find = this.items.find(elem => elem.id_product === id)
           if (find) {
             find.quantity++
           } else {
             let prod = this._createNewProduct(item)
             this.items.push(prod)
           }
           this._checkTotalAndSum()
           this.render()
           console.log(`Add ${item.dataset.name}`)
         }
       })
   }
   _createNewProduct(prod) {
     return {
       product_name: prod.dataset['name'],
       price: prod.dataset['price'],
       id_product: +prod.dataset['id'],
       quantity: 1
     }
   }
   removeProduct(item) {
     fetch(API + '/deleteFromBasket.json')
       .then(d => d.json())
       .then(data => {
         if (data.result == 1) {
           //доделать
           let id = +item.dataset['id']
           let find = this.items.find(elem => elem.id_product === id)
           if (find.quantity > 1) {
             find.quantity--
           } else {
             this.items.splice(this.items.indexOf(find), 1)
           }
           this._checkTotalAndSum()
           this.render()
           console.log(`Removed ${item.dataset.name}`)
         }
       })
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
         document.querySelector('#quantity').innerText = this.total
    document.querySelector('#price').innerText = this.sum
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
   window.addEventListener('DOMContentLoaded', () => {
    let cart = new Cart()
   let catalog = new Catalog(cart)
   })
 }






















//  // ДАЛЕЕ ЗАКОМЕНТИРОВАНА ЧАСТЬ С ПРОШЛОЙ ДОМАШКИ

//  //ИМИТАЦИЯ РАБОТЫ БАЗЫ ДАННЫХ И СЕРВЕРА

//  let PRODUCTS_NAMES = ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard']
//  let PRICES = [100, 120, 1000, 15, 18]
//  let IDS = [0, 1, 2, 3, 4]
//  let IMGS = ['https://cs8.pikabu.ru/post_img/big/2017/12/25/5/1514188160141511997.jpg',
//    'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/HMUB2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1563827752399',
//    'https://zeon18.ru/files/item/Xiaomi-Mi-Notebook-Air-4G-Officially-Announced-Weboo-co-2%20(1)_1.jpg',
//    'https://files.sandberg.it/products/images/lg/640-05_lg.jpg',
//    'https://images-na.ssl-images-amazon.com/images/I/81PLqxtrJ3L._SX466_.jpg'
//  ]

//  let products = [] //массив объектов

//  class Catalog {
//    constructor(container, url) {
//      this.items = []
//      this.container = container
//      this.cart = null
//      this.url = url
//    }

//    construct(cartObj) {
//      this.cart = cartObj
//      this._init() //_ - это обозначение инкапсулированного метода
//    }
//    _init() {
//      this._handleData(`${this.url}catalogData.json`)
//        .then(data => this.items = data)
//        .then(() => this.render())
//        .then(() => this._handleEvents())
//        .catch(xhr => console.dir(xhr))
//    }
//    _handleEvents() {
//      document.querySelector(this.container).addEventListener('click', (evt) => {
//        if (evt.target.name === 'buy-btn') {
//          this.cart.addProduct(evt.target, `${this.url}addToBasket.json`)
//        }
//      })
//    }
//    _handleData(url) {
//      return new Promise((res, rej) => {
//        let xhr = new XMLHttpRequest()
//        xhr.open('GET', url, true)
//        xhr.send()
//        xhr.onreadystatechange = () => {
//          if (xhr.readyState == 4) {
//            (xhr.status == 200) ? res(JSON.parse(xhr.responseText)): rej(xhr)
//          }
//        }
//      })
//    }
//    render() {
//      let str = ''
//      this.items.forEach(item => {
//        str += `
//                      <div class="product-item">
//                          <img src="https://placehold.it/300x200" alt="${item.product_name}">
//                          <!--img src="${item.img}" width="300" height="200" alt="${item.product_name}"-->
//                          <div class="desc">
//                              <h1>${item.product_name}</h1>
//                              <p>${item.price}</p>
//                              <button 
//                              class="buy-btn" 
//                              name="buy-btn"
//                              data-name="${item.product_name}"
//                              data-price="${item.price}"
//                              data-id="${item.id_product}"
//                              >Купить</button>
//                          </div>
//                      </div>
//                  `
//      })
//      document.querySelector(this.container).innerHTML = str
//    }
//  }

//  class Cart {
//    constructor(container, quaBlockID, priceBlockID, url) {
//      this.items = []
//      this.total = 0
//      this.sum = 0
//      this.container = container
//      this.quantityBlock = document.querySelector(quaBlockID)
//      this.priceBlock = document.querySelector(priceBlockID)
//      this.url = url
//    }

//    construct() {
//      this._init()
//    }
//    _init() {
//      this._handleEvents()
//    }
//    _handleEvents() {
//      document.querySelector(this.container).addEventListener('click', (evt) => {
//        if (evt.target.name === 'del-btn') {
//          this.deleteProduct(evt.target, `${this.url}deleteFromBasket.json`)
//        }
//      })
//    }
//    addProduct(product, url) {
//      let id = product.dataset['id']
//      let find = this.items.find(product => product.id_product === id)
//      this._makeServerRequest(url)
//        .then((data) => {this._pushToBasket(data, find, product)})
//        .then(() => this._checkTotalAndSum())
//        .then(() => this.render())
//        .catch((data) => console.log(data))
//    }
//    _pushToBasket(serverResponse, item, product) {
//      if (serverResponse.result == 1) {
//        if (item) {
//          item.quantity++
//        } else {
//          let prod = this._createNewProduct(product)
//          this.items.push(prod)
//        }
//        console.log('Ответ от сервера получен, товар добавлен в корзину')
//      } else {
//        console.log('Ответ от сервера отрицательный. Товар нельзя добавить в корзину')
//      }
//    }
//    _makeServerRequest(url) {
//      return new Promise((res, rej) => {
//        let xhr = new XMLHttpRequest()
//        xhr.open('GET', url, true)
//        xhr.send()
//        xhr.onreadystatechange = () => {
//          if (xhr.readyState == 4) {
//            (xhr.status == 200) ? res(JSON.parse(xhr.responseText)): rej(xhr)
//          }
//        }
//      })
//    }
//    _createNewProduct(prod) {
//      return {
//        product_name: prod.dataset['name'],
//        price: prod.dataset['price'],
//        id_product: prod.dataset['id'],
//        quantity: 1
//      }
//    }
//    deleteProduct(product, url) {
//      let id = product.dataset['id']
//      let find = this.items.find(product => product.id_product === id)
//      this._makeServerRequest(url)
//        .then((data) => {this._removeFromBasket(data, find)})
//        .then(() => this._checkTotalAndSum())
//        .then(() => this.render())
//        .catch((data) => console.log(data))
//    }
//    _removeFromBasket(serverResponse, item) {
//      if (serverResponse.result == 1) {
//        if (item.quantity > 1) {
//          item.quantity--
//        } else {
//          this.items.splice(this.items.indexOf(find), 1)
//        }
//        console.log('Ответ от сервера получен, товар удален из корзины')
//      }
//    }
//    _checkTotalAndSum() {
//      let qua = 0
//      let pr = 0
//      this.items.forEach(item => {
//        qua += item.quantity
//        pr += item.price * item.quantity
//      })
//      this.total = qua
//      this.sum = pr
//    }
  //  render() {
  //    let itemsBlock = document.querySelector(this.container).querySelector('.cart-items')
  //    let str = ''
  //    this.items.forEach(item => {
  //      str += `<div class="cart-item" data-id="${item.id_product}">
  //                    <img src="https://placehold.it/100x80" alt="">
  //                    <div class="product-desc">
  //                        <p class="product-title">${item.product_name}</p>
  //                        <p class="product-quantity">${item.quantity}</p>
  //                        <p class="product-single-price">${item.price}</p>
  //                    </div>
  //                    <div class="right-block">
  //                        <button name="del-btn" class="del-btn" data-id="${item.id_product}">&times;</button>
  //                    </div>
  //                </div>`
  //    })
  //    itemsBlock.innerHTML = str
  //    this.quantityBlock.innerText = this.total
  //    this.priceBlock.innerText = this.sum
  //  }
//  }



//  let cart = new Cart('.cart-block', '#quantity', '#price', 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/')
//  let catalog = new Catalog('.products', 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/')

//  export default () => {
//    cart.construct()
//    catalog.construct(cart) //тут происходит создание объекта и вся прочая магия
//  }
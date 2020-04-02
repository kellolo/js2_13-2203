//--------------------------------------server API---------------

const API_URL = 'https://raw.githubusercontent.com/stanislavfor/online-store-url/master/responses/';

function makeGETRequest(API_URL, callback) {
    return new Promise(function (resolve) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) { //4 === ok
                if (xhr.status == 200) { // 200 === ok
                    console.log(xhr)
                    console.log(xhr.responseText)
                    let a = JSON.parse(xhr.responseText);
                    resolve(a);
                    console.log(a)
                    console.log(JSON.stringify(a))
                    callback(xhr.responseText);
                }
            }
        }
        xhr.open('GET', API_URL, true);
        xhr.send();
    });
};
//makeGETRequest(API_URL);

//--------------------------------------class GoodsList---------------
class List {
    constructor(url, container, list = newlist) {
        this.container = container;
        this.list = list;
        this.url = url;
        this.goods = [];
        this.allProducts = [];
        this._init();
    }

    getJson(url) {
        return fetch(url ? url : `${API_URL + this.url}`)
            .then(result => result.json())
           
    }

    handleData(data) {
        this.goods = [...data];
        this.render();
    }
    calcSum() {
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            console.log(this.constructor.name);
            const productObj = new this.list[this.constructor.name](product);
            console.log(productObj);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }
    _init() {
        return false
    }
}


//--------------------------------------class GoodsItem---------------
class Item {
    constructor(el) {
        this.id_product = el.id_product;
        this.product_name = el.product_name;
        this.price = el.price;
        this.img = el.img;
    }
    render() { 
        return `<div class="product-item">
                <img class='item_image' src="${this.img}" alt="${this.product_name}">                    
                <div class="desc">
                    <h1>${this.product_name}</h1>
                    <p>${this.price}</p>
                    <button 
                    class="buy-btn" 
                    name="buy-btn"
                    data-name="${this.product_name}"
                    data-price="${this.price}"
                    data-id="${this.id_product}"
                    >Add to Cart</button>
                </div>
            </div>
            `
    }
}

//--------------------------------------class ProductList---------------
class ProductsList extends List {
    constructor(cart, container = '.products', url = "/catalogData.json") {
        super(url, container);
        this.cart = cart;
        this.getJson()
            .then(data => this.handleData(data));
    }
    _init() {
        document.querySelector(this.container).addEventListener('click', event => {
            if (event.target.classList.contains('buy-btn')) {
                this.cart.addProduct(event.target);
            }
        });

    }
}
class ProductItem extends Item { };

//--------------------------------------class Cart---------------
class Cart extends List {
    constructor(container = ".cart-block", url = "/getBasket.json") {
        super(url, container);
        this.getJson()
            .then(data => {
                this.handleData(data.contents);
            });
    }
    addProduct(element) {
        this.getJson(`${API_URL}/addToBasket.json`)
            .then(data => {
                if (data.result === 1) {
                    let productId = +element.dataset['id'];
                    let find = this.allProducts.find(product => product.id_product === productId);
                    if (find) {
                        find.quantity++;
                        this._updateCart(find);
                    } else {
                        let product = {
                            id_product: productId,
                            product_name: element.dataset['name'],
                            price: +element.dataset['price'],
                            img: "https://placehold.it/100x80",
                            quantity: 1

                        };
                        this.goods = [product];
                        this.render();
                    }
                } else {
                    alert('Error');
                }
            })
    }
    removeProduct(element) {
        this.getJson(`${API_URL}/deleteFromBasket.json`)
            .then(data => {
                if (data.result === 1) {
                    let productId = +element.dataset['id'];
                    let find = this.allProducts.find(product => product.id_product === productId);
                    if (find.quantity > 1) {
                        find.quantity--;
                        this._updateCart(find);
                    } else {
                        this.allProducts.splice(this.allProducts.indexOf(find), 1);
                        document.querySelector(`.cart-item[data-id="${productId}"]`).remove();
                    }
                } else {
                    alert('Error');
                }
            })
    }
    _updateCart(product) {
        let block = document.querySelector(`.cart-item[data-id="${product.id_product}"]`);
        block.querySelector('.product-quantity').textContent = `Quantity: ${product.quantity}`;
        block.querySelector('.product-price').textContent = `$${product.quantity * product.price}`;
    }
    _init() {
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('invisible');
        });
        document.querySelector(this.container).addEventListener('click', event => {
            if (event.target.classList.contains('del-btn')) {
                this.removeProduct(event.target);
            }
        })
    }

}

//--------------------------------------class CartItem---------------
class CartItem extends Item {
    constructor(el) {
        super(el);
        this.quantity = el.quantity;
    }
    render() {        
       return `<div class="cart-item" data-id="${this.id_product}">
                    <img src="${this.img}" width="100" height="80" alt="${this.product_name}">
                    <div class="product-desc">
                        <p class="product-title">${this.product_name}</p>
                        <p class="product-quantity">${this.quantity}</p>
                        <p class="product-single-price">${this.price}</p>
                    </div>
                    <div class="right-block">
                        <button name="del-btn" class="del-btn" data-id="${this.id_product}">&times;</button>
                    </div>
                </div>
                `
    }
}


let newlist = {ProductsList: ProductItem, Cart: CartItem};
let cart = new Cart();
let products = new ProductsList(cart);
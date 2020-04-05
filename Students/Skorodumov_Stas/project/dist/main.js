/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/css/style.css */ \"./src/public/css/style.css\");\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_css_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/css/normalize.css */ \"./src/public/css/normalize.css\");\n/* harmony import */ var _public_css_normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_css_normalize_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_js_app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/js/app.js */ \"./src/public/js/app.js\");\n\r\n\r\n\r\n\r\n\r\nObject(_public_js_app_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/css/normalize.css":
/*!**************************************!*\
  !*** ./src/public/css/normalize.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/public/css/normalize.css?");

/***/ }),

/***/ "./src/public/css/style.css":
/*!**********************************!*\
  !*** ./src/public/css/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/public/css/style.css?");

/***/ }),

/***/ "./src/public/js/app.js":
/*!******************************!*\
  !*** ./src/public/js/app.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//--------------------------------------server API---------------\n\nconst API_URL = 'https://raw.githubusercontent.com/stanislavfor/online-store-url/master/responses/';\n\n/*function makeGETRequest(API_URL, callback) {\n    return new Promise(function (resolve) {\n        let xhr = new XMLHttpRequest();\n        xhr.onreadystatechange = function () {\n            if (xhr.readyState === 4) { //4 === ok\n                if (xhr.status == 200) { // 200 === ok\n                    console.log(xhr)\n                    console.log(xhr.responseText)\n                    let a = JSON.parse(xhr.responseText);\n                    resolve(a);\n                    console.log(a)\n                    console.log(JSON.stringify(a))\n                    callback(xhr.responseText);\n                }\n            }\n        }\n        xhr.open('GET', API_URL, true);\n        xhr.send();\n    });\n};*/\n//makeGETRequest(API_URL);\n\n//-------------------PARENTS-------------------\n//--------------------------------------class List---------------\nclass List {\n    constructor(url, container, list = newlist) {\n        this.container = container;\n        this.list = list;\n        this.url = url;\n        this.goods = [];\n        this.allProducts = [];\n        this._init();\n    }\n    \n    _init() {\n        return false\n    }\n\n    getData(url) {\n        \n        return fetch(url ? url : `${API_URL + this.url}`)\n            .then(result => result.json())\n           \n    }\n\n    handleData(data) {\n        this.goods = [...data];\n        this.render();\n    }\n    calcSum() {\n        return this.allProducts.reduce((accum, item) => accum += item.price, 0);\n    }\n    render() {\n        const block = document.querySelector(this.container);\n        for (let product of this.goods) {\n            console.log(this.constructor.name);\n            const productObj = new this.list[this.constructor.name](product);\n            console.log(productObj);\n            this.allProducts.push(productObj);\n            block.insertAdjacentHTML('beforeend', productObj.render());\n        }\n    }\n\n}\n\n\n//--------------------------------------class ListItem---------------\nclass ListItem {\n    constructor(obj) {\n        this.id_product = obj.id_product;\n        this.product_name = obj.product_name;\n        this.price = obj.price;\n        this.img = obj.img;\n    }\n    render() { \n        return `<div class=\"product-item\">\n                <img class='item_image' src=\"${this.img}\" alt=\"${this.product_name}\">                  \n                <div class=\"desc\">\n                    <h1>${this.product_name}</h1>\n                    <p>${this.price}</p>\n                    <button \n                    class=\"buy-btn\" \n                    name=\"buy-btn\"\n                    data-name=\"${this.product_name}\"\n                    data-price=\"${this.price}\"\n                    data-id=\"${this.id_product}\" \n                    data-pic=\"${this.img}\"\n                    >Add to Cart</button>\n                </div>\n            </div>\n            `\n    }\n}\n\n//-------------------CHILDREN-------------------\n//--------------------------------------class Catalog---------------\nclass Catalog extends List {\n    constructor(cart, container = '.products', url = \"/catalogData.json\") {\n        super(url, container);\n        this.cart = cart;\n        this.getData()\n            .then(data => this.handleData(data));\n    }\n    _init() {\n        document.querySelector(this.container).addEventListener('click', event => {\n            if (event.target.classList.contains('buy-btn')) {\n                this.cart.addProduct(event.target);\n            }\n        });\n\n    }\n}\n\n//--------------------------------------class Cart---------------\nclass Cart extends List {\n    constructor(container = \".cart-block\", url = \"/getBasket.json\") {\n        super(url, container);\n        this.getData()\n            .then(data => {\n                this.handleData(data.contents);\n            });\n    }\n    \n    _init() {\n        document.querySelector('.btn-cart').addEventListener('click', () => {\n            document.querySelector(this.container).classList.toggle('invisible');\n        });\n        document.querySelector(this.container).addEventListener('click', event => {\n            if (event.target.classList.contains('del-btn')) {\n                this.removeProduct(event.target);\n            }\n        })\n    }     \n    \n    addProduct(item) {\n        this.getData(`${API_URL}/addToBasket.json`)\n            .then(data => {\n                if (data.result === 1) {\n                    let productId = +item.dataset.id;\n                    let imgData = item.dataset.pic;\n                    let find = this.allProducts.find(product => product.id_product === productId);\n                    if (find) {\n                        find.quantity++;\n                        this._updateCart(find);\n                    } else {\n                        let product = {\n                            id_product: productId,\n                            product_name: item.dataset.name,\n                            price: +item.dataset.price,\n                            img: imgData, //доделать картинку\n                            quantity: 1\n                        };                        \n                        this.goods = [product];\n                        this.render();\n                    }\n                } else {\n                    alert('Error');\n                }\n            console.log(`Add ${item.dataset.name}`)\n            })\n    }\n    \n    removeProduct(item) {\n        this.getData(`${API_URL}/deleteFromBasket.json`)\n            .then(data => {\n                if (data.result === 1) {\n                    let productId = +item.dataset['id'];\n                    let find = this.allProducts.find(product => product.id_product === productId);\n                    if (find.quantity > 1) {\n                        find.quantity--;\n                        this._updateCart(find);\n                    } else {\n                        this.allProducts.splice(this.allProducts.indexOf(find), 1);\n                        document.querySelector(`.cart-item[data-id=\"${productId}\"]`).remove();\n                    }\n                } else {\n                    alert('Error');\n                }\n            })\n    }\n    // доделать textcontent\n    _updateCart(product) {\n        let block = document.querySelector(`.cart-item[data-id=\"${product.id_product}\"]`);\n        block.querySelector('.product-quantity').textContent = `Quantity: ${product.quantity}`;\n        block.querySelector('.product-price').textContent = `$${product.quantity * product.price}`;\n    }\n}\n\n//-------------------class CatalogItem-------------------\nclass CatalogItem extends ListItem { };\n\n//-------------------class CartItem-------------------\nclass CartItem extends ListItem {\n    constructor(obj) {\n        super(obj);\n        this.quantity = obj.quantity;\n    }\n    render() {        \n       return `<div class=\"cart-item\" data-id=\"${this.id_product}\">\n                    <img src=\"${this.img}\" width=\"100\" height=\"80\" alt=\"${this.product_name}\">\n                    <div class=\"product-desc\">\n                        <p class=\"product-title\">${this.product_name}</p>\n                        <p class=\"product-quantity\">${this.quantity}</p>\n                        <p class=\"product-single-price\">${this.price}</p>\n                    </div>\n                    <div class=\"right-block\">\n                        <button name=\"del-btn\" class=\"del-btn\" data-id=\"${this.id_product}\">&times;</button>\n                    </div>\n                </div>\n                `\n    }\n}\n\n//-------------------dependencies and export-------------------\nlet newlist = {Catalog: CatalogItem, Cart: CartItem};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n let cart = new Cart()\n let catalog = new Catalog(cart)\n});\n\n\n//# sourceURL=webpack:///./src/public/js/app.js?");

/***/ })

/******/ });
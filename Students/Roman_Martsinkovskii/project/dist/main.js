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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/css/style.css */ \"./src/public/css/style.css\");\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_css_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/css/normalize.css */ \"./src/public/css/normalize.css\");\n/* harmony import */ var _public_css_normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_css_normalize_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_js_app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/js/app.js */ \"./src/public/js/app.js\");\n\n\n\n\n\nObject(_public_js_app_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n//ИМИТАЦИЯ РАБОТЫ БАЗЫ ДАННЫХ И СЕРВЕРА\n\n// let PRODUCTS_NAMES = ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard']\n// let PRICES = [100, 120, 1000, 15, 18]\n// let IDS = [0, 1, 2, 3, 4]\n// let IMGS = ['https://cs8.pikabu.ru/post_img/big/2017/12/25/5/1514188160141511997.jpg',\n//     'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/HMUB2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1563827752399',\n//     'https://zeon18.ru/files/item/Xiaomi-Mi-Notebook-Air-4G-Officially-Announced-Weboo-co-2%20(1)_1.jpg',\n//     'https://files.sandberg.it/products/images/lg/640-05_lg.jpg',\n//     'https://images-na.ssl-images-amazon.com/images/I/81PLqxtrJ3L._SX466_.jpg']\n\n//let products = [] //массив объектов\n\nclass Catalog {\n    constructor(container, url) {\n        this.items = []\n        this.container = container\n        this.cart = null\n        this.url = url\n    }\n    construct(cartObj) {\n        this.cart = cartObj\n        this._init() //_ - это обозначение инкапсулированного метода\n    }\n    _init() {\n        this._handleData(`${this.url}catalogData.json`)\n            .then(data => this.items = data)\n            .then(() => this.render())\n            .then(() => this._handleEvents())\n            .catch(xhr => console.dir(xhr))\n    }\n    _handleEvents() {\n        document.querySelector(this.container).addEventListener('click', (evt) => {\n            if (evt.target.name === 'buy-btn') {\n                this.cart.addProduct(evt.target, `${this.url}addToBasket.json`)\n            }\n        })\n    }\n    _handleData(url) {\n        return new Promise((res, rej) => {\n            let xhr = new XMLHttpRequest()\n            xhr.open('GET', url, true)\n            xhr.send()\n            xhr.onreadystatechange = () => {\n                if (xhr.readyState == 4) {\n                    (xhr.status == 200) ? res(JSON.parse(xhr.responseText)): rej(xhr)\n                }\n            }\n        })\n    }\n    render() {\n        let str = ''\n        this.items.forEach(item => {\n            str += `\n                  <div class=\"product-item\">\n                      <img src=\"https://placehold.it/300x200\" alt=\"${item.product_name}\">\n                      <!--img src=\"${item.img}\" width=\"300\" height=\"200\" alt=\"${item.product_name}\"-->\n                      <div class=\"desc\">\n                          <h1>${item.product_name}</h1>\n                          <p>${item.price}</p>\n                          <button \n                          class=\"buy-btn\" \n                          name=\"buy-btn\"\n                          data-name=\"${item.product_name}\"\n                          data-price=\"${item.price}\"\n                          data-id=\"${item.id_product}\"\n                          >Купить</button>\n                      </div>\n                  </div>\n              `\n        })\n        document.querySelector(this.container).innerHTML = str\n    }\n}\n\nclass Cart {\n    constructor(container, quaBlockID, priceBlockID, url) {\n        this.items = []\n        this.total = 0\n        this.sum = 0\n        this.container = container\n        this.quantityBlock = document.querySelector(quaBlockID)\n        this.priceBlock = document.querySelector(priceBlockID)\n        this.url = url\n    }\n\n    construct() {\n        this._init()\n    }\n    _init() {\n        this._handleEvents()\n    }\n    _handleEvents() {\n        document.querySelector(this.container).addEventListener('click', (evt) => {\n            if (evt.target.name === 'del-btn') {\n                this.deleteProduct(evt.target, `${this.url}deleteFromBasket.json`)\n            }\n        })\n    }\n    addProduct(product, url) {\n        let id = product.dataset['id']\n        let find = this.items.find(product => product.id_product === id)\n        this._makeServerRequest(url)\n            .then((data) => {\n                this._pushToBasket(data, find, product)\n            })\n            .then(() => this._checkTotalAndSum())\n            .then(() => this.render())\n            .catch((data) => console.log(data))\n    }\n    _pushToBasket(serverResponse, item, product) {\n        if (serverResponse.result == 1) {\n            if (item) {\n                item.quantity++\n            } else {\n                let prod = this._createNewProduct(product)\n                this.items.push(prod)\n            }\n            console.log('Товар добавлен в корзину')\n        } else {\n            console.log('Товар нельзя добавить в корзину')\n        }\n    }\n    _makeServerRequest(url) {\n        return new Promise((res, rej) => {\n            let xhr = new XMLHttpRequest()\n            xhr.open('GET', url, true)\n            xhr.send()\n            xhr.onreadystatechange = () => {\n                if (xhr.readyState == 4) {\n                    (xhr.status == 200) ? res(JSON.parse(xhr.responseText)): rej(xhr)\n                }\n            }\n        })\n    }\n    _createNewProduct(prod) {\n        return {\n            product_name: prod.dataset['name'],\n            price: prod.dataset['price'],\n            id_product: prod.dataset['id'],\n            quantity: 1\n        }\n    }\n    deleteProduct(product, url) {\n        let id = product.dataset['id']\n        let find = this.items.find(product => product.id_product === id)\n        this._makeServerRequest(url)\n            .then((data) => {\n                this._removeFromBasket(data, find)\n            })\n            .then(() => this._checkTotalAndSum())\n            .then(() => this.render())\n            .catch((data) => console.log(data))\n    }\n    _removeFromBasket(serverResponse, item) {\n        if (serverResponse.result == 1) {\n            if (item.quantity > 1) {\n                item.quantity--\n            } else {\n                this.items.splice(this.items.indexOf(find), 1)\n            }\n            console.log('Товар удален из корзины')\n        }\n    }\n    _checkTotalAndSum() {\n        let qua = 0\n        let pr = 0\n        this.items.forEach(item => {\n            qua += item.quantity\n            pr += item.price * item.quantity\n        })\n        this.total = qua\n        this.sum = pr\n    }\n    render() {\n        let itemsBlock = document.querySelector(this.container).querySelector('.cart-items')\n        let str = ''\n        this.items.forEach(item => {\n            str += `<div class=\"cart-item\" data-id=\"${item.id_product}\">\n                              <img src=\"https://placehold.it/100x80\" alt=\"\">\n                              <div class=\"product-desc\">\n                                  <p class=\"product-title\">${item.product_name}</p>\n                                  <p class=\"product-quantity\">${item.quantity}</p>\n                                  <p class=\"product-single-price\">${item.price}</p>\n                              </div>\n                              <div class=\"right-block\">\n                                  <button name=\"del-btn\" class=\"del-btn\" data-id=\"${item.id_product}\">&times;</button>\n                              </div>\n                          </div>`\n        })\n        itemsBlock.innerHTML = str\n        this.quantityBlock.innerText = this.total\n        this.priceBlock.innerText = this.sum\n    }\n}\nlet cart = new Cart('.cart-block', '#quantity', '#price', 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/')\nlet catalog = new Catalog('.products', 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/')\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n    cart.construct()\n    catalog.construct(cart) //тут происходит создание объекта и вся прочая магия \n});\n\n\n//# sourceURL=webpack:///./src/public/js/app.js?");

/***/ })

/******/ });
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/css/style.css */ \"./src/public/css/style.css\");\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_css_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/css/normalize.css */ \"./src/public/css/normalize.css\");\n/* harmony import */ var _public_css_normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_css_normalize_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_js_app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/js/app.js */ \"./src/public/js/app.js\");\n\r\n\r\n\r\n\r\nObject(_public_js_app_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n//--------------------------------------DB imitation---------------\n\nlet PRODUCTS_NAMES = ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard']\nlet PRICES = [100, 120, 1000, 15, 18]\nlet IDS = [0, 1, 2, 3, 4]\nlet IMGS = [\n    'https://i.ibb.co/s9gr3sF/1514188160141511997.jpg',\n    'https://i.ibb.co/Y8FLz2v/HMUB2.png',\n    'https://i.ibb.co/P1HmQS7/Xiaomi-Mi-Notebook-Air.jpg',\n    'https://i.ibb.co/jfYmLvN/640-05-lg.jpg',\n    'https://i.ibb.co/nbJxcp2/81-PLqxtr-J3-L-SX466.png'\n]\n//let products = [] //массив объектов\n\n//--------------------------------------class Catalog---------------\nclass Catalog {\n    constructor(PRODUCTS_NAMES, PRICES, IDS, IMGS, cart = null) {\n        this.items = []\n        this.container = '.products'\n        this.cart = cart\n        this._init(PRODUCTS_NAMES, PRICES, IDS, IMGS) //_ - это обозначение инкапсулированного метода\n    }\n    _init(PRODUCTS_NAMES, PRICES, IDS, IMGS) {\n        this._handleData()\n        this.render()\n        this._handleEvents()\n        this.IDS = IDS\n    }\n    _handleEvents() {\n        document.querySelector(this.container).addEventListener('click', (evt) => {\n            if (evt.target.name === 'buy-btn') {\n                this.cart.addProduct(evt.target)\n            }\n        })\n    }\n    _handleData() {\n        for (let i = 0; i < IDS.length; i++) {\n            this.items.push(this._createNewProduct(i))\n        }\n    }\n    _createNewProduct(index) {\n        return {\n            product_name: PRODUCTS_NAMES[index],\n            price: PRICES[index],\n            id_product: IDS[index],\n            img: IMGS[index]\n        }\n    }\n\n    // src=\"https://placehold.it/300x200\"\n    render() {\n        let str = ''\n        this.items.forEach(item => {\n            str += `\n                <div class=\"product-item\">\n                    <img class='item_image' src=\"${item.img}\" alt=\"${item.product_name}\">                    \n                    <div class=\"desc\">\n                        <h1>${item.product_name}</h1>\n                        <p>${item.price}</p>\n                        <button \n                        class=\"buy-btn\" \n                        name=\"buy-btn\"\n                        data-name=\"${item.product_name}\"\n                        data-price=\"${item.price}\"\n                        data-id=\"${item.id_product}\"\n                        >Купить</button>\n                    </div>\n                </div>\n            `\n        })\n        document.querySelector(this.container).innerHTML = str\n    }\n}\n\n//--------------------------------------class Cart---------------\nclass Cart {\n    constructor() {\n        this.items = []\n        this.total = 0\n        this.sum = 0\n        this.container = '.cart-block'\n        this.quantityBlock = document.querySelector('#quantity')\n        this.priceBlock = document.querySelector('#price')\n        this._init()\n\n    }\n    _init() {\n        this._handleEvents()\n    }\n    _handleEvents() {\n        document.querySelector(this.container).addEventListener('click', (evt) => {\n            if (evt.target.name === 'del-btn') {\n                this.deleteProduct(evt.target)\n            }\n        })\n    }\n    addProduct(product) {\n        let id = product.dataset['id']\n        let find = this.items.find(product => product.id_product === id)\n        if (find) {\n            find.quantity++\n        } else {\n            let prod = this._createNewProduct(product)\n            this.items.push(prod)\n        }\n        this._checkTotalAndSum()\n        this.render()\n    }\n    _createNewProduct(prod) {\n        return {\n            product_name: prod.dataset['name'],\n            price: prod.dataset['price'],\n            id_product: prod.dataset['id'],\n            quantity: 1,\n            img: IMGS[(prod.dataset['id'])]\n        }\n    }\n    deleteProduct(product) {\n        let id = product.dataset['id']\n        let find = this.items.find(product => product.id_product === id)\n        if (find.quantity > 1) {\n            find.quantity--\n        } else {\n            this.items.splice(this.items.indexOf(find), 1)\n        }\n\n        this._checkTotalAndSum()\n        this.render()\n    }\n\n    _checkTotalAndSum() {\n        let qua = 0\n        let pr = 0\n        this.items.forEach(item => {\n            qua += item.quantity\n            pr += item.price * item.quantity\n        })\n        this.total = qua\n        this.sum = pr\n    }\n\n    //src=\"https://placehold.it/100x80\"\n    render() {\n        let itemsBlock = document.querySelector(this.container).querySelector('.cart-items')\n        let str = ''\n        this.items.forEach(item => {\n            str += `<div class=\"cart-item\" data-id=\"${item.id_product}\">\n                    <img src=\"${item.img}\" width=\"100\" height=\"80\" alt=\"${item.product_name}\">\n                    <div class=\"product-desc\">\n                        <p class=\"product-title\">${item.product_name}</p>\n                        <p class=\"product-quantity\">${item.quantity}</p>\n                        <p class=\"product-single-price\">${item.price}</p>\n                    </div>\n                    <div class=\"right-block\">\n                        <button name=\"del-btn\" class=\"del-btn\" data-id=\"${item.id_product}\">&times;</button>\n                    </div>\n                </div>`\n        })\n        itemsBlock.innerHTML = str\n        this.quantityBlock.innerText = this.total\n        this.priceBlock.innerText = this.sum\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n    new Catalog(PRODUCTS_NAMES, PRICES, IDS, IMGS, new Cart()) //тут происходит создание объекта и вся прочая магия\n    new Cart()\n});\n\n\n//# sourceURL=webpack:///./src/public/js/app.js?");

/***/ })

/******/ });
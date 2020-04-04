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
eval("__webpack_require__.r(__webpack_exports__);\n //ИМИТАЦИЯ РАБОТЫ БАЗЫ ДАННЫХ И СЕРВЕРА\r\n\r\n let PRODUCTS_NAMES = ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard']\r\n let PRICES = [100, 120, 1000, 15, 18]\r\n let IDS = [0, 1, 2, 3, 4]\r\n let IMGS = ['https://cs8.pikabu.ru/post_img/big/2017/12/25/5/1514188160141511997.jpg', \r\n 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/HMUB2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1563827752399',\r\n 'https://zeon18.ru/files/item/Xiaomi-Mi-Notebook-Air-4G-Officially-Announced-Weboo-co-2%20(1)_1.jpg',\r\n 'https://files.sandberg.it/products/images/lg/640-05_lg.jpg',\r\n 'https://images-na.ssl-images-amazon.com/images/I/81PLqxtrJ3L._SX466_.jpg']\r\n\r\n //let products = [] //массив объектов\r\n \r\n let catalog = {\r\n    items: [],\r\n    container: '.products',\r\n    cart: null,\r\n    construct (cart) {\r\n        this.cart = cart\r\n        this._init () //_ - это обозначение инкапсулированного метода\r\n    },\r\n    _init () {\r\n        this._handleData ()\r\n        this.render ()\r\n        this._handleEvents ()\r\n    },\r\n    _handleEvents () {\r\n        document.querySelector (this.container).addEventListener ('click', (evt) => {\r\n            if (evt.target.name === 'buy-btn') {\r\n                this.cart.addProduct (evt.target)\r\n            }\r\n        })\r\n    },\r\n    _handleData () {\r\n        for (let i = 0; i < IDS.length; i++) {\r\n            this.items.push (this._createNewProduct (i))\r\n        }\r\n    },\r\n    _createNewProduct (index) {\r\n        return {\r\n            product_name: PRODUCTS_NAMES [index],\r\n            price: PRICES [index],\r\n            id_product: IDS [index],\r\n            img: IMGS [index]\r\n        }\r\n    },\r\n    render () {\r\n        let str = ''\r\n        this.items.forEach (item => {\r\n            str += `\r\n                <div class=\"product-item\">\r\n                    <img src=\"https://placehold.it/300x200\" alt=\"${item.product_name}\">\r\n                    <!--img src=\"${item.img}\" width=\"300\" height=\"200\" alt=\"${item.product_name}\"-->\r\n                    <div class=\"desc\">\r\n                        <h1>${item.product_name}</h1>\r\n                        <p>${item.price}</p>\r\n                        <button \r\n                        class=\"buy-btn\" \r\n                        name=\"buy-btn\"\r\n                        data-name=\"${item.product_name}\"\r\n                        data-price=\"${item.price}\"\r\n                        data-id=\"${item.id_product}\"\r\n                        >Купить</button>\r\n                    </div>\r\n                </div>\r\n            `\r\n        })\r\n        document.querySelector(this.container).innerHTML = str\r\n     }\r\n }\r\n\r\n let cart = {\r\n    items: [],\r\n    total: 0,\r\n    sum: 0,\r\n    container: '.cart-block',\r\n    quantityBlock: document.querySelector ('#quantity'),\r\n    priceBlock: document.querySelector ('#price'),\r\n    construct () {\r\n        this._init ()\r\n    },\r\n    _init () {\r\n        this._handleEvents ()\r\n    },\r\n    _handleEvents () {\r\n        document.querySelector (this.container).addEventListener ('click', (evt) => {\r\n            if (evt.target.name === 'del-btn') {\r\n                this.deleteProduct (evt.target)\r\n            }\r\n        })\r\n    },\r\n    addProduct (product) {\r\n        let id = product.dataset['id']\r\n        let find = this.items.find (product => product.id_product === id)\r\n        if (find) {\r\n            find.quantity++\r\n        } else {\r\n            let prod = this._createNewProduct (product)\r\n            this.items.push (prod)\r\n        }\r\n         \r\n        this._checkTotalAndSum ()\r\n        this.render ()\r\n    },\r\n    _createNewProduct (prod) {\r\n        return {\r\n            product_name: prod.dataset['name'],\r\n            price: prod.dataset['price'],\r\n            id_product: prod.dataset['id'],\r\n            quantity: 1\r\n        }\r\n    },\r\n    deleteProduct (product) {\r\n        let id = product.dataset['id']\r\n        let find = this.items.find (product => product.id_product === id)\r\n        if (find.quantity > 1) {\r\n            find.quantity--\r\n        } else {\r\n            this.items.splice (this.items.indexOf(find), 1)\r\n        }\r\n         \r\n        this._checkTotalAndSum ()\r\n        this.render ()\r\n    },\r\n    \r\n    _checkTotalAndSum () {\r\n        let qua = 0\r\n        let pr = 0\r\n        this.items.forEach (item => {\r\n            qua += item.quantity\r\n            pr += item.price * item.quantity\r\n        })\r\n        this.total = qua\r\n        this.sum = pr\r\n    },\r\n    render () {\r\n        let itemsBlock = document.querySelector (this.container).querySelector ('.cart-items')\r\n        let str = ''\r\n        this.items.forEach (item => {\r\n            str += `<div class=\"cart-item\" data-id=\"${item.id_product}\">\r\n                    <img src=\"https://placehold.it/100x80\" alt=\"\">\r\n                    <div class=\"product-desc\">\r\n                        <p class=\"product-title\">${item.product_name}</p>\r\n                        <p class=\"product-quantity\">${item.quantity}</p>\r\n                        <p class=\"product-single-price\">${item.price}</p>\r\n                    </div>\r\n                    <div class=\"right-block\">\r\n                        <button name=\"del-btn\" class=\"del-btn\" data-id=\"${item.id_product}\">&times;</button>\r\n                    </div>\r\n                </div>`\r\n        })\r\n        itemsBlock.innerHTML = str\r\n        this.quantityBlock.innerText = this.total\r\n        this.priceBlock.innerText = this.sum\r\n    }\r\n }\r\n\r\n /* harmony default export */ __webpack_exports__[\"default\"] = (() =>\r\n {\r\n    catalog.construct (cart) //тут происходит создание объекта и вся прочая магия\r\n    cart.construct ()\r\n });\r\n \r\n\n\n//# sourceURL=webpack:///./src/public/js/app.js?");

/***/ })

/******/ });
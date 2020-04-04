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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/css/style.css */ \"./src/public/css/style.css\");\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_css_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/css/normalize.css */ \"./src/public/css/normalize.css\");\n/* harmony import */ var _public_css_normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_css_normalize_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_js_app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/js/app.js */ \"./src/public/js/app.js\");\n\n\n\n\nObject(_public_js_app_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n//# sourceURL=webpack:///./src/index.js?");

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

/***/ "./src/public/js/api.js":
/*!******************************!*\
  !*** ./src/public/js/api.js ***!
  \******************************/
/*! exports provided: getCatalog, getCart, addToCart, deleteFromCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCatalog\", function() { return getCatalog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCart\", function() { return getCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToCart\", function() { return addToCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteFromCart\", function() { return deleteFromCart; });\n\n\n//XMLHttpRequest\nconst catalogUrl = './src/public/json/catalog.json';\nconst cartUrl = './src/public/json/getCart.json';\nconst addToCartUrl = './src/public/json/addToCart.json';\nconst delereFromCartUrl = './src/public/json/deleteFromCart.json';\n\nfunction makeGETRequest(url) {\n    return new Promise((resolve, reject) => {\n\n        const xhr = new XMLHttpRequest();\n\n        xhr.onreadystatechange = function() {\n            if (xhr.readyState === 4) {\n                if (xhr.status == 200) {\n                    let data = JSON.parse(xhr.responseText);\n                    resolve(data);\n                } else {\n                    reject('Error ' + xhr.response);\n                }\n            }\n        };\n\n        xhr.open('GET', url, true);\n        xhr.send();\n    });\n}\n\nconst getCatalog = () => makeGETRequest(catalogUrl);\nconst getCart = () => makeGETRequest(cartUrl);\nconst addToCart = () => makeGETRequest(addToCartUrl); //post\nconst deleteFromCart = () => makeGETRequest(delereFromCartUrl); //delete\n\n\n//# sourceURL=webpack:///./src/public/js/api.js?");

/***/ }),

/***/ "./src/public/js/app.js":
/*!******************************!*\
  !*** ./src/public/js/app.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/api.js */ \"./src/public/js/api.js\");\n//ИМИТАЦИЯ РАБОТЫ БАЗЫ ДАННЫХ И СЕРВЕРА\n\n// let PRODUCTS_NAMES = [\"Processor\", \"Display\", \"Notebook\", \"Mouse\", \"Keyboard\"];\n// let PRICES = [100, 120, 1000, 15, 18];\n// let IDS = [0, 1, 2, 3, 4];\n// let IMGS = [\n//   \"https://cs8.pikabu.ru/post_img/big/2017/12/25/5/1514188160141511997.jpg\",\n//   \"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/HMUB2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1563827752399\",\n//   \"https://zeon18.ru/files/item/Xiaomi-Mi-Notebook-Air-4G-Officially-Announced-Weboo-co-2%20(1)_1.jpg\",\n//   \"https://files.sandberg.it/products/images/lg/640-05_lg.jpg\",\n//   \"https://images-na.ssl-images-amazon.com/images/I/81PLqxtrJ3L._SX466_.jpg\"\n// ];\n\n\n\n// let products = [] //массив объектов\n\nclass Catalog {\n  constructor(cart) {\n    this.container = \".products\";\n    this.items = [];\n    this.cart = cart;\n    this._init(); //_ - это обозначение инкапсулированного метода\n  }\n\n  _init() {\n    Object(_js_api_js__WEBPACK_IMPORTED_MODULE_0__[\"getCatalog\"])()\n      .then(items => (this.items = items))\n      .then(() => {\n        this.render();\n        this._handleEvents();\n      })\n      .catch(() => alert(\"Somthing went wrong\"));\n  }\n\n  _handleEvents() {\n    document.querySelector(this.container).addEventListener(\"click\", evt => {\n      if (evt.target.name === \"buy-btn\") {\n        this.cart.addProduct(evt.target);\n      }\n    });\n  }\n\n  // _handleData() {\n  //   for (let i = 0; i < IDS.length; i++) {\n  //     this.items.push(this._createNewProduct(i));\n  //   }\n  // }\n\n  // _createNewProduct(index) {\n  //   return {\n  //     product_name: PRODUCTS_NAMES[index],\n  //     price: PRICES[index],\n  //     id_product: IDS[index],\n  //     img: IMGS[index]\n  //   };\n  // }\n\n  render() {\n    let str = \"\";\n    this.items.forEach(item => {\n      str += `\n                <div class=\"product-item\">\n                    <img src=\"https://placehold.it/300x200\" alt=\"${item.product_name}\">\n                    <!--img src=\"${item.img}\" width=\"300\" height=\"200\" alt=\"${item.product_name}\"-->\n                    <div class=\"desc\">\n                        <h1>${item.product_name}</h1>\n                        <p>${item.price}</p>\n                        <button\n                        class=\"buy-btn\"\n                        name=\"buy-btn\"\n                        data-name=\"${item.product_name}\"\n                        data-price=\"${item.price}\"\n                        data-id=\"${item.id_product}\"\n                        >Купить</button>\n                    </div>\n                </div>\n            `;\n    });\n    document.querySelector(this.container).innerHTML = str;\n  }\n}\n\nclass Cart {\n  constructor() {\n    this.items = [];\n    this.total = 0;\n    this.sum = 0;\n    this.container = \".cart-block\";\n    this.quantityBlock = document.querySelector(\"#quantity\");\n    this.priceBlock = document.querySelector(\"#price\");\n\n    this._init();\n  }\n\n  _init() {\n    Object(_js_api_js__WEBPACK_IMPORTED_MODULE_0__[\"getCart\"])()\n      .then(items => (this.items = items.contents))\n      .then(() => {\n        this._checkTotalAndSum();\n        this.render();\n        this._handleEvents();\n      })\n      .catch(() => alert(\"Somthing went wrong\"));\n  }\n\n  _handleEvents() {\n    document.querySelector(this.container).addEventListener(\"click\", evt => {\n      if (evt.target.name === \"del-btn\") {\n        this.deleteProduct(evt.target);\n      }\n    });\n  }\n\n  addProduct(product) {\n    Object(_js_api_js__WEBPACK_IMPORTED_MODULE_0__[\"addToCart\"])()\n      .then(({ result }) => {\n        if (result !== 1) {\n          throw new Error(\"Invalid server response\");\n        }\n        let id = Number(product.dataset[\"id\"]);\n        let find = this.items.find(product => product.id_product === id);\n        if (find) {\n          find.quantity++;\n        } else {\n          let prod = this._createNewProduct(product);\n          this.items.push(prod);\n        }\n      })\n      .then(() => {\n        this._checkTotalAndSum();\n        this.render();\n      })\n      .catch(() => {\n        alert(\"Something went wrong with add to cart\");\n      });\n  }\n\n  _createNewProduct(prod) {\n    return {\n      product_name: prod.dataset[\"name\"],\n      price: prod.dataset[\"price\"],\n      id_product: Number(prod.dataset[\"id\"]),\n      quantity: 1\n    };\n  }\n\n  deleteProduct(product) {\n    Object(_js_api_js__WEBPACK_IMPORTED_MODULE_0__[\"deleteFromCart\"])(product)\n      .then(({ result }) => {\n        if (result !== 1) {\n          throw new Error(\"Invalid server response\");\n        }\n        const id = Number(product.dataset[\"id\"]);\n        let find = this.items.find(product => product.id_product === id);\n        if (find.quantity > 1) {\n          find.quantity--;\n        } else {\n          this.items.splice(this.items.indexOf(find), 1);\n        }\n      })\n      .then(() => {\n        this._checkTotalAndSum();\n        this.render();\n      })\n      .catch(() => alert(\"Somthing went wrong in cart\"));\n  }\n\n  _checkTotalAndSum() {\n    let qua = 0;\n    let pr = 0;\n    this.items.forEach(item => {\n      qua += item.quantity;\n      pr += item.price * item.quantity;\n    });\n    this.total = qua;\n    this.sum = pr;\n  }\n\n  render() {\n    let itemsBlock = document\n      .querySelector(this.container)\n      .querySelector(\".cart-items\");\n    let str = \"\";\n    this.items.forEach(item => {\n      str += `<div class=\"cart-item\" data-id=\"${item.id_product}\">\n                    <img src=\"https://placehold.it/100x80\" alt=\"\">\n                    <div class=\"product-desc\">\n                        <p class=\"product-title\">${item.product_name}</p>\n                        <p class=\"product-quantity\">${item.quantity}</p>\n                        <p class=\"product-single-price\">${item.price}</p>\n                    </div>\n                    <div class=\"right-block\">\n                        <button name=\"del-btn\" class=\"del-btn\" data-id=\"${item.id_product}\">&times;</button>\n                    </div>\n                </div>`;\n    });\n    itemsBlock.innerHTML = str;\n    this.quantityBlock.innerText = this.total;\n    this.priceBlock.innerText = this.sum;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  const cart = new Cart();\n  new Catalog(cart);\n});\n\n\n//# sourceURL=webpack:///./src/public/js/app.js?");

/***/ })

/******/ });
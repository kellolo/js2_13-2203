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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/css/style.css */ \"./src/public/css/style.css\");\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_js_burgers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/js/burgers.js */ \"./src/public/js/burgers.js\");\n\n\n\nObject(_public_js_burgers_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/css/style.css":
/*!**********************************!*\
  !*** ./src/public/css/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/public/css/style.css?");

/***/ }),

/***/ "./src/public/js/burgers.js":
/*!**********************************!*\
  !*** ./src/public/js/burgers.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nlet burgers = []\nlet form = document.querySelector('form')\nlet toppings = []\n\n\n//Собираем информацию о ценах и каллорийности из data атрибутов и прописываем в соответствующие блоки html\nfunction getPriceAndEnergyInfo() {\n  let labels = [...document.querySelectorAll('label')]\n  labels.forEach(label => {\n    let input = label.querySelector('input')\n    let price = label.querySelector('.price')\n    let energy = label.querySelector('.energy')\n    price.textContent = input.dataset.price\n    energy.textContent = input.dataset.energy\n  })\n}\n\n//Подсвечиваем выбранные пункты\nfunction showChecked() {\n  let formInputs = document.querySelectorAll('input')\n  formInputs.forEach(input => {\n    if (input.checked) {\n      input.parentNode.classList.add('checked')\n    } else {\n      input.parentNode.classList.remove('checked')\n    }\n  })\n}\n\n// Передаем стоимость и каллорийность для вывода на странице\nfunction countCostAndEnergy() {\n  let priceOutputField = document.querySelector('#cost')\n  let energyOutputField = document.querySelector('#energy')\n  let checkedItems = [...document.querySelectorAll('input:checked')]\n  let cost = 0\n  let energy = 0\n  checkedItems.forEach(item => {\n    cost += +item.dataset.price\n    energy += +item.dataset.energy\n  })\n  priceOutputField.textContent = cost + ' $'\n  energyOutputField.textContent = energy + ' cal'\n}\n\n//Отображает выбранные позиции на экране в поле вывода\nfunction showChoosed(e) {  \n  if (e.target.name == 'size') {\n    let field = document.querySelector('.chosenSize').querySelector('span')\n    field.textContent = e.target.value\n  } else if (e.target.name == 'filling') {\n    let field = document.querySelector('.chosenFilling').querySelector('span')\n    field.textContent = e.target.value\n  } else if (e.target.name == 'toppings') {\n    let toppings = [...form.querySelector('#toppings').querySelectorAll('input:checked')]\n    console.log(toppings)\n    let field = document.querySelector('.chosenToppings').querySelector('span')\n    field.textContent = ''\n    toppings.forEach(topping => field.textContent += topping.value + ' | ')\n  }\n}\n\n\n\nclass Burger {\n  constructor(size, filling, toppings, price, energy) {\n    this.size = this._getData(size)\n    this.filling = this._getData(filling)\n    this.toppings = this._getDataToArray(toppings)\n    this.cost = this._getSum(price)\n    this.energy = this._getSum(energy)\n  }\n  _getData(param) {\n    let item = document.querySelector(`input[name='${param}']:checked`)\n    return item.value\n  }\n  _getDataToArray(param) {\n    let arr = []\n    let items = document.querySelectorAll(`input[name='${param}']:checked`)\n    items.forEach(item => arr.push(item.value))\n    return arr\n  }\n  _getSum(param) {\n    let items = document.querySelectorAll(`input:checked`)\n    let sum = 0\n    items.forEach(item => sum += +item.dataset[param])\n    return sum\n  }\n}\n\nfunction createBurger() {\n  form.addEventListener('submit', (e) => {\n    e.preventDefault()\n    let burger = new Burger('size', 'filling', 'toppings', 'price', 'energy')\n    burgers.push(burger)\n    console.log('Get your burger!')\n    console.dir(burgers)\n    alert('Ваш бургер в консоли')\n  })\n}\n\nfunction init() {\n  getPriceAndEnergyInfo()\n  form.addEventListener('input', showChecked)\n  form.addEventListener('input', countCostAndEnergy)\n  form.addEventListener('input', showChoosed)\n  createBurger()\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  init()\n});\n\n//# sourceURL=webpack:///./src/public/js/burgers.js?");

/***/ })

/******/ });
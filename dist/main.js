/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/items.csv":
/*!***********************!*\
  !*** ./src/items.csv ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = [[\"name\",\"imgSrc\",\"price\"],[\"Ice Tea\",\"../src/ice-tea.jpg\",\"$5\"],[\"Lemonade\",\"../src/lemonade.jpg\",\"$5\"],[\"Coffee\",\"../src/coffee.jpg\",\"$5\"],[\"Pizza\",\"../src/pizza.jpg\",\"$18\"],[\"Steak\",\"../src/steak.jpg\",\"$35\"],[\"Burger\",\"../src/burger.jpg\",\"$20\"]]\n\n//# sourceURL=webpack://restaurant-page/./src/items.csv?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contact() {\n\n    const contactDiv = document.createElement('div')\n    const contact = document.createElement('h2')\n    const phoneNumber = document.createElement('p')\n    const hours = document.createElement('h2')\n    const hoursParaOne = document.createElement('p')\n    const hoursParaTwo = document.createElement('p')\n\n    contactDiv.id = 'contact'\n    \n    contact.textContent = 'Contact'\n    phoneNumber.textContent = 'TEL: 555-123-4567'\n    hours.textContent = 'Hours'\n    hoursParaOne.textContent = 'Mon - Sat: 11:00AM - 12:00AM' \n    hoursParaTwo.textContent= 'Sun: Closed'  \n\n    contactDiv.appendChild(contact)\n    contactDiv.appendChild(phoneNumber)\n    contactDiv.appendChild(hours)\n    contactDiv.appendChild(hoursParaOne)\n    contactDiv.appendChild(hoursParaTwo)\n\n    return [contactDiv]\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load.js */ \"./src/load.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\n\nconst content = document.getElementById('content')\nconst mainDiv = (0,_load_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\ncontent.appendChild(mainDiv)\nconst homeLink = document.getElementById('home')\nconst menuLink = document.getElementById('menu')\nconst contactLink = document.getElementById('contact')\nconst navigation = document.getElementById('navigation')\nnewDiv((0,_load_js__WEBPACK_IMPORTED_MODULE_0__.home)())\nhomeLink.classList.add('current')\n\nfunction newDiv(newList) {\n    [...mainDiv.children].forEach(child => child !== navigation ? mainDiv.removeChild(child) : null)\n    for (let i in newList) {\n        mainDiv.appendChild(newList[i])\n    }\n}\n\nhomeLink.addEventListener('click', () => {\n    newDiv((0,_load_js__WEBPACK_IMPORTED_MODULE_0__.home)())\n    homeLink.classList.add('current')\n    menuLink.classList.remove('current')\n    contactLink.classList.remove('current')\n})\n\nmenuLink.addEventListener('click', () => {\n    newDiv((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\n    menuLink.classList.add('current')\n    homeLink.classList.remove('current')\n    contactLink.classList.remove('current')\n})\n\ncontactLink.addEventListener('click', () => {\n    newDiv((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])())\n    contactLink.classList.add('current')\n    menuLink.classList.remove('current')\n    homeLink.classList.remove('current')\n})\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\nfunction loadNav() {\n    const mainDiv = document.createElement('div')\n    mainDiv.id = 'main'\n\n    const nav = document.createElement('nav')\n    const navList = document.createElement('ul')\n    const linkOne = document.createElement('li')\n    const linkTwo = document.createElement('li')\n    const linkThree = document.createElement('li')\n\n    nav.id = 'navigation'\n\n    linkOne.textContent = 'HOME'\n    linkTwo.textContent = 'MENU'\n    linkThree.textContent = 'CONTACT'\n\n    linkOne.id = 'home'\n    linkTwo.id = 'menu'\n    linkThree.id = 'contact'\n\n    navList.appendChild(linkOne)\n    navList.appendChild(linkTwo)\n    navList.appendChild(linkThree)\n\n    nav.appendChild(navList)\n\n    mainDiv.appendChild(nav)\n\n    return mainDiv\n}\n\nfunction home() {\n    \n    const logoDiv = document.createElement('div')\n    const logo = document.createElement('img')\n    const heading = document.createElement('h1')\n    const para = document.createElement('p')\n\n    logo.src = '../src/logo.png'\n    logoDiv.classList.add('logo')\n    heading.textContent = 'Come and enjoy the great food and company!'\n    para.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus vehicula varius. Sed blandit, ipsum egestas porta semper, justo magna lacinia nibh, sed feugiat velit nisl sit amet ligula. Nullam orci nunc, euismod eget justo eu, congue interdum odio. Quisque massa mi, aliquam sagittis ultricies eget, varius vitae ex. Proin accumsan lorem leo, sed lacinia sem placerat ut.'\n\n    const buttonDiv = document.createElement('div')\n    const button = document.createElement('button')\n\n    buttonDiv.classList.add('button')\n    button.textContent = 'RESERVE A TABLE'    \n\n    logoDiv.appendChild(logo)\n    logoDiv.appendChild(heading)\n    logoDiv.appendChild(para)\n\n    buttonDiv.appendChild(button)\n\n    return [logoDiv, buttonDiv]\n\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadNav);\n\n\n//# sourceURL=webpack://restaurant-page/./src/load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _items_csv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items.csv */ \"./src/items.csv\");\n/* harmony import */ var _items_csv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_items_csv__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction menu() {\n    let items = []\n    function createItemDiv(name, imgSrc, price) {\n        const itemDiv = document.createElement('div')\n        const itemName = document.createElement('h2')\n        const itemPicture = document.createElement('img')\n        const itemPrice = document.createElement('p')\n\n        itemName.textContent = name\n        itemPicture.src = imgSrc\n        itemPrice.textContent = price\n\n        itemDiv.appendChild(itemName)\n        itemDiv.appendChild(itemPicture)\n        itemDiv.appendChild(itemPrice)\n        \n        return itemDiv\n    }\n\n\n    for(let i = 1; i < (_items_csv__WEBPACK_IMPORTED_MODULE_0___default().length); i++) {\n        let newDiv\n        newDiv = createItemDiv(...(_items_csv__WEBPACK_IMPORTED_MODULE_0___default())[i])\n        items.push(newDiv)\n    }\n\n    return items\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
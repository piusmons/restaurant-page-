/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/main */ \"./src/modules/main.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n\n\n\n\n\nfunction createHeaderDiv() {\n  const headerDiv = document.createElement(\"div\");\n  headerDiv.classList.add('header');\n  document.body.appendChild(headerDiv)\n\n};\n\n\nfunction createBtns() {\n\n  const mainBtn = document.createElement('button');\n  var txt = document.createTextNode(\"home\");\n  mainBtn.classList.add('tablink');\n  mainBtn.setAttribute('id','main');\n  mainBtn.appendChild(txt);\n  var q = document.getElementsByClassName(\"header\");\n  q[0].appendChild(mainBtn);\n  mainBtn.addEventListener(\"click\", () => btnControlMain());\n  mainBtn.addEventListener(\"click\", () => (0,_modules_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\n\n\n\n  const menuBtn = document.createElement('button');\n  var menuTxt = document.createTextNode(\"menu\");\n  menuBtn.setAttribute('id','menu');\n  menuBtn.classList.add('tablink')\n  menuBtn.appendChild(menuTxt);\n  q[0].appendChild(menuBtn);\n  menuBtn.addEventListener(\"click\", _modules_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  menuBtn.addEventListener(\"click\", () => (0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n  menuBtn.addEventListener(\"click\", () => btnControlMenu())\n\n\n  const contactBtn = document.createElement('button');\n  var contactTxt = document.createTextNode(\"contact\");\n  contactBtn.setAttribute('id','contact');\n  contactBtn.classList.add('tablink')\n  contactBtn.appendChild(contactTxt);\n  q[0].appendChild(contactBtn);\n  contactBtn.addEventListener(\"click\", () => (0,_modules_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  contactBtn.addEventListener(\"click\", () => btnControlContact());\n\n  function btnControlMain() {\n      var btns = document.getElementsByClassName('tablink');\n      btns[0].disabled = true;\n      btns[1].disabled = false;\n      btns[2].disabled = false;\n\n  }\n\n  function btnControlMenu() {\n    var btns = document.getElementsByClassName('tablink');\n    btns[0].disabled = false;\n    btns[1].disabled = true;\n    btns[2].disabled = false;\n\n  }\n\n  function btnControlContact() {\n    var btns = document.getElementsByClassName('tablink');\n    btns[0].disabled = false;\n    btns[1].disabled = false;\n    btns[2].disabled = true;\n  }\n\n\n\n\n};\n\n\nfunction makeMain() {\n  const mainSection = document.createElement('section');\n  mainSection.classList.add('main');\n  document.body.appendChild(mainSection);\n\n}\n\nfunction makeContent(){\n\n  const mainContent = document.createElement('div');\n  mainContent.classList.add('content');\n  mainContent.setAttribute('id','contentId');\n  var a = document.getElementsByClassName('main')\n  a[0].appendChild(mainContent);\n\n\n}\n\n\n\n\n\ncreateHeaderDiv();\ncreateBtns();\nmakeMain();\nmakeContent();\ndocument.getElementById('main').click();\n\n\n//# sourceURL=webpack://restopage2/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nfunction renderContact() {\n\n  var e = document.getElementById('contentId').innerHTML = '';\n  document.getElementById('contentId').classList.remove('content');\n  document.getElementById('contentId').classList.remove('menuContent');\n  document.getElementById('contentId').classList.add('contactContent');\n\n  var b = document.getElementsByClassName('contactContent');\n  var contactHeader = document.createElement('h3');\n  contactHeader.textContent = 'ego sum esurientem pecuniam.voca me 666-6666-666';\n  contactHeader.classList.add('contactHeaderTxt')\n  b[0].appendChild(contactHeader);\n\n\n}\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContact);\n\n\n//# sourceURL=webpack://restopage2/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/main.js":
/*!*****************************!*\
  !*** ./src/modules/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n\n\n\nfunction mainTxtContent() {\n  var e = document.getElementById('contentId').innerHTML = '';\n  var a = document.getElementById('contentId').classList.remove('menuContent');\n  var d = document.getElementById('contentId').classList.remove('contactContent');\n  document.getElementById('contentId').classList.add('content');\n  var c = document.getElementsByClassName('content');\n  const titleTxt = document.createElement('h3');\n  titleTxt.classList.add('title-main-content');\n  titleTxt.textContent = 'Premium Blood For Demons'\n  c[0].appendChild(titleTxt);\n\n  var contentTxt1 = document.createElement(\"p\");\n  contentTxt1.setAttribute('id', 'p-content');\n  contentTxt1.textContent = 'We offer the best blood packs extracted fresh by our hunters'\n  c[0].appendChild(contentTxt1);\n\n  var contentTxt2 = document.createElement(\"p\");\n  contentTxt2.setAttribute('id', 'p-content');\n  contentTxt2.textContent = 'Experience exquisite sanguine taste as our blood packs are curated to come from very specific human genomes that offer the most premium blood.'\n  c[0].appendChild(contentTxt2);\n\n}\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainTxtContent);\n\n\n//# sourceURL=webpack://restopage2/./src/modules/main.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nfunction renderMenu(){\n  var e = document.getElementById('contentId').innerHTML = '';\n  document.getElementById('contentId').classList.remove('content');\n  document.getElementById('contentId').classList.remove('contactContent')\n  document.getElementById('contentId').classList.add('menuContent');\n  var b = document.getElementsByClassName('menuContent')\n\n  //1st card\n  var cardDiv1 = document.createElement('div');\n  cardDiv1.classList.add('menuCard');\n  b[0].appendChild(cardDiv1);\n  var c = document.getElementsByClassName('menuCard')\n  const imgContainer1 = document.createElement('div');\n  imgContainer1.classList.add('imgContainer');\n  c[0].appendChild(imgContainer1);\n  const img1 = document.createElement('img');\n  const imgContainerDom = document.getElementsByClassName('imgcontainer');\n\n  img1.src = 'droplet.svg';\n  img1.classList.add('menuImg');\n  imgContainer1.appendChild(img1);\n\n  var title1 = document.createElement('h1');\n  title1.textContent = '$5 - Bovine Blood';\n  c[0].appendChild(title1);\n  var txt1 = document.createElement('p');\n  txt1.textContent = 'Blood from bovine quadrupeds. Best for demons on a budget';\n  txt1.classList.add('menuTxt');\n  c[0].appendChild(txt1);\n\n  //2nd card\n  var cardDiv2 = document.createElement('div');\n  cardDiv2.classList.add('menuCard');\n  b[0].appendChild(cardDiv2);\n  const imgContainer2 = document.createElement('div');\n  imgContainer2.classList.add('imgContainer');\n  c[1].appendChild(imgContainer2);\n  const img2 = document.createElement('img');\n  const img3 = document.createElement('img');\n  img2.src = 'droplet.svg';\n  img3.src = 'droplet.svg';\n  img2.classList.add('menuImg');\n  img3.classList.add('menuImg');\n  imgContainer2.appendChild(img2);\n  imgContainer2.appendChild(img3);\n\n  const title2 = document.createElement('h1');\n  title2.textContent = '$15 - Youthful blood';\n  c[1].appendChild(title2);\n  var txt2 = document.createElement('p');\n  txt2.textContent = 'blood from young humans; rich in flavor and quality that exude the dawn of life'\n  txt2.classList.add('menuTxt');\n  c[1].appendChild(txt2);\n\n  //3rd card\n  var cardDiv3 = document.createElement('div');\n  cardDiv3.classList.add('menuCard');\n  b[0].appendChild(cardDiv3);\n  const imgContainer3 = document.createElement('div');\n\n  imgContainer3.classList.add('imgContainer');\n  c[2].appendChild(imgContainer3);\n  const img4 = document.createElement('img');\n  const img5 = document.createElement('img');\n  const img6 = document.createElement('img');\n  img4.src = 'droplet.svg';\n  img5.src = 'droplet.svg';\n  img6.src = 'droplet.svg';\n  img4.classList.add('menuImg');\n  img5.classList.add('menuImg');\n  img6.classList.add('menuImg');\n  imgContainer3.appendChild(img4);\n  imgContainer3.appendChild(img5);\n  imgContainer3.appendChild(img6);\n\n  const title3 = document.createElement('h1');\n  title3.textContent = '$666 - Hero blood';\n  c[2].appendChild(title3);\n  var txt3 = document.createElement('p');\n  txt3.textContent = 'blood from recognized human heroes. Taste vigour and the best humanity can offer the demonic forces'\n  txt3.classList.add('menuTxt');\n  c[2].appendChild(txt3);\n\n\n\n\n}\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenu);\n\n\n//# sourceURL=webpack://restopage2/./src/modules/menu.js?");

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
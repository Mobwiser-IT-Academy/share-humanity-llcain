/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\nnav {\\r\\n    display: flex;\\r\\n    justify-content: space-around;\\r\\n    align-items: center;\\r\\n    min-height: 8vh;\\r\\n    background-color: #5D4954;\\r\\n    font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n    color: rgb(226, 226, 226);\\r\\n    text-transform: uppercase;\\r\\n    letter-spacing: 5px;\\r\\n    font-size: 20px;\\r\\n}\\r\\n\\r\\n.nav-links {\\r\\n    display: flex;\\r\\n    justify-content: space-around;\\r\\n    width: 30%;\\r\\n}\\r\\n\\r\\n.nav-links li {\\r\\n    list-style: none;\\r\\n}\\r\\n\\r\\n.nav-links a {\\r\\n    color: rgb(226, 226, 226);\\r\\n    text-decoration: none;\\r\\n    letter-spacing: 3px;\\r\\n    font-weight: bold;\\r\\n    font-size: 14px;\\r\\n}\\r\\n\\r\\n.burger {\\r\\n    display: none;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.burger div {\\r\\n    width: 25px;\\r\\n    height: 3px;\\r\\n    background-color: rgb(226, 226, 226);\\r\\n    margin: 5px;\\r\\n    transition: all 0.3s ease;\\r\\n}\\r\\n\\r\\n@media screen and (max-width:1024px) {\\r\\n    .nav-links {\\r\\n        width: 68%;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-width:768px) {\\r\\n    body {\\r\\n        overflow-x: hidden;\\r\\n    }\\r\\n    .nav-links {\\r\\n        position: absolute;\\r\\n        right: 0px;\\r\\n        height: 92vh;\\r\\n        top: 8vh;\\r\\n        background-color: #5D4954;\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n        align-items: center;\\r\\n        width: 50%;\\r\\n        transform: translateX(100%);\\r\\n        transition: transform 0.5s ease-in;\\r\\n    }\\r\\n\\r\\n    .nav-links li {\\r\\n        opacity: 0;\\r\\n    }\\r\\n\\r\\n    .burger {\\r\\n        display: block;\\r\\n    }\\r\\n}\\r\\n\\r\\n.nav-active {\\r\\n    transform: translateX(0);\\r\\n}\\r\\n\\r\\n@keyframes navLinkFade {\\r\\n    from {\\r\\n        opacity: 0;\\r\\n        transform: translateX(50px);\\r\\n    }\\r\\n    to {\\r\\n        opacity: 1;\\r\\n        transform: translateX(0px);\\r\\n    }\\r\\n}\\r\\n\\r\\n.toggle .line1 {\\r\\n    transform: rotate(-45deg) translate(-5px, 6px);\\r\\n}\\r\\n\\r\\n.toggle .line2 {\\r\\n    opacity: 0;\\r\\n}\\r\\n\\r\\n.toggle .line3 {\\r\\n    transform: rotate(45deg) translate(-5px, -6px);\\r\\n}\\r\\n\\r\\n@media(min-width: 468px) {\\r\\n    .container-1 {\\r\\n        display: flex;\\r\\n        /*\\r\\n        align-items: flex-start;\\r\\n        align-items: flex-end;\\r\\n        align-items: center;\\r\\n        align-items: column;\\r\\n        */\\r\\n        justify-content: space-between;\\r\\n    }\\r\\n    \\r\\n    .container-2 {\\r\\n        display: flex;\\r\\n        /*\\r\\n        justify-content: flex-start;\\r\\n        justify-content: flex-end;\\r\\n        justify-content: center;\\r\\n        justify-content: around;\\r\\n        */\\r\\n        justify-content: space-around;\\r\\n    }\\r\\n}\\r\\n\\r\\nbody {\\r\\n    background-color: rgb(145, 132, 145);\\r\\n}\\r\\n\\r\\n.container-1 div, .container-2 div {\\r\\n    border: 3px rgb(248, 246, 246) solid;\\r\\n    padding: 10px;\\r\\n    width: auto;\\r\\n    height: auto;\\r\\n}\\r\\n\\r\\n.box-1 {\\r\\n    flex: 4;\\r\\n    order: 2;\\r\\n}\\r\\n\\r\\n.box-2 {\\r\\n    flex: 1;\\r\\n    order: 1;\\r\\n}\\r\\n\\r\\n.container-2-box {\\r\\n    flex-basis: 20%\\r\\n}\\r\\n\\r\\n.footer {\\r\\n    text-align: center;\\r\\n    width: 100vw;\\r\\n    padding: 30px;\\r\\n    color: rgb(226, 226, 226);\\r\\n    text-transform: uppercase;\\r\\n    letter-spacing: 5px;\\r\\n    font-size: 20px;\\r\\n    background-color: #5D4954;\\r\\n    font-family: 'Poppins', sans-serif;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://share-humanity/./src/index.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://share-humanity/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n\r\nconst navSlide = () => {\r\n    const burger = document.querySelector('.burger');\r\n    const nav = document.querySelector('.nav-links');\r\n    const navLinks = document.querySelectorAll('.nav-links li');\r\n\r\n    // Toggle Nav\r\n\r\n    burger.addEventListener('click', () => {\r\n\r\n        // Toggle Nav\r\n\r\n        nav.classList.toggle('nav-active');\r\n\r\n        //Animation Links\r\n\r\n        navLinks.forEach((link, index) => {\r\n            if (link.style.animation) {\r\n                link.style.animation = ''\r\n            } else {\r\n                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;\r\n            }\r\n        });\r\n\r\n        // Burger Animation\r\n\r\n        burger.classList.toggle('toggle');\r\n    });\r\n\r\n}\r\n\r\nnavSlide();\n\n//# sourceURL=webpack://share-humanity/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
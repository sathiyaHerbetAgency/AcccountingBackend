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

/***/ "cluster":
/*!**************************!*\
  !*** external "cluster" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("cluster");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "http-proxy-middleware":
/*!****************************************!*\
  !*** external "http-proxy-middleware" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("http-proxy-middleware");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! http-proxy-middleware */ \"http-proxy-middleware\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! os */ \"os\");\n/* harmony import */ var cluster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cluster */ \"cluster\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cors */ \"cors\");\n\ndotenv__WEBPACK_IMPORTED_MODULE_0__.config();\n\n\n\n\n\n\n\nconst cCPUs = os__WEBPACK_IMPORTED_MODULE_5__.cpus().length;\nif (cluster__WEBPACK_IMPORTED_MODULE_6__.isMaster) {\n  // Create a worker for each CPU\n  for (let i = 0; i < cCPUs; i++) {\n    cluster__WEBPACK_IMPORTED_MODULE_6__.fork();\n  }\n  cluster__WEBPACK_IMPORTED_MODULE_6__.on('online', function (worker) {\n    console.log('Worker ' + worker.process.pid + ' is online.');\n  });\n  cluster__WEBPACK_IMPORTED_MODULE_6__.on('exit', function (worker, code, signal) {\n    console.log('worker ' + worker.process.pid + ' died.');\n  });\n} else {\n  const app = express__WEBPACK_IMPORTED_MODULE_1__();\n  app.use(cors__WEBPACK_IMPORTED_MODULE_7__({\n    origin: ['http://localhost:3000'],\n    credentials: true\n  }));\n  app.use(morgan__WEBPACK_IMPORTED_MODULE_3__('tiny'));\n  app.use(compression__WEBPACK_IMPORTED_MODULE_2__());\n  const port = 8080;\n  //micro services\n  app.use('/authentication', (0,http_proxy_middleware__WEBPACK_IMPORTED_MODULE_4__.createProxyMiddleware)({\n    target: process.env.Authentication,\n    changeOrigin: true\n  }));\n  app.get('/', (req, res) => res.send(\"Hello\"));\n  app.listen(port, '192.168.1.6', () => console.log(`Middleware api listening on port ${port}!`));\n}\n\n//# sourceURL=webpack://bookingappback/./index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
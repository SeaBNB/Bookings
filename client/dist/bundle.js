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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 274);
/******/ })
/************************************************************************/
/******/ ({

/***/ 274:
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: SyntaxError: Unexpected token (110:6)\\n\\n\\u001b[0m \\u001b[90m 108 | \\u001b[39m    let id \\u001b[33m=\\u001b[39m \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mprops\\u001b[33m.\\u001b[39mmatch\\u001b[33m.\\u001b[39mparams\\u001b[33m.\\u001b[39mid\\u001b[33m;\\u001b[39m\\n \\u001b[90m 109 | \\u001b[39m    axios\\u001b[33m.\\u001b[39mget(\\u001b[32m`https://localhost:1128/bookings/${id}`\\u001b[39m)\\u001b[33m;\\u001b[39m\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 110 | \\u001b[39m      \\u001b[33m.\\u001b[39mthen(\\u001b[36mfunction\\u001b[39m (response) {\\n \\u001b[90m     | \\u001b[39m      \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 111 | \\u001b[39m      console\\u001b[33m.\\u001b[39mlog(response)\\u001b[33m;\\u001b[39m\\n \\u001b[90m 112 | \\u001b[39m    })\\n \\u001b[90m 113 | \\u001b[39m    \\u001b[33m.\\u001b[39m\\u001b[36mcatch\\u001b[39m(\\u001b[36mfunction\\u001b[39m (error) {\\u001b[0m\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjc0LmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///274\n");

/***/ })

/******/ });
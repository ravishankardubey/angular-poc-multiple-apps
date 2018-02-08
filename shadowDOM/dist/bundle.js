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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

window.loadPage = function () {
    let showShadow = false;

    let styleContainer = "max-width:700px; margin:auto; box-shadow : 3px 3px 3px 3px #f3f3f3; border-radius:5px 5px 0px 0px; position:relative;";
    let styleHeader = "width:100%; border:inherit; height:50px; background: linear-gradient(to right,#135c78, #366c8d, #135c78); color:white; font-size : 20px; font-family:cursive; text-align:center; padding-top:40px; border-radius:inherit;";
    let styleContent = "width : 100%; background:#d2e5af; height:600px; overflow-y: auto; position:relative; padding-top:5px;";

    let container = document.createElement("div");
    container.style.cssText = styleContainer;

    let header = document.createElement("div");
    header.style.cssText = styleHeader;

    let appBtn = document.createElement("button");
    appBtn.style.cssText = "cursor:pointer;"

    let text = document.createTextNode("CLICK HERE");
    appBtn.appendChild(text);
    header.appendChild(appBtn);

    let content = document.createElement("div");
    content.style.cssText = styleContent;

    let item = document.createElement("p");
    let pText = "This is a dummy text before shadow";
    let shadow = pText.attachShadow({mode:'open'});
    item.appendChild = pText;

    container.appendChild(header);
    container.appendChild(content);
    document.body.appendChild(container);

}

/***/ })
/******/ ]);
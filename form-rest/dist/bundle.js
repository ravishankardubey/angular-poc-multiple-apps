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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_getBody_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_navbar_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_selectForm_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_callAPI_js__ = __webpack_require__(4);





window.jsLoader = function () {
    document.getElementById("table-content").style.display = "none";
    document.getElementById("nav").innerHTML = __WEBPACK_IMPORTED_MODULE_1__components_navbar_js__["a" /* navbar */];
    document.getElementById("form-selector").innerHTML = __WEBPACK_IMPORTED_MODULE_2__components_selectForm_js__["a" /* selectForm */];
    document.getElementById("run-api").onclick = function () {
        Object(__WEBPACK_IMPORTED_MODULE_3__components_callAPI_js__["a" /* callAPI */])();
    }
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const getBody=  `
<div class="container">
  <h3>Basic Navbar Example</h3>
  <p>A navigation bar is a navigation header that is placed at the top of the page.</p>
</div>
 `;
/* unused harmony export getBody */


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const navbar = `<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span> 
      </button>
      <a class="navbar-brand" href="#">Forms</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
      </ul>
      <ul class="nav navbar-nav navbar-right">
      </ul>
    </div>
  </div>
</nav>`;
/* harmony export (immutable) */ __webpack_exports__["a"] = navbar;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const selectForm = `
<div class="container">
  <div class="row">
    <div class=col-sm-4></div>
    <div class=col-sm-4>
      <div class="form-group">
            <center><button class="btn default" id="run-api">Click to Run API</button></center>
      </div>
    </div>
    <div class=col-sm-4></div>
  </div>
</div>
`;
/* harmony export (immutable) */ __webpack_exports__["a"] = selectForm;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = callAPI;
function callAPI() {
  // JSON hosted over a url
  var url = "https://api.myjson.com/bins/sy71b";
  let innerContent = ``;
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      document.getElementById("table-content").style.display = "unset";
      data.map(function (items) {
        innerContent += `<tr>
          <td>${items.id}</td>
          <td>${items.first_name}</td>
          <td>${items.last_name}</td>
          <td>${items.gender}</td>
          <td>${items.email}</td>
          <td>${items.ip_address}</td>
        </tr>`
      })
      document.getElementById("table-body").innerHTML += innerContent;
    })
    .catch(function (error) {
      console.log(" *** ERROR *** : " + error);
    });
}

/***/ })
/******/ ]);
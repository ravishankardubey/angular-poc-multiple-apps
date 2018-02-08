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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_callForm_js__ = __webpack_require__(4);
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js`';





window.jsLoader = function(){
    document.getElementById("nav").innerHTML = __WEBPACK_IMPORTED_MODULE_1__components_navbar_js__["a" /* navbar */];
    //document.getElementById("body-container").innerHTML = getBody;
    document.getElementById("form-selector").innerHTML = __WEBPACK_IMPORTED_MODULE_2__components_selectForm_js__["a" /* selectForm */];
    document.getElementById("sel1").onchange = __WEBPACK_IMPORTED_MODULE_3__components_callForm_js__["a" /* callForm */];
    console.log(__WEBPACK_IMPORTED_MODULE_3__components_callForm_js__["a" /* callForm */]);
    console.log(onSubmit);
    
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
<div class="row">
<div class=col-sm-4>
</div>
<div class=col-sm-4>
<div class="form-group">
      <label for="sel1">Select One form:</label>
      <select class="form-control" id="sel1">
        <option>  --  select  --  </option>
        <option value="personalDetails">Personal Details</option>
        <option value="postalDetails">Postal Details</option>
      </select>
</div>
<hr>
</div>
<div class=col-sm-4>
</div>
</div>
`;
/* harmony export (immutable) */ __webpack_exports__["a"] = selectForm;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = callForm;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formPersonalDetails__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formPostalDetails_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__onSubmit_js__ = __webpack_require__(7);




function callForm() {
    if (this.value == "personalDetails") {
        document.getElementById("form-space").innerHTML = __WEBPACK_IMPORTED_MODULE_0__formPersonalDetails__["a" /* formPersonalDetails */];
        document.getElementById("submit").onclick = __WEBPACK_IMPORTED_MODULE_2__onSubmit_js__["a" /* onSubmit */];
    }
    else if (this.value == "postalDetails") {
        document.getElementById("form-space").innerHTML = __WEBPACK_IMPORTED_MODULE_1__formPostalDetails_js__["a" /* formPostalDetails */];
        document.getElementById("submit").onclick = __WEBPACK_IMPORTED_MODULE_2__onSubmit_js__["a" /* onSubmit */];
    }
    else
        document.getElementById("form-space").innerHTML = "";
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const formPersonalDetails = `
<div class="row">
    <div class="col-sm-4">
    </div>
    <div class="col-sm-4">
        <fieldset>
            <legend>Personal Details :</legend>
            <div class="form-group">
                <label for="name">Full Name:</label>
                <input type="text" class="form-control" id="name">
            </div>
            <div class="form-group">
                <label for="email">E-Mail:</label>
                <input type="email" class="form-control" id="email">
            </div>
             <div class="form-group">
                <label for="mob">Mobile:</label>
                <input type="mobile" class="form-control" id="mobile">
            </div>
            <div class="form-group">
                <label for="pwd">GitHub Profile:</label>
                <input type="text" class="form-control" id="github">
            </div>
            <div class="form-group">
               <button class="btn default" id="submit" value="submit-personal">Submit</button>
            </div>
            </fieldset>
    </div>
    <div class="col-sm-4"></div>
</div>
`;
/* harmony export (immutable) */ __webpack_exports__["a"] = formPersonalDetails;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const formPostalDetails = `
    <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
                <fieldset>
                    <legend>Postal Details :</legend>
                    <div class="form-group">
                        <label for="address">Address:</label>
                        <input type="text" class="form-control" id="address">
                    </div>
                    <div class="form-group">
                        <label for="city">City:</label>
                        <input type="text" class="form-control" id="city">
                    </div>
                    <div class="form-group">
                        <label for="state">State:</label>
                        <input type="text" class="form-control" id="state">
                    </div>
                    <div class="form-group">
                        <label for="state">Zip:</label>
                        <input type="number" class="form-control" id="zip">
                    </div>
                    <div class="form-group">
                        <button class="btn default" id="submit" value="submit-postal">Submit</button>
                    </div>
                </fieldset>
        </div>
        <div class="col-sm-4"></div>
    </div>
`;
/* harmony export (immutable) */ __webpack_exports__["a"] = formPostalDetails;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = onSubmit;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__printPersonalDetails_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__printPostalDetails_js__ = __webpack_require__(9);


function onSubmit() {
    if (this.value == "submit-personal")
    {
        document.getElementById("form-space").innerHTML = Object(__WEBPACK_IMPORTED_MODULE_0__printPersonalDetails_js__["a" /* printPersonalDetails */])();

    }
    else if (this.value == "submit-postal")
    {
        document.getElementById("form-space").innerHTML = Object(__WEBPACK_IMPORTED_MODULE_1__printPostalDetails_js__["a" /* printPostalDetails */])();
    }
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = printPersonalDetails;
function printPersonalDetails() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let github = document.getElementById("github").value;

    return `
    <div class ="row">
        <div class = "col-sm-4"></div>
        <div class = "col-sm-4">
        <table class="table table-hover">
            <tbody>
            <tr>
                <td><b>Name :</b></td>
                <td>${name}</td>
            </tr>
            <tr>
                <td><b>E-Mail :</b></td>
                <td>${email}</td>
            </tr>
            <tr>
               <td><b>Mobile :</b></td>
                <td>${mobile}</td>
            </tr>
            <tr>
               <td><b>GitHub :</b></td>
                <td>${github}</td>
            </tr>
            </tbody>
        </table>
        </div>
        <div class = "col-sm-4">\</div>
    </div>
    `;
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = printPostalDetails;
function printPostalDetails(){
    let addr = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let zip= document.getElementById("zip").value;

    return `
    <div class ="row">
        <div class = "col-sm-4"></div>
        <div class = "col-sm-4">
        <table class="table table-hover">
            <tbody>
            <tr>
                <td><b>Address :</b></td>
                <td>${addr}</td>
            </tr>
            <tr>
                <td><b>City :</b></td>
                <td>${city}</td>
            </tr>
            <tr>
               <td><b>State :</b></td>
                <td>${state}</td>
            </tr>
            <tr>
               <td><b>Zip :</b></td>
                <td>${zip}</td>
            </tr>
            </tbody>
        </table>
        </div>
        <div class = "col-sm-4">\</div>
    </div>
    `;
}

/***/ })
/******/ ]);
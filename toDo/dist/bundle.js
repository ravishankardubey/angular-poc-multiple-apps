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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = showContent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addToDo_js__ = __webpack_require__(2);


function showContent() {
    var styleAdd = "width:50px; height:50px; border-radius:25px; background:#366c8d; position:absolute; bottom:10px; right:10px;cursor: pointer; font-size : 40px; color:white; text-align:center;";
    var addTask = document.createElement("div");
    addTask.style.cssText = styleAdd;
    addTask.appendChild(document.createTextNode("+"));
    addTask.onclick = __WEBPACK_IMPORTED_MODULE_0__addToDo_js__["a" /* addTodo */];
    document.getElementById("content").appendChild(addTask);


    if (localStorage.length == 0) {
        // runs when there is nothing into the local storage
        var zeroContentStyle = "width:100%; font-family:'Raleway'; font-size:30px; text-align:center; padding-top:200px;";
        var zeroText = document.createTextNode("Create Your ToDo list");
        var zeroContent = document.createElement("div");
        zeroContent.style.cssText = zeroContentStyle;
        zeroContent.appendChild(zeroText);
        document.getElementById("content").appendChild(zeroContent);
    } else {
        // if local storage contains some value then this part of code will be executed
        // style for each todo item in thi list
        var content_div = document.getElementById("content");
        var styleSuper = " display:flex; width:98%;margin:auto;background:#7bbda7;border-radius:10px; height:auto; margin-bottom:5px;"
        var sideMenuStyle = "width:20%; float:right; font-size:15px; cursor: pointer; padding-top:10px; padding-left:5px; color:white;"
        var pendingStyle = "padding-top:10px; width:80%; float:left; color:white;";


        // creating line break with
        var brk = document.createElement("div");
        brk.id = 'brk';
        brk.innerHTML = '</br>';


        //  designing the content inside the todo list
        var titleStyle = "font-weight:bold; padding-left:10px;padding-bottom:5px;";
        var contentStyle = "padding-left:10px; padding-bottom:5px;";
        var detailsStyle = "padding-left:10px; font-size:10px;";
        var styleBtn = "margin-bottom:3px; margin-top:10px; padding:2px; color:#f3f3f3; background:#135c78; width:90%; border-radius:10px;";

        for (var key in localStorage) {
            // for - in loop is a feature of es6, it will run for each elemnt in the local storage
            var txt = JSON.parse(localStorage.getItem(key));
            var keyed = key;
            var superTodo = document.createElement("div");
            superTodo.setAttribute("class", "super-todo");
            superTodo.style.cssText = styleSuper;


            var temp_todo = document.createElement("div");
            temp_todo.setAttribute("class", "todo-item");

            var temp_title = document.createElement("div");
            temp_title.setAttribute("class", "todo-header");
            temp_title.appendChild(document.createTextNode(txt.title));

            var temp_content = document.createElement("div");
            temp_content.setAttribute("class", "todo-content");
            temp_content.appendChild(document.createTextNode(txt.content));

            var temp_details = document.createElement("div");
            temp_details.setAttribute("class", "todo-details");
            temp_details.style.cssText = "color:#d2e5af;";
            temp_details.appendChild(document.createTextNode("Last Updated : " + txt.time));

            // side menu
            var sideMenu = document.createElement("div");

            // text, button and border style according to the status of todo item
            if (txt.status == "Pending") {
                var side_text = document.createTextNode(" Status : Pending");
                var ext = document.createTextNode("In-Progress");
                var btn = document.createElement("button");
                sideMenuStyle += "border-left: 5px solid #ff4d4d;";
            } else if (txt.status == "In-Progress") {
                var side_text = document.createTextNode("Status : In-Progress");
                var ext = document.createTextNode("Done");
                var btn = document.createElement("button");
                sideMenuStyle += "border-left: 5px solid #ffff7f;";
            } else if (txt.status == "Done") {
                var side_text = document.createTextNode("Status : Done");
                var ext = document.createTextNode("Delete");
                var btn = document.createElement("button");
                sideMenuStyle += "border-left: 5px solid #99ff99;";
            }

            // assigning the style to the each elemnt into the todo item
            btn.setAttribute("id", keyed);
            temp_todo.style.cssText = pendingStyle;
            temp_title.style.cssText = titleStyle;
            temp_content.style.cssText = contentStyle;
            temp_details.style.cssText = detailsStyle;
            sideMenu.style.cssText = sideMenuStyle;
            btn.style.cssText = styleBtn;


            // append all the items into required postions
            temp_todo.appendChild(temp_title);
            temp_todo.appendChild(temp_content);
            temp_todo.appendChild(temp_details);

            sideMenu.appendChild(side_text);
            //sideMenu.appendChild(brk);
            btn.appendChild(ext);
            sideMenu.appendChild(btn);

            superTodo.appendChild(temp_todo);
            superTodo.appendChild(sideMenu);
            content_div.appendChild(superTodo);

            // onlick event for all the elemtns in list
            document.getElementById(keyed).onclick = function () {
                var elem = JSON.parse(localStorage.getItem(this.id));
                if (elem.status == "Pending") {
                    var status = "In-Progress";
                    var time = new Date();
                    var jsonText = '{"title":"' + elem.title + '","content":"' + elem.content + '","status":"' + status + '","time":"' + time + '"}';
                    localStorage.setItem(keyed, jsonText);
                } else if (elem.status == "In-Progress") {
                    var status = "Done";
                    var time = new Date();
                    var jsonText = '{"title":"' + elem.title + '","content":"' + elem.content + '","status":"' + status + '","time":"' + time + '"}';
                    localStorage.setItem(keyed, jsonText);
                }
                if (elem.status == "Done") {
                    localStorage.removeItem(keyed);
                }
                document.getElementById("content").innerHTML = "";
                showContent();
            }
        }
    }
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__showContent_js__ = __webpack_require__(0);


window.pageStyle = function () {

    // style for container, header and content
    var styleContainer = "max-width:700px; margin:auto; box-shadow : 3px 3px 3px 3px #f3f3f3; border-radius:5px 5px 0px 0px; position:relative;";
    var styleHeader = "width:100%; border:inherit; height:50px; background: linear-gradient(to right,#135c78, #366c8d, #135c78); color:white; font-size : 20px; font-family:cursive; text-align:center; padding-top:40px; border-radius:inherit;";
    var styleContent = "width : 100%; background:#d2e5af; height:600px; overflow-y: auto; position:relative; padding-top:5px;";

    //body css
    document.body.style.cssText = "background:#fff; font-family: 'Raleway', sans-serif";

    // appContainer : contains the whole app window
    var appContainer = document.createElement("div");
    appContainer.style.cssText = styleContainer;

    // appHeader : Header of the the to do app
    var appHeader = document.createElement("div");
    appHeader.style.cssText = styleHeader;
    var appText = document.createTextNode("To Do");
    appHeader.appendChild(appText);

    // appContent : Contains the content of to do App
    var appContent = document.createElement("div");
    appContent.setAttribute("id", "content");
    appContent.style.cssText = styleContent;


    // appending files with each
    appContainer.appendChild(appHeader);
    appContainer.appendChild(appContent);
    document.body.appendChild(appContainer);

    Object(__WEBPACK_IMPORTED_MODULE_0__showContent_js__["a" /* showContent */])(); // calling to display to do items
}





/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addTodo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__showContent_js__ = __webpack_require__(0);

function addTodo() {

    // taking inpout from prompt
    var title = prompt("Title :");
    var content = prompt("To Do :");
    var status = "Pending";
    var time = new Date();

    // json object created with help of values from prompt
    var jsonText = '{"title":"' + title + '","content":"' + content + '","status":"' + status + '","time":"' + time + '"}';

    // storing json object into the local storage with key name as the time
    localStorage.setItem(time, jsonText);
    document.getElementById("content").innerHTML = "";
    Object(__WEBPACK_IMPORTED_MODULE_0__showContent_js__["a" /* showContent */])();
}

/***/ })
/******/ ]);
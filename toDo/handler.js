import {showContent} from './showContent.js';

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

    showContent(); // calling to display to do items
}




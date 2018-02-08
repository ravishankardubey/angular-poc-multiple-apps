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
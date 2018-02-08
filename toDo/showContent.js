import {addTodo} from './addToDo.js';

export function showContent() {
    var styleAdd = "width:50px; height:50px; border-radius:25px; background:#366c8d; position:absolute; bottom:10px; right:10px;cursor: pointer; font-size : 40px; color:white; text-align:center;";
    var addTask = document.createElement("div");
    addTask.style.cssText = styleAdd;
    addTask.appendChild(document.createTextNode("+"));
    addTask.onclick = addTodo;
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
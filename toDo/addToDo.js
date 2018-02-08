import {showContent} from './showContent.js';
export function addTodo() {

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
    showContent();
}
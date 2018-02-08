import {getBody} from './components/getBody.js';
import {navbar} from './components/navbar.js';
import {selectForm} from './components/selectForm.js';
import {callAPI} from './components/callAPI.js'

window.jsLoader = function () {
    document.getElementById("table-content").style.display = "none";
    document.getElementById("nav").innerHTML = navbar;
    document.getElementById("form-selector").innerHTML = selectForm;
    document.getElementById("run-api").onclick = function () {
        callAPI();
    }
}
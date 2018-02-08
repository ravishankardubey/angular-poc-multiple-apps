// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js`';
import {getBody} from './components/getBody.js';
import {navbar} from './components/navbar.js';
import {selectForm} from './components/selectForm.js';
import {callForm} from './components/callForm.js';

window.jsLoader = function(){
    document.getElementById("nav").innerHTML = navbar;
    //document.getElementById("body-container").innerHTML = getBody;
    document.getElementById("form-selector").innerHTML = selectForm;
    document.getElementById("sel1").onchange = callForm;
    console.log(callForm);
    console.log(onSubmit);
    
}
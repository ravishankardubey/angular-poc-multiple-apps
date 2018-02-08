import {formPersonalDetails} from './formPersonalDetails';
import {formPostalDetails} from './formPostalDetails.js';
import {onSubmit} from './onSubmit.js';

export function callForm() {
    if (this.value == "personalDetails") {
        document.getElementById("form-space").innerHTML = formPersonalDetails;
        document.getElementById("submit").onclick = onSubmit;
    }
    else if (this.value == "postalDetails") {
        document.getElementById("form-space").innerHTML = formPostalDetails;
        document.getElementById("submit").onclick = onSubmit;
    }
    else
        document.getElementById("form-space").innerHTML = "";
}
import {printPersonalDetails} from './printPersonalDetails.js';
import {printPostalDetails} from './printPostalDetails.js';
export function onSubmit() {
    if (this.value == "submit-personal")
    {
        document.getElementById("form-space").innerHTML = printPersonalDetails();

    }
    else if (this.value == "submit-postal")
    {
        document.getElementById("form-space").innerHTML = printPostalDetails();
    }
}
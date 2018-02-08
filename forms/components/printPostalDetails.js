export function printPostalDetails(){
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
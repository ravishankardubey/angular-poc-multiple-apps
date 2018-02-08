export function printPersonalDetails() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let github = document.getElementById("github").value;

    return `
    <div class ="row">
        <div class = "col-sm-4"></div>
        <div class = "col-sm-4">
        <table class="table table-hover">
            <tbody>
            <tr>
                <td><b>Name :</b></td>
                <td>${name}</td>
            </tr>
            <tr>
                <td><b>E-Mail :</b></td>
                <td>${email}</td>
            </tr>
            <tr>
               <td><b>Mobile :</b></td>
                <td>${mobile}</td>
            </tr>
            <tr>
               <td><b>GitHub :</b></td>
                <td>${github}</td>
            </tr>
            </tbody>
        </table>
        </div>
        <div class = "col-sm-4">\</div>
    </div>
    `;
}
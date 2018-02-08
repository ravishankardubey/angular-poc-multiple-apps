export function callAPI() {
  // JSON hosted over a url
  var url = "https://api.myjson.com/bins/sy71b";
  let innerContent = ``;
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      document.getElementById("table-content").style.display = "unset";
      data.map(function (items) {
        innerContent += `<tr>
          <td>${items.id}</td>
          <td>${items.first_name}</td>
          <td>${items.last_name}</td>
          <td>${items.gender}</td>
          <td>${items.email}</td>
          <td>${items.ip_address}</td>
        </tr>`
      })
      document.getElementById("table-body").innerHTML += innerContent;
    })
    .catch(function (error) {
      console.log(" *** ERROR *** : " + error);
    });
}
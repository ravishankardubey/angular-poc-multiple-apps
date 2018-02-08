import {getKey} from './getKey.js';
export function searchCity(cityName) {
    // alert(cityName);
    var optionVal = "";
    let cityURL = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey="+getKey+"&q="+cityName;
    // let cityURL = "https://api.myjson.com/bins/14i39b"; // test url
    fetch(cityURL)
        .then((resp) => resp.json())
        .then(function (data) {
            console.log(data);
            data.map(function(items){
                // optionVal += `<option data-value="${items.Key}">${items.EnglishName}, ${items.AdministrativeArea.EnglishName}, ${items.Country.EnglishName}</option>`;
                optionVal += `<option value="${items.EnglishName}, ${items.AdministrativeArea.EnglishName}, ${items.Country.EnglishName}, ${items.Key}"></option>`;
                //console.log(optionVal);
                //console.log(items.Country.EnglishName)
            })
            document.getElementById("search-res").innerHTML = optionVal;
        })
        .catch(function (error) {
            console.log(" *** ERROR *** : " + error);
        });
}
import Rx from 'rxjs';
import {navbar} from './Components/Header/navbar.js';
import {footer} from './Components/Footer/footer.js';
import {searchCity} from './Components/API/searchCity.js';
import {showWeather} from './Components/Weather/showWeather.js';

window.onload = function () {
    // alert("Hello!");
    document.getElementById("navbar").innerHTML = navbar;
    document.getElementById("footer").innerHTML = footer;
    var search = document.getElementById("search");
    Rx.Observable.fromEvent(search, 'keyup')
    .debounceTime(500)
        .subscribe(function (e) {
            searchCity(search.value);
        });
    var x = document.getElementById("search-hit").onclick = function () {
        var lastIndex = search.value.lastIndexOf(",");
        var cityName = search.value.substring(0, lastIndex);
        var cityKey = search.value.substring(lastIndex + 1);
        showWeather(cityName,cityKey);
    }
}
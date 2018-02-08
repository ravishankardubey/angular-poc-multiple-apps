import {getKey} from '../API/getKey.js';
export function showWeather(cityName,cityKey){
let URL = "http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/"+cityKey+"?apikey="+getKey;
let cityURL = "http://dataservice.accuweather.com/locations/v1/"+cityKey+"?apikey="+getKey;
var weather = ``;
document.getElementById("weather-details").innerHTML = weather;
fetch(URL)
        .then((resp) => resp.json())
        .then(function (data) {
            console.log(data);
			weather = ``;
            weather = `
              <div class="card">
                    <div class="card-content">
                    <p><b>${cityName}</b><br>${data[0].IconPhrase}</p>
                        <table>
                            <tr><td>City </td><td>: ${cityName}</td></tr>
                            <!--<tr><td>Temperature </td><td>: ${(data[0].Temperature.Value-32)*5/9} ${data[0].Temperature.Unit}</td></tr>-->
							<tr><td>Temperature </td><td>: ${(data[0].Temperature.Value-32)*5/9} C</td></tr>
							<tr><hr></tr>
            `;
            //document.getElementById("weather-details").innerHTML = weather;
            alert(weather);
        })
        fetch(cityURL)
        .then((resp) => resp.json())
        .then(function (data) {
            console.log(data);
            weather += `
                            <tr><td>Time Zone</td><td>: ${data.TimeZone.Name}</td></tr>
                            <tr><td>Latitude</td><td>: ${data.GeoPosition.Latitude}</td></tr>
                            <tr><td>Longitude</td><td>: ${data.GeoPosition.Longitude}</td></tr>
                            <tr><td>Elevation</td><td>: ${data.GeoPosition.Elevation.Metric.Value} ${data.GeoPosition.Elevation.Metric.Unit} from sea level</td></tr>
                        </table>
                    </div>
                </div>
            `;
            alert(weather);
            document.getElementById("weather-details").innerHTML = weather;
			weather = ``;
        })


        .catch(function (error) {
            console.log(" *** ERROR *** : " + error);
        });
}
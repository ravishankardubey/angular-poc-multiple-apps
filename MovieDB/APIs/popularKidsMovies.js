import Rx from 'rxjs';
import {displayMovies} from '../components/movie/displayMovies.js';
import {getKeyURL,popularMoviesURL,highestRatedMoviesURL,popularKidsMoviesURL} from './getKey.js';
export function popularKidsMovies() {
    document.getElementById("movie-items").innerHTML = "";
    var observable = Rx.Observable.fromPromise(
        fetch(popularKidsMoviesURL)
            .then((resp) => resp.json())
    );
    
    observable.subscribe(function (e) {
        e.results.map(function (items) {
            displayMovies(items);
        })
    });
}

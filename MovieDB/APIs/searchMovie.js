import Rx from 'rxjs';
import {getKey} from './getKey.js';
import {displayMovies} from '../components/movie/displayMovies.js'
export function searchMovie(movieName) {
    let movieURL = "https://api.themoviedb.org/3/search/movie?include_adult=true&page=1&language=en-US&api_key=" + getKey + "&query=" + movieName;
    document.getElementById("movie-items").innerHTML ="";
    var observable   = Rx.Observable.fromPromise(
        fetch(movieURL)
        .then((resp) => resp.json())
    );
    observable.subscribe(function(e){
        
        e.results.map(function(items){
            displayMovies(items);
        })
    });
}
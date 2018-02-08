import Rx from 'rxjs';
import {navbar} from './components/header/navbar.js';
import {footer} from './components/footer/footer.js';
import {popularMovies} from './APIs/popularMovies.js';
import {highestRatedMovies} from './APIs/highestRatedMovies.js';
import {popularKidsMovies} from './APIs/popularKidsMovies.js';
import {searchMovie} from './APIs/searchMovie.js';

window.onload = function () {
    document.getElementById("navbar").innerHTML = navbar;
    popularMovies();
    document.getElementById("PopularMovies").onclick = function () {
        popularMovies();
    }
    document.getElementById("HighestRatedMovies").onclick = function () {
        highestRatedMovies();
    }
    document.getElementById("PopularKidsMovies").onclick = function () {
        popularKidsMovies();
    }
    var search = document.getElementById("search");
    Rx.Observable.fromEvent(search, 'keyup')
        .debounceTime(500)
        .subscribe(function (e) {
            searchMovie(search.value);
        });
    document.getElementById("footer").innerHTML = footer;
}
// import {highestRatedMovies} from '../../APIs/highestRatedMovies.js';
// import {popularKidsMovies} from '../../APIs/popularKidsMovies.js';
// import {popularKMovies} from '../../APIs/popularMovies.js';
export const navbar = `
  <ul id="dropdown1" class="dropdown-content">
      <li><a href="#!" id="PopularMovies">Popular Movies</a></li>
      <li><a href="#!" id="HighestRatedMovies">Highest Rated Movies</a></li>
      <li class="divider" ></li>
      <li><a href="#!" id="PopularKidsMovies">Popular Kids Movies</a></li>
  </ul>
  <nav>
      <div class="nav-wrapper">
          <a href="#!" class="brand-logo">MovieDB</a>
          <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
              <li><input id="search" type="search" placeholder="Search Here!" style="width:500px;">
                  <label class="label-icon" for="search"></label>
              </li>
              <li>
                <a class="dropdown-button" href="#!" data-activates="dropdown1">Popular Movies<i class="material-icons right">arrow_drop_down</i></a>
              </li>
          </ul>
          <ul class="side-nav" id="mobile-demo">
              <li><a href="about.html">About</a></li>
          </ul>
      </div>
  </nav>`;
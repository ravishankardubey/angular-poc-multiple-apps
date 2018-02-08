export function displayMovies(movieJSON){
    var imgURL = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
    console.log(movieJSON);
    var movieDetails = `
    <div class="row">
                <div class="col s12 m3">
                </div>
                <div class="col s12 m6">
                    <div class="card horizontal z-depth-5">
                        <div class="card-image">
                            <img src="${imgURL}${movieJSON.poster_path}">
                        </div>
                        <div class="card-stacked">
                        
                            <div class="card-content">
                            <span><i class="material-icons">movie</i> <b> ${movieJSON.title}</b></span> <span class="right"><b>${movieJSON.vote_average}</b> <i class="material-icons">star</i></span><br>
                            <span><i class="material-icons">date_range</i> <b> ${movieJSON.release_date}</b></span>
                                <p>${movieJSON.overview}</p>
                            </div>
                            <div class="card-action">
                                <a href="#">This is a link</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col s12 m3">
                </div>
    </div>
    `;
    document.getElementById("movie-items").innerHTML += movieDetails;
}

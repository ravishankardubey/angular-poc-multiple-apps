export const getKey = "4870de77a45493922a6826e802cf5786";
export let popularMoviesURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key="+getKey;
export let highestRatedMoviesURL = " http://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&api_key="+getKey;
export let popularKidsMoviesURL = " http://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key="+getKey;

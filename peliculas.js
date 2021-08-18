function searchMovieByTitle(){

    var title = document.getElementById("title").value;

    fetch("http://www.omdbapi.com/?t=" + title + "&apikey=55e45ea5")
    .then(success => success.json()).
    then((movies) => showMovie(movies) )
    .catch((error)=>console.log(error));

    document.getElementById("title").value = "";
   

}


function listMovies(){

    var title = document.getElementById("title").value;

    fetch("http://www.omdbapi.com/?s=" + title + "&apikey=55e45ea5")
    .then(success => success.json()).
    then((movies) => showMovieList(movies) )
    .catch((error)=>console.log(error));

    document.getElementById("title").value = "";
}


function showMovieList(movies){

    for(movie of movies.Search){


        let div = document.createElement("div")

        document.getElementById("peliculas").appendChild(div)

        div.innerHTML = '<img  src=' + movie.Poster + 'alt= "movie" />' + 
        '<div> <br>' +  movie.Title + ", " + movie.Year + ' (' + movie.Director +  ')' + '</br></div>' + movie.Plot + "<div>"


    }

}

function showMovie(movie){

    document.getElementById("peliculas").innerHTML = '<img  src=' + movie.Poster + 'alt= "movie" />' + 
    '<div> <br>' +  movie.Title + ", " + movie.Year + ' (' + movie.Director +  ')' + '</br></div>' + movie.Plot + "<div>";
}





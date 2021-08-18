function searchMovieByTitle(){

    var title = document.getElementById("title").value;

    fetch("http://www.omdbapi.com/?t=" + title + "&apikey=55e45ea5")
    .then(success => success.json()).
    then((movies) => showMovie(movies) )
    .catch((error)=>console.log(error));

    document.getElementById("title").value = "";
   

}




function showMovie(movie){

    document.getElementById("peliculas").innerHTML = '<img  src=' + movie.Poster + 'alt= "movie" />' + 
    '<div> <br>' +  movie.Title + ", " + movie.Year + ' (' + movie.Director +  ')' + '</br></div>' + movie.Plot + "<div>";
}





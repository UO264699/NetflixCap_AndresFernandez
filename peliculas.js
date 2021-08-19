
var page = 2;

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

    fetch("http://www.omdbapi.com/?s=" + title + "&page=" + page  + "&apikey=55e45ea5")
    .then(success => success.json()).
    then((movies) => showMovieList(movies) )
    .catch((error)=>console.log(error));

    document.getElementById("title").value = "";
}


function showMovieList(movies){

    document.getElementById("peliculas").innerHTML= "";

    for(movie of movies.Search){

        

        let div = document.createElement("div")

        document.getElementById("peliculas").appendChild(div)
        div.innerHTML = `<div id=pelicula class="card" style="width: 18rem">
        <img  src="${movie.Poster}" alt= "movie" />
        <div class="card-body">
        <h5 class="card-title"> ${movie.Title} 
        </h5>
        <p class="card-text"> ${movie.Year}  
        </p>
        </div>
        </div>`;



    }

   

}

function showMovie(movie){
    document.getElementById("peliculas").innerHTML = "";

    let div = document.createElement("div")

    document.getElementById("peliculas").appendChild(div)

   


    div.innerHTML = `<div id=pelicula class="card" style="width: 18rem">
    <img  src="${movie.Poster}" alt= "movie" />
    <div class="card-body">
    <h5 class="card-title"> ${movie.Title} 
    </h5>
    <p class="card-text"> ${movie.Year}  
    </p>
    <p class="card-text"> ${movie.Plot}  
    </p>
    </div>
    </div>`;
}






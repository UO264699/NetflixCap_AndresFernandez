
var page = 1;

var totalPages=1;

var searched = false;

var title="";

function searchMovieByTitle(){


    title = document.getElementById("title").value;
    page=1;    
    updatePage();
    
        fetch("https://www.omdbapi.com/?t=" + title  + "&apikey=55e45ea5")
        .then(success => success.json()).
        then((movie) => showMovie(movie) )
        .catch((error)=>console.log(error));
    

    document.getElementById("title").value = "";
   

 
}


function listMovies(){

    page=1;
    updatePage();
    

      title = document.getElementById("title").value;
        localStorage.setItem('title', title);
        searched = true;
    


    fetch("https://www.omdbapi.com/?s=" + localStorage.getItem('title') + "&page=" + page  + "&apikey=55e45ea5")
    .then(success => success.json()).
    then((movies) => showMovieList(movies) )
    .catch((error)=>console.log(error));

    document.getElementById("title").value = "";
}



function showMovieList(movies){


    totalPages = parseInt(movies.totalResults)/10 + 1;
    document.getElementById("peliculas").innerHTML= "";

    for(movie of movies.Search){

        let div = document.createElement("div")

        document.getElementById("peliculas").appendChild(div)
        div.innerHTML = `<div id=pelicula class="card " style="width: 18rem">
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

function updatePage(){

    document.getElementById("actualPage").innerText = page;
}

function fetchMovies(){
    fetch("https://www.omdbapi.com/?s=" + localStorage.getItem('title') + "&page=" + page  + "&apikey=55e45ea5")
    .then(success => success.json()).
    then((movies) => showMovieList(movies) )
    .catch((error)=>console.log(error));

    searched = false;
}

function goToPreviousPage(){


    if(page>=2){

        page--;
    }
    
    
    fetchMovies();

    updatePage();

}



function goToNextPage(){


    if(page<=totalPages){

        page++;
    }
    
    
    fetchMovies();

    updatePage();

}

function showMovie(movie){
    document.getElementById("peliculas").innerHTML = "";

    let div = document.createElement("div")

    document.getElementById("peliculas").appendChild(div)

   


    div.innerHTML = `<div id=pelicula class="card d-flex justify-content-center" style="width: 18rem">
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






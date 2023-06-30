// Brings Most Popular Movies
const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

// Base URL for image loading
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

// Brings Searched Movie
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


//Getting element movie-box fom html part
const movieBox= document.querySelector("#movie-box");


// Async function as it fetching url movies from third party source
const getMovies = async (url) => {

    const response = await fetch(url);
    const data = await response.json();
    showMovies(data);
}

// Initial call to fetch data
 getMovies(APIURL);


 

// Shows movie on the Web Page after getting from getMovies Function
const showMovies = (data) => {
     
    // empties the movie box then loads new
    movieBox.innerHTML = "";
    // For each each data fetched from api
    data.results.forEach(
        (result) => {

            const imagePath = result.poster_path === null ? "img/image-missing.png" : IMGPATH + result.poster_path;

            const box = document.createElement("div")
            box.classList.add("box")
            // contents to be shown in a movie box
            box.innerHTML = `
                <img src="${imagePath}" alt="" />
                <div class="overlay">

                    <div class="title"> 
                        <h2> ${result.original_title}  </h2>
                        <span> ${result.vote_average} <span>
                    </div>

                    <h3>Overview:</h3>
                    <p> 
                        ${result.overview}
                    </p>
                 </div>
            `
            movieBox.appendChild(box);
        }
    )
}


// For Searching movies name in button
document.querySelector("#search").addEventListener(

    "keyup", // keyup event will get triggered when user is typing for searching a movie
    function (event) 
    {
        if (event.target.value != "") 
        {
            getMovies(SEARCHAPI + event.target.value)
        } 
        else 
        {
            getMovies(APIURL);
        }
    }
)
















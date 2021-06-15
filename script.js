
/* function movieSection(movieTitle, movieYear, isOlder) { 
    return`
    <section class="movie">
        <h2>${movieTitle}</h2>   
        <h3>${movieYear}</h3>
        <h4>${isOlder}</h4>
    </section>
    `;

} */


function movieSection(movieTitle, movieYear) { 
    
    let isNewer ="This movie is older than 2000.";

    if (movieYear >= 2000){
        
        isNewer = "This movie is newer than 2000."
    }
    
    return`
    <section class="movie">
        <h2>${movieTitle}</h2>   
        <h3>${movieYear}</h3>
        <h4>${isNewer}</h4>
    </section>
    `;

}


 function logMOvieTitle(movieTitle){

    console.log(movieTitle);
 }

 
function _loadEvent() {

    const rootElement = document.getElementById("root");

    let a = 5;

    /* console.log(movies[0].title);
    console.log(movies[1].title);
    console.log(movies[a].title]);
    console.log(movies[movies.length-1]).title; */ /* utolso cim listazasa */

    for (const movie of movies) {

    /* console.log(movie.title); */

    /*     if (movie.year >= 2000) {

        console.log(movie.title);
        rootElement.insertAdjacentHTML("beforeend", movieSection(movie.title, movie.year, "This movie is newer than 2000."))

        
    }  else {
        rootElement.insertAdjacentHTML("beforeend", movieSection(movie.title, movie.year, "This movie is older than 2000."))

    }  */
        logMOvieTitle(movie.Title);
        rootElement.insertAdjacentHTML("beforeend", movieSection(movie.title, movie.year))

}

/* for (let index = 0; index < movies.length; index++) {

let movie = movies[index];
console.log(index);
console.log(movie.title); */
/* } */    



}

window.addEventListener("load", _loadEvent);
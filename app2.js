// variables
let view = document.getElementById("container");
let imageOne = document.getElementById("imageActorOne");
let imageTwo = document.getElementById("imageActorTwo");
let name = document.getElementById("name");
let button = document.getElementById("in1");
let buttonTwo = document.getElementById("in2");
let moviesList = document.getElementById("movies");
let linkYoutube = document.getElementById("videoTrailer");


//fonction recherche liste films par acteur
const setResults1 = async (findActor) => {
  let input = document.getElementById(findActor).value;
  let search = "https://imdb-api.com/en/API/SearchName/k_djtmiu0u/" + input;
  let searchActor = await fetch(search);
  let responseActor = await searchActor.json();
  let idActor = responseActor.results[0].id;
  let listeFilms = `https://imdb-api.com/en/API/Name/k_djtmiu0u/${idActor}`;
  let requestAsk = await fetch(listeFilms);
  let responseRequest = await requestAsk.json();
  let listMovies = responseRequest.castMovies;
//   nameActorOne.textContent = responseActor.results[0].id;
//   imageOne.src = responseActor.results[0].image;
//   nameActorTwo.textContent = responseActor.results[0].id;
//   imageTwo.src = responseActor.results[0].image;
// moviesList.textContent = responseActor.castMovies;
  return listMovies;
};
setResults1("in1");

//fonction recherche film commun
const searchCorrespondence = async () => {
  let correspondence = [];
  let actorMovies1 = await setResults1("in1");
  let actorMovies2 = await setResults1("in2");

  for (let i = 0; i < actorMovies1.length; i++) {
    for (let j = 0; j < actorMovies2.length; j++) {
      if (
        actorMovies1[i].id == actorMovies2[j].id &&
        actorMovies1[i].role == "Actor"
      ) {
        correspondence.push(actorMovies1[i].id);
      }
    }
  }
  return correspondence;
};
// searchCorrespondence();



//fonction recherche du trailer
const searchTrailer = async () => {
  let videoEmbed = document.getElementById("video");
  let idFilm = await searchCorrespondence();
  let linkTrailer = "https://imdb-api.com/en/API/Trailer/k_djtmiu0u/" + idFilm[0];
  let searchTrailer = await fetch(linkTrailer);
  let responseTrailer = await searchTrailer.json();
  let embedVideo = responseTrailer.linkEmbed;
  //const linkToVideo = embedVideo;
  //document.getElementById("videoTrailer").innerText += linkToVideo;
  const trailer = document.createElement('trailer');
  trailer.src = responseTrailer.linkEmbed;
  const box = document.getElementById('video');
  box.append(trailer);
  return responseTrailer;
};
// searchTrailer();

//https://image.tmdb.org/t/p/original//r6Sr0uSiVbQOvqoebZoy5rzlPvJ.jpg

const searchPoster = async () =>{
  let myFilm = await searchCorrespondence();
  let poster = "https://api.themoviedb.org/3/find/" + myFilm +  "?api_key=584c23b365d64166b0051e1dfe1ad3fb&language=en-US&external_source=imdb_id"
  let searchPoster = await fetch(poster);
  let responsePoster = await searchPoster.json();
  let resultPoster = "https://image.tmdb.org/t/p/original/" + responsePoster.movie_results[0].poster_path
  console.log(resultPoster)
  const myPoster = document.createElement('myPoster');
  myPoster.src = resultPoster;
  const box = document.getElementById('poster');
  box.append(myPoster);
}
searchPoster()

const titlesbyActor = async () => {
  const whichActor = await setResults1("in1");
  const allTitles = [];
  for (let i = 0; i < whichActor.length; i++) {
    allTitles.push(whichActor[i].id);
  }
  return allTitles
};

//fonction recherche genre
// const searchGenre = async () => {
//   let genreCorrespondence = []
//   let idImdb = await titlesbyActor();
//   for (let i = 0; i < idImdb.length; i++){
//     let linkGenre = "https://api.themoviedb.org/3/find/" + idImdb[i] +  "?api_key=584c23b365d64166b0051e1dfe1ad3fb&language=en-US&external_source=imdb_id";
//     let searchGenre = await fetch(linkGenre);
//     let responseGenre = await searchGenre.json();
//     let resultGenres = responseGenre.movie_results[0].genre_ids;
//     if (resultGenres == leboutondeKhadija){
//       genreCorrespondence.push(resultGenres[i]);
//     }
//   }
// } 
//Tableau avec numéros des genres
//console.log(responseGenre.movie_results[0].genre_ids)
// searchGenre();


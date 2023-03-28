// variables
let view = document.getElementById("container");
let image = document.getElementById("image");
let name = document.getElementById("name");
let button = document.getElementById("in1");
let moviesList = document.getElementById("movies");
let linkYoutube = document.getElementById("videoTrailer");

//fonction recherche liste films par acteur
const setResults = async (findActor) => {
  let input = document.getElementById(findActor).value;
  let search = "https://imdb-api.com/en/API/SearchName/k_7haxddql/" + input;
  let searchActor = await fetch(search);
  let responseActor = await searchActor.json();
  let idActor = responseActor.results[0].id;
  let listeFilms = `https://imdb-api.com/en/API/Name/k_7haxddql/${idActor}`;
  let requestAsk = await fetch(listeFilms);
  let responseRequest = await requestAsk.json();
  let listMovies = responseRequest.castMovies;

  // image.src = responseActor.results[0].image;
  // moviesList.textContent = responseActor.castMovies;
  return listMovies;
};

button.addEventListener("click", setResults("in1"), setResults("in2"));

//fonction recherche film commun
const searchCorrespondence = async () => {
  let correspondence = [];
  let actorMovies1 = await setResults("in1");
  let actorMovies2 = await setResults("in2");

  for (let i = 0; i < actorMovies1.length; i++) {
    for (let j = 0; j < actorMovies2.length; j++) {
      if (actorMovies1[i].id == actorMovies2[j].id && actorMovies1[i].role == "Actor") {
        correspondence.push(actorMovies1[i].id);
      }
    }
  }
  return correspondence;
};
// searchCorrespondence();
w
//fonction recherche du trailer
const searchTrailer = async () => {
  let idFilm = await searchCorrespondence()
  let linkTrailer = "https://imdb-api.com/en/API/YouTubeTrailer/k_7haxddql/"+ idFilm[0];
  let searchTrailer = await fetch(linkTrailer);
  let responseTrailer = await searchTrailer.json();
  // console.log(responseTrailer)
  const linkToYoutube = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoTrailer.videoId}" title="YouTube video player" frameborder="0" allowfullscreen></iframe>`;
  document.getElementById('videoTrailer').innerText += linkToYoutube;
  
  return responseTrailer;
};
searchTrailer();
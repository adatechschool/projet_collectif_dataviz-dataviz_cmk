
let view = document.getElementById("container");
let image = document.getElementById("image");
let name = document.getElementById("name");
let button = document.getElementById("in1");
let moviesList = document.getElementById("movies");

const setResults = async (findActor) => {
  let input = document.getElementById(findActor).value;
  let search = "https://imdb-api.com/en/API/SearchName/k_djtmiu0u/" + input;
  let searchActor = await fetch(search);
  let responseActor = await searchActor.json();
  let idActor = responseActor.results[0].id;
  let listeFilms = `https://imdb-api.com/en/API/Name/k_djtmiu0u/${idActor}`;
  let requestAsk = await fetch(listeFilms);
  let responseRequest = await requestAsk.json();
  let listMovies = responseRequest.castMovies;

  // image.src = responseActor.results[0].image;
  // moviesList.textContent = responseActor.castMovies;
  return listMovies;
};

// button.addEventListener("click", setResults("in1"), setResults("in2"));

const searchCorrespondence = async () => {
  let correspondence = [];
  let actorMovies1 = await setResults("in1");
  let actorMovies2 = await setResults("in2");

  for (let i = 0; i < actorMovies1.length; i++) {
    for (let j = 0; j < actorMovies2.length; j++) {
      if (actorMovies1[i].id == actorMovies2[j].id && actorMovies1[i].role == "Actor") {
        correspondence.push(actorMovies1[i]);
      }
    }
  }
  console.log(correspondence)
  return correspondence
};
searchCorrespondence();

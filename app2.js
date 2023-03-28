//let idActor = 0

//   const userRequest1 = getValue1()
//   fetch(userRequest1)
//     .then(response => {
//         console.log(response)
//       return response.json()
//     })
//     .then(datas => {
//     idActor = datas.results[0].id
//       console.log(datas.results[0].id)
//       console.log(datas)
//       return idActor
//     })





// const setResults1 = async () => {
//     let input = document.getElementById("in1").value
//     let search = "https://imdb-api.com/en/API/SearchName/k_hnh7347t/" + input
//     let searchActor = await fetch(search);
//     let responseActor = await searchActor.json();
//     let idActor = responseActor.results[0].id;
//     let listeFilms = `https://imdb-api.com/en/API/Name/k_hnh7347t/${idActor}`;
//     let requestAsk = await fetch(listeFilms);
//     let responseRequest = await requestAsk.json();
//     console.log(responseRequest);
// }
// setResults1();

let view = document.getElementById('container');
let image = document.getElementById('image');
let name =  document.getElementById('name');
let button = document.getElementById('in1');
let moviesList = document.getElementById('movies');

const setResults = async (findActor) => {
    let input = document.getElementById(findActor).value
    let search = "https://imdb-api.com/en/API/SearchName/k_tz0b436v/" + input
        let searchActor = await fetch(search);
    let responseActor = await searchActor.json();
    let idActor = responseActor.results[0].id;
    let listeFilms = `https://imdb-api.com/en/API/Name/k_tz0b436v/${idActor}`;
    let requestAsk = await fetch(listeFilms);
    let responseRequest = await requestAsk.json();
    console.log(responseRequest);

    // image.src = responseActor.results[0].image;
    // moviesList.textContent = responseActor.castMovies;

return responseRequest
}
//setResults("in2");
button.addEventListener('click', setResults("in1"), setResults("in2"));

const searchCorrespondence = async (movies) => {
        let actorMovies1 = setResults("in1")
let actorMovies2 = setResults("in2")
}

// for(let i = 0; i < responseRequest.castMovies[i].length; i++) {
//     console.log(responseRequest.castMovies);
// }







// fetch(listeFilms)
// .then(response => {
//     console.log(response)
//   return response.json()
// })
// .then(datas => {
//   console.log(datas)
// })
   
//     const test = "https://imdb-api.com/en/API/SearchName/k_5lsv0goy/nm0000138"
//   fetch(test)
//     .then(response => {
//       return response.json()
//     })
//     .then(datas => {
//       console.log(datas)
//     })

    
//   function getValue2() {
//     // On sélectionne l'élément input et on récupère sa valeur
//     let input = document.getElementById("in2").value
//     let recherche = "https://imdb-api.com/en/API/SearchName/k_5lsv0goy/" + input
  
//     // On affiche la valeur
//     alert(recherche)
//     return recherche
//   }
//   const userRequest2 = getValue2()
//   fetch(userRequest2)
//     .then(response => {
//       return response.json()
//     })
//     .then(datas => {
//       console.log(datas)
//     })
  
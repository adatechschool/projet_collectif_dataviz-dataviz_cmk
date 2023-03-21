// TEST
// Autre test
let image = document.getElementById('image');
let title = document.getElementById('title');
let actorName = document.getElementById('actor');
// Scraping => thème  
// Exemple data : title, year,
let input = document.querySelector('input[type="search"]');

const requestApi = async () => {
  let nameToSearch = "abcdefghijklmnopqrstuvwxyz";
  let randomCharacter = nameToSearch[Math.floor(Math.random() * nameToSearch.length)]
  let requestString = `https://imdb-api.com/en/API/Title/k_1234567/tt1832382${randomCharacter}`;
  let data = await fetch(requestString);
  let response = await data.json();
  console.log(response);

  image.src = response.results.image;
  title.textContent = response.results.title;
  actorName.textContent = response.results.actorList;
}
requestApi();
input.addEventListener('search', requestApi);


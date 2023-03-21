// let view = document.getElementById('container');
// let image = document.getElementById('image');
// let name = document.getElementById('name');
// Scraping => thème  
// title, year,  

const requestApi = async () => {
  let requestString = `https://imdb-api.com/en/API/SearchMovie/k_5lsv0goy`;
  let data = await fetch(requestString);
  console.log(data);

  let response = await data.json();
  console.log(data.json());
  console.log(response);

}
requestApi();
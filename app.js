// let view = document.getElementById('container');
// let image = document.getElementById('image');
// let name = document.getElementById('name');
// Scraping => thème  
<<<<<<< HEAD
// title, year,  
=======
// Exemple data : title, year,
>>>>>>> 61870c65e74975371f320e90e6e073c94df0d128

const requestApi = async () => {
  let requestString = `https://imdb-api.com/en/API/SearchMovie/k_5lsv0goy`;
  let data = await fetch(requestString);
  console.log(data);

  let response = await data.json();
  console.log(data.json());
  console.log(response);

}
requestApi();
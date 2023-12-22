import { createElementForMovieTitles, createElementForCelebrities, createElementForTopTenMovies } from "./createElement.js";

export function displayTopTenMovies(movieArr) {

  const topTenPopularMovies = movieArr.slice(0, 10);

  topTenPopularMovies.forEach((movie) => {
    createElementForTopTenMovies(movie)
  });
}

export function displaySearchResult(objResultArr, selectedOption) {
  
  let imgBaseUrl;

  if(selectedOption == 'movie') {

    imgBaseUrl = `https://image.tmdb.org/t/p/w500`;
  
    objResultArr.forEach(movie => {
      console.log(movie);
      createElementForMovieTitles(movie, imgBaseUrl);
    })
  }
  else if(selectedOption == 'person') {

    imgBaseUrl = `https://image.tmdb.org/t/p/h632`;
  
    objResultArr.forEach(person => {
      console.log(person);
      createElementForCelebrities(person, imgBaseUrl);
    })
  }

}

export function removePrevSearchResult() {
  const contentContainer = document.querySelector("#contentContainer");
  contentContainer.innerHTML = "";
  contentContainer.classList.remove('error')
}

export function displayUndefinedResult() {
  const contentContainer = document.querySelector("#contentContainer");
  contentContainer.classList.remove("contentContainer");
  contentContainer.classList.add("error");

  contentContainer.innerHTML = 'If you tried to select the Movies dropdown, choose either Top Rated or Popular!';
}

export function displayNoSearchResult(input) {
  const contentContainer = document.querySelector('#contentContainer')
  contentContainer.classList.remove("contentContainer");
  contentContainer.classList.add("error");

  contentContainer.innerText = `Nothing was found when searching for ${input}...`
}

export function displayError(error) {
  console.log(error);

  const contentContainer = document.querySelector('#contentContainer')
  let message;

  if(error === '404 top rated') message = '404 top rated'
  else if(error === '404 popular') message = '404 popular'
  else if(error === '404 movie') message = '404 movie'
  else if(error === '404 person') message = '404 person'
  else message = 'Something went wrong'

  contentContainer.innerText = message;

}
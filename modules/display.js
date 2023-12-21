import { createElementForMovieTitles, createElementForCelebrities, createElementForTopTenMovies } from "./createElement.js";

export function displayTopTenMovies(movieArr) {
  const contentContainer = document.querySelector("#contentContainer");
  contentContainer.classList.remove("error");
  contentContainer.classList.add("contentContainer");

  const imgBaseUrl = `https://image.tmdb.org/t/p/w300`;

  const topTenPopularMovies = movieArr.slice(0, 10);

  topTenPopularMovies.forEach((movie) => {
    createElementForTopTenMovies(movie, imgBaseUrl)
  });
}

export function displaySearchResult(objResultArr, selectedOption) {
  const contentContainer = document.querySelector("#contentContainer");
  contentContainer.classList.remove('error')
  contentContainer.classList.add("contentContainer");

  let imgBaseUrl;

  if(selectedOption == 'movie') {

    imgBaseUrl = `https://image.tmdb.org/t/p/w185`;
  
    objResultArr.forEach(movie => {
      console.log(movie);
      createElementForMovieTitles(movie, imgBaseUrl);
    })
  }
  else if(selectedOption == 'person') {

    imgBaseUrl = `https://image.tmdb.org/t/p/w185`;
  
    objResultArr.forEach(person => {
      console.log(person);
      createElementForCelebrities(person, imgBaseUrl);
    })
  }

}

export function removePrevSearchResult() {
  const contentContainer = document.querySelector("#contentContainer");
  contentContainer.innerHTML = "";
}

export function displayUndefinedResult() {
  const contentContainer = document.querySelector("#contentContainer");
  contentContainer.classList.remove("contentContainer");
  contentContainer.classList.add("error");

  contentContainer.innerHTML = 'If you tried to select the Movies dropdown, choose either Top Rated or Popular!';
}

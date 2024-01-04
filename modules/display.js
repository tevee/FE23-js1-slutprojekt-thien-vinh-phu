import { createElementsForMovieTitles, createElementsForCelebrities, createElementsForTV, createElementsForTopTenMovies } from "./createElement.js";

const sortContainerDivEl = document.querySelector('.sort-container')

export function displayTopTenMovies(movieArr) {
  const topTenMovies = movieArr.slice(0, 10);
  sortContainerDivEl.style.display = 'flex';

  topTenMovies.forEach((movie) => {
    createElementsForTopTenMovies(movie);
  });
}

export function displaySearchResult(objResultArr, selectedOption) {
  let imgBaseUrl;
  sortContainerDivEl.style.display = 'flex';

  if (selectedOption == "movie") {
    imgBaseUrl = `https://image.tmdb.org/t/p/w500`;

    objResultArr.forEach((movie) => {
      createElementsForMovieTitles(movie, imgBaseUrl);
    });
  }
  else if (selectedOption == "person") {
    imgBaseUrl = `https://image.tmdb.org/t/p/h632`;

    objResultArr.forEach((person) => {
      createElementsForCelebrities(person, imgBaseUrl);
    });
  }
  else if (selectedOption == 'tv') {
    imgBaseUrl = `https://image.tmdb.org/t/p/w500`;
    objResultArr.forEach(tv => {
      createElementsForTV(tv, imgBaseUrl)
    })
  }
}

export function displaySortedList(obj, sortedArr) {
  sortContainerDivEl.style.display = sortContainerDivEl.style.display === 'none' ? 'flex' : 'none';
  if(obj.target === 'top_rated' || obj.target === 'popular') displayTopTenMovies(sortedArr)
  else if(obj.target === 'movie') displaySearchResult(sortedArr, 'movie')
  else if(obj.target === 'person') displaySearchResult(sortedArr, 'person')
  else if(obj.target === 'tv') displaySearchResult(sortedArr, 'tv')
}

export function displaySearchInput(input) {
  const h2El = document.querySelector('main > h2');
  h2El.innerText = `Search: ${input}`
}

export function removePrevSearchResult() {
  sortContainerDivEl.style.display = 'none';
  const contentContainer = document.querySelector("#contentContainer");
  const searchInputEl = document.querySelector('main > h2');

  contentContainer.innerHTML = "";
  contentContainer.classList.remove("error");
  searchInputEl.innerText = '';
}

export function displayError(error, input) {
  console.log(error);
  
  const contentContainer = document.querySelector("#contentContainer");
  contentContainer.classList.remove("contentContainer");
  contentContainer.classList.add("error");
  let message;
  
  if (error === "no result") message = `Nothing was found when searching for ${input}...`;
  else message = "Something went wrong please try again later...";

contentContainer.innerText = message;
}
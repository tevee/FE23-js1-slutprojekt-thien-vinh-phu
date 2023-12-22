import { createElementsForMovieTitles, createElementsForCelebrities, createElementsForTopTenMovies } from "./createElement.js";

export function displayTopTenMovies(movieArr) {
  const topTenPopularMovies = movieArr.slice(0, 10);

  topTenPopularMovies.forEach((movie) => {
    createElementsForTopTenMovies(movie);
  });
}

export function displaySearchResult(objResultArr, selectedOption) {
  let imgBaseUrl;

  if (selectedOption == "movie") {
    imgBaseUrl = `https://image.tmdb.org/t/p/w500`;

    objResultArr.forEach((movie) => {
      createElementsForMovieTitles(movie, imgBaseUrl);
    });
  } else if (selectedOption == "person") {
    imgBaseUrl = `https://image.tmdb.org/t/p/h632`;

    objResultArr.forEach((person) => {
      createElementsForCelebrities(person, imgBaseUrl);
    });
  }
}

export function removePrevSearchResult() {
  const contentContainer = document.querySelector("#contentContainer");
  contentContainer.innerHTML = "";
  contentContainer.classList.remove("error");
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
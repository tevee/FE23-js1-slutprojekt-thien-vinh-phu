import { fetchTopRatedMovies } from "./fetchAPI.js";
import { displayTopRatedMovies, removePrevSearchResult } from "./display.js";

const topRatedMoviesEl = document.querySelector("#topRated");

topRatedMoviesEl.addEventListener("click", (event) => {
  event.preventDefault();
  removePrevSearchResult();

  fetchTopRatedMovies()
    .then(displayTopRatedMovies)
    .catch((error) => console.log(error));
});

export { topRatedMoviesEl };

/**
 * Thien Vinh Phu, 2023
 * (c) CC BY - https://creativecommons.org/licenses/by/4.0/
 *
 * Movie DataBase
 * Uses themoviedb API - https://developer.themoviedb.org/reference/intro/getting-started
 *
 * Summary - ongoing
 */

import {fetchTopTenMoviesBy, fetchMoviesOrCelebs} from "./modules/fetchAPI.js";
import {displayTopTenMovies, displaySearchResult, removePrevSearchResult, displayError} from "./modules/display.js";

const searchFormEl = document.querySelector("#searchForm");
const moviesDropdownEl = document.querySelector("#moviesDropdown");

searchFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  removePrevSearchResult();

  const selectedOption = document.querySelector("#searchForm > select > option:checked").value;
  const inputValue = document.querySelector("#searchForm > input").value;

  let inputEl = document.querySelector("#searchForm > input"); // Need access to element in order to clear search input
  inputEl.value = "";

  fetchMoviesOrCelebs(inputValue, selectedOption)
    .then((result) => displaySearchResult(result, selectedOption))
    .catch((error) => displayError(error, inputValue));
});

moviesDropdownEl.addEventListener("click", (event) => {
  event.preventDefault();
  
  const topRatedBtn = document.querySelector('#topRated')
  const popularBtn = document.querySelector('#popular')
  
  const target = event.target.value;
  
  if(event.target === topRatedBtn || event.target === popularBtn) {
    removePrevSearchResult();

    fetchTopTenMoviesBy(target)
      .then(displayTopTenMovies)
      .catch((error) => displayError(error));
  }
});
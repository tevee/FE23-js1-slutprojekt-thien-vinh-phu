/**
 * Thien Vinh Phu, 2023
 * (c) CC BY - https://creativecommons.org/licenses/by/4.0/
 *
 * Movie DataBase
 * Uses themoviedb API - https://developer.themoviedb.org/reference/intro/getting-started
 *
 * Summary - ongoing
 */

import {fetchMoviesOrCelebsByType} from "./modules/fetchAPI.js";
import {displayTopTenMovies, displaySearchResult, displaySortedList, displaySearchInput, removePrevSearchResult, displayError} from "./modules/display.js";
import { sortByType, toggleSortOrder, resetSortDropdown } from "./modules/sort.js";
import { dotAnimationTimeline } from "./modules/animation.js";

const searchFormEl = document.querySelector("#searchForm");
const moviesDropdownEl = document.querySelector("#moviesDropdown");
const sortDropdownEl = document.querySelector('#sortDropdown');
const toggleSortOrderBtn = document.querySelector('.sort-container > button')

const savedSearchResult = {
  target: '',
  resultsArr: [],
  searchInput: '',
}

anime(dotAnimationTimeline)

searchFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  removePrevSearchResult();
  resetSortDropdown();

  const selectedOption = document.querySelector("#searchForm > select > option:checked").value;
  const releaseDateOptionEl = document.querySelector('#sortDropdown > option[value=release-date]')
  const inputEl = document.querySelector("#searchForm > input"); // Accessing element in order to clear search input
  const inputElValue = inputEl.value;
  inputEl.value = "";

  if(selectedOption === 'person') {
    const isCelebrityOptionElSelected = document.querySelector('#searchForm > select > option[value=person]').selected
    if(isCelebrityOptionElSelected === true) releaseDateOptionEl.disabled = true;
  }
  else releaseDateOptionEl.disabled = false;

  displaySearchInput(inputElValue);
  
  fetchMoviesOrCelebsByType(selectedOption, inputElValue)
  .then((result) => {
    savedSearchResult.target = selectedOption;
    savedSearchResult.resultsArr = result;
    savedSearchResult.searchInput = inputElValue;
    displaySearchResult(result, selectedOption);
  })
  .catch((error) => displayError(error, inputElValue))
});

moviesDropdownEl.addEventListener("click", (event) => {
  event.preventDefault();
  resetSortDropdown();
  
  const topRatedBtn = document.querySelector('#topRated')
  const popularBtn = document.querySelector('#popular')
  const releaseDateOptionEl = document.querySelector('#sortDropdown > option[value=release-date]')
  
  const target = event.target.value;
  
  if(event.target === topRatedBtn || event.target === popularBtn) {
    removePrevSearchResult();
    releaseDateOptionEl.disabled = false;

    fetchMoviesOrCelebsByType(target)
    .then(result => {
      savedSearchResult.target = target;
      savedSearchResult.resultsArr = result;
      displayTopTenMovies(result);
    })
    .catch((error) => displayError(error))
  }
});

sortDropdownEl.addEventListener('change', (event) => {
  event.preventDefault()
  
  const selectedOption = document.querySelector('#sortDropdown > option:checked').value
  const sortedArr = sortByType(savedSearchResult.resultsArr, selectedOption, savedSearchResult.target)
  
  if(selectedOption != ''){
    removePrevSearchResult();
    displaySearchInput(savedSearchResult.searchInput)
    displaySortedList(savedSearchResult, sortedArr)
  }
})

toggleSortOrderBtn.addEventListener('click', (event) => {
  event.preventDefault()

  const selectedOption = document.querySelector('#sortDropdown > option:checked').value
  const sortedArrOrder =  toggleSortOrder(savedSearchResult.resultsArr, selectedOption, savedSearchResult.target);
  
  if(selectedOption != '') {
    removePrevSearchResult();
    displaySearchInput(savedSearchResult.searchInput)
    displaySortedList(savedSearchResult, sortedArrOrder);
  }
})
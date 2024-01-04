/**
 * Thien Vinh Phu, 2023
 * (c) CC BY - https://creativecommons.org/licenses/by/4.0/
 *
 * Movie DataBase
 * Uses themoviedb API - https://developer.themoviedb.org/reference/intro/getting-started
 *
 * Fetches movies, celebrities or tv-series matching a search
 * Fetches top rated and popular movies
 * User can search by movie title, celebrity or tv-serie
 * Top rated and popular movies are displayed in descending order by popularity
 * User search displays at most 20 search result in descending order by closest match
 * User is able to sort and toggle every display result in alphabetic order or release date from newest to oldest
 * User can get recommendation when movies or tv-series are displayed
 * Recommendation display at most 21 of its media type in descending order by most recommended first
 * Recommended media type is also able to sort in alphabetic order and by release date
 * 
 * Info displayed for top rated and popular movies
 * - image
 * - title
 * - release date
 * 
 * Info displayed for movies and tv-series
 * - image
 * - title
 * - release date
 * - overview
 * 
 * Info displayed for celebrities
 * - image
 * - name
 * - department
 * - 3 movie or tv-serie titles they are known for
 * 
 * Displayed recommendation has the same info as movies and tv-series
 */

import {fetchMoviesOrCelebsByType} from "./modules/fetchAPI.js";
import {displayTopTenMovies, displaySearchResult, displaySortedList, displayRecommendationResult, displaySearchInput, removePrevSearchResult, displayError} from "./modules/display.js";
import { sortByType, toggleSortOrder, resetSortDropdown } from "./modules/sort.js";
import { playDotAnimation, gridAnimation } from "./modules/animation.js";

const searchFormEl = document.querySelector("#searchForm");
const moviesDropdownEl = document.querySelector("#moviesDropdown");
const sortDropdownEl = document.querySelector('#sortDropdown');
const toggleSortOrderBtn = document.querySelector('.sort-container > button')
const contentContainerEl = document.querySelector('#contentContainer')

const savedSearchResult = {
  target: '',
  resultsArr: [],
  searchInput: '',
}

playDotAnimation();

searchFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  removePrevSearchResult();
  resetSortDropdown();
  anime(gridAnimation);

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
  const searchResultEl = document.querySelector('main > h2')
  
  const target = event.target.value;
  
  if(event.target === topRatedBtn || event.target === popularBtn) {
    removePrevSearchResult();
    searchResultEl.innerHTML = '';
    releaseDateOptionEl.disabled = false;
    anime(gridAnimation);

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
    displaySortedList(savedSearchResult, sortedArr)
  }
})

toggleSortOrderBtn.addEventListener('click', (event) => {
  event.preventDefault()

  const selectedOption = document.querySelector('#sortDropdown > option:checked').value
  const sortedArrOrder =  toggleSortOrder(savedSearchResult.resultsArr, selectedOption, savedSearchResult.target);
  
  if(selectedOption != '') {
    removePrevSearchResult();
    displaySortedList(savedSearchResult, sortedArrOrder);
  }
})

contentContainerEl.addEventListener('click', event => {
  event.preventDefault()

  if(event.target.value === 'movieId' || event.target.value === 'seriesId') {
    const recommendationBtn = document.getElementById(event.target.id)

    const parentOfContentContainerEl = contentContainerEl.parentElement
    const displayMediaTypeNameEl = parentOfContentContainerEl.querySelector('h2')

    const parentElOfRecommendationBtn = recommendationBtn.parentElement;
    const selectedMediaTypeNameEl = parentElOfRecommendationBtn.querySelector('h3')

    fetchMoviesOrCelebsByType(recommendationBtn.value, '', recommendationBtn.id)
    .then(mediaType => {
      removePrevSearchResult();
      resetSortDropdown();

      savedSearchResult.target = recommendationBtn.value;
      savedSearchResult.resultsArr = mediaType;

      displayMediaTypeNameEl.innerText = `Recommendations for: ${selectedMediaTypeNameEl.innerText}`;
      displayRecommendationResult(mediaType);
    })
    .catch((error) => displayError(error))
  }
})
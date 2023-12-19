import { fetchMoviesOrCelebs } from "./fetchAPI.js"

const searchFormEl = document.querySelector('#searchForm')

searchFormEl.addEventListener('submit', (event) => {
    event.preventDefault()

    const selectedOption = document.querySelector('#searchForm > select > option:checked').value
    const input = document.querySelector('#searchForm > input').value
    console.log(input);
    console.log(selectedOption);

    fetchMoviesOrCelebs(input, selectedOption)

    searchFormEl.reset();
})

export {searchFormEl}
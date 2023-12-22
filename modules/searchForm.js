import { fetchMoviesOrCelebs } from "./fetchAPI.js"
import { displaySearchResult, removePrevSearchResult, displayNoSearchResult, displayError } from "./display.js"

export function searchForm() {

    const searchFormEl = document.querySelector('#searchForm')
    
    searchFormEl.addEventListener('submit', (event) => {
        event.preventDefault();
        removePrevSearchResult();
    
        const selectedOption = document.querySelector('#searchForm > select > option:checked').value
        const input = document.querySelector('#searchForm > input').value

        let inputEl = document.querySelector('#searchForm > input')
        inputEl.value = '';

        console.log(input);
        console.log(selectedOption);

        fetchMoviesOrCelebs(input, selectedOption)
        .then((result) => {
            if(input != '' && result.length > 0) displaySearchResult(result, selectedOption);
            else displayNoSearchResult(input);
        })
        .catch((error) => displayError(error))
        
    })
}
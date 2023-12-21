import { fetchTopTenMoviesBy } from "./fetchAPI.js";
import { displayTopTenMovies, removePrevSearchResult, displayUndefinedResult } from "./display.js";

export function moviesDropDown() {

    const moviesDropdownEl = document.querySelector('#moviesDropdown')
    
    moviesDropdownEl.addEventListener('click', (event) => {
        
        event.preventDefault();
        removePrevSearchResult();
    
        const target = event.target.value;
        
        if(target !== undefined) {
            fetchTopTenMoviesBy(target)
            .then(displayTopTenMovies)
            .catch((error) => console.log(error))
        }
        else {
            displayUndefinedResult()
        }
    
    })
}

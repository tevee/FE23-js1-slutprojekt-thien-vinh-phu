let isDescending = true;

export function sortByType(resultsArr, sortType, target) {

    if(sortType === 'alphabetical' && target === 'person') resultsArr.sort((a, b) => a.name.localeCompare(b.name))
    else if(target === 'top_rated' || target === 'popular') {
        const topTenSortedMovies = resultsArr.slice(0, 10);

        if(sortType === 'release-date') return topTenSortedMovies.sort((a, b) => a.release_date > b.release_date ? -1 : 1)
        else return topTenSortedMovies.sort((a, b) => a.title.localeCompare(b.title));
    }
    else if(sortType === 'release-date') resultsArr.sort((a, b) => a.release_date > b.release_date ? -1 : 1)
    else resultsArr.sort((a, b) => a.title.localeCompare(b.title))

    return resultsArr;

}

export function toggleSortOrder(resultsArr, sortType, target) {
    isDescending = !isDescending;

    if(sortType === 'alphabetical' && target === 'person') {
        resultsArr.sort((a, b) => isDescending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
    }
    else if(target === 'top_rated' || target === 'popular') {
        const topTenSortedMovies = resultsArr.slice(0, 10);

        if(sortType === 'release-date') return topTenSortedMovies.sort((a, b) => {
            return isDescending ? new Date(b.release_date) - new Date(a.release_date) : new Date(a.release_date) - new Date(b.release_date)
        })
        else return topTenSortedMovies.sort((a, b) => isDescending ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title));
    }
    else if(sortType === 'release-date') resultsArr.sort((a, b) => {
        return isDescending ? new Date(b.release_date) - new Date(a.release_date) : new Date(a.release_date) - new Date(b.release_date)
    })
    else resultsArr.sort((a, b) => isDescending ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title))

    return resultsArr;
}

export function resetSortDropdown() {
    const sortDropdownEl = document.querySelector('#sortDropdown');
    sortDropdownEl.selectedIndex = 0;
}
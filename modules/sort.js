let isDescending = true;

export function sortByType(resultsArr, sortType, target) {
    if(sortType === 'alphabetical' && target === 'person' || sortType === 'alphabetical' && target === 'tv') resultsArr.sort((a, b) => a.name.localeCompare(b.name))
    else if(target === 'top_rated' || target === 'popular') {
        const topTenSortedMovies = resultsArr.slice(0, 10);

        if(sortType === 'release-date') return topTenSortedMovies.sort((a, b) => a.release_date > b.release_date ? -1 : 1)
        else return topTenSortedMovies.sort((a, b) => a.title.localeCompare(b.title));
    }
    else if(target === 'tv' && sortType === 'release-date') resultsArr.sort((a, b) => a.first_air_date > b.first_air_date ? -1 : 1)
    else if(target === 'seriesId' && sortType === 'release-date') resultsArr.sort((a, b) => a.first_air_date > b.first_air_date ? -1 : 1)
    else if(target === 'seriesId') resultsArr.sort((a, b) => a.name.localeCompare(b.name))
    else if(sortType === 'release-date') resultsArr.sort((a, b) => a.release_date > b.release_date ? -1 : 1)
    else resultsArr.sort((a, b) => a.title.localeCompare(b.title))

    return resultsArr;

}

export function toggleSortOrder(resultsArr, sortType, target) {
    isDescending = !isDescending;

    if(sortType === 'alphabetical' && target === 'person' || sortType === 'alphabetical' && target === 'tv') {
        resultsArr.sort((a, b) => isDescending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
    }
    else if(target === 'top_rated' || target === 'popular') {
        const topTenSortedMovies = resultsArr.slice(0, 10);

        if(sortType === 'release-date') return topTenSortedMovies.sort((a, b) => {
            return isDescending ? new Date(b.release_date) - new Date(a.release_date) : new Date(a.release_date) - new Date(b.release_date)
        })
        else return topTenSortedMovies.sort((a, b) => isDescending ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title));
    }
    else if(target === 'tv' && sortType === 'release-date') {
        return resultsArr.sort((a, b) =>  isDescending ? new Date(b.first_air_date) - new Date(a.first_air_date) : new Date(a.first_air_date) - new Date(b.first_air_date))
    }
    else if(target === 'seriesId' && sortType === 'release-date') {
        return resultsArr.sort((a, b) =>  isDescending ? new Date(b.first_air_date) - new Date(a.first_air_date) : new Date(a.first_air_date) - new Date(b.first_air_date))
    }
    else if(target === 'seriesId') resultsArr.sort((a, b) => isDescending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
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
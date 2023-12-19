function createAndAppendElement(type, content, container) {
  const el = document.createElement(type);
  container.append(el);

  if (type === "img") el.src = content;
  else el.innerText = content;

  return el;
}

export function displayTopRatedMovies(moviesObj) {

    const contentContainer = document.querySelector("#contentContainer");
    const imgBaseUrl = `https://image.tmdb.org/t/p/w300`;


  moviesObj.results.forEach((movie) => {
    const movieCardEl = document.createElement("div");
    movieCardEl.classList.add('content-card')
    contentContainer.append(movieCardEl);

    console.log(movie);
    createAndAppendElement("img", imgBaseUrl + movie.poster_path, movieCardEl);
    createAndAppendElement('h3', movie.title, movieCardEl)
    createAndAppendElement('p', movie.release_date, movieCardEl)
  });
}

export function removePrevSearchResult() {
    
    const contentContainer = document.querySelector("#contentContainer");
    contentContainer.innerHTML = '';

}
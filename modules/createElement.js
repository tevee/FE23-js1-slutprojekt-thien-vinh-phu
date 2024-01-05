function createAndAppendElement(type, content, container) {
  const el = document.createElement(type);
  container.append(el);

  if (type === "img") el.src = content;
  else el.innerText = content;

  return el;
}

function getAndCreateContentCardEl() {
  const contentContainerEl = document.querySelector("#contentContainer");
  contentContainerEl.classList.add("contentContainer");

  const contentCardEl = document.createElement("div");
  contentCardEl.classList.add("content-card");
  contentContainerEl.append(contentCardEl);

  return contentCardEl;
}

function getAndCreateRecommendationBtn(appendTo) {
  const recommendationBtn = createAndAppendElement("button", 'Recommendation', appendTo);
  recommendationBtn.classList.add('button-recommendation');

  return recommendationBtn;
}

export function createElementsForTopTenMovies(movie) {
  const contentCardEl = getAndCreateContentCardEl();
  const imgBaseUrl = `https://image.tmdb.org/t/p/w300`;

  createAndAppendElement("img", imgBaseUrl + movie.poster_path, contentCardEl);

  const recommendationBtn = getAndCreateRecommendationBtn(contentCardEl);
  recommendationBtn.id = movie.id;
  recommendationBtn.value = 'movieId';

  createAndAppendElement("h3", movie.title, contentCardEl);
  createAndAppendElement("p", movie.release_date, contentCardEl);
}

export function createElementsForMovieTitles(movie, imgBaseUrl) {
  const contentCardEl = getAndCreateContentCardEl();

  if (movie.poster_path !== null) createAndAppendElement("img", imgBaseUrl + movie.poster_path, contentCardEl);
  else createAndAppendElement("img", "./images/404-image.svg", contentCardEl);
  
  const recommendationBtn = getAndCreateRecommendationBtn(contentCardEl);
  recommendationBtn.id = movie.id;
  recommendationBtn.value = 'movieId';

  createAndAppendElement("h3", movie.title, contentCardEl);
  createAndAppendElement("p", movie.release_date, contentCardEl);
  createAndAppendElement("p", movie.overview, contentCardEl);
}

export function createElementsForCelebrities(person, imgBaseUrl) {
  const contentCardEl = getAndCreateContentCardEl();

  if (person.profile_path !== null) createAndAppendElement("img", imgBaseUrl + person.profile_path, contentCardEl);
  else createAndAppendElement("img", "./images/404-image.svg", contentCardEl);

  createAndAppendElement("h3", person.name, contentCardEl);
  createAndAppendElement("p", `Department: ${person.known_for_department}`, contentCardEl);

  const ulEl = createAndAppendElement("ul", "", contentCardEl);

  person.known_for.forEach((obj) => {
    if (obj.media_type == "movie") {
      const movieString = obj.media_type.charAt(0).toUpperCase() + obj.media_type.slice(1);
      createAndAppendElement("li", `${movieString}: ${obj.title}`, ulEl);
    }
    else if (obj.media_type == "tv") {
      const tvString = obj.media_type.toUpperCase();
      createAndAppendElement("li", `${tvString}: ${obj.name}`, ulEl);
    }
  });
}

export function createElementsForTV(tv, imgBaseUrl) {
  const contentCardEl = getAndCreateContentCardEl();

  if (tv.profile_path !== null) createAndAppendElement("img", imgBaseUrl + tv.poster_path, contentCardEl);
  else createAndAppendElement("img", "./images/404-image.svg", contentCardEl);

  const recommendationBtn = getAndCreateRecommendationBtn(contentCardEl);
  recommendationBtn.id = tv.id;
  recommendationBtn.value = 'seriesId';

  createAndAppendElement("h3", tv.name, contentCardEl);
  createAndAppendElement("p", tv.first_air_date, contentCardEl);
  createAndAppendElement("p", tv.overview, contentCardEl);
}

export function createElementsForRecommendation(mediaType) {
  const contentCardEl = getAndCreateContentCardEl();
  let imgBaseUrl = `https://image.tmdb.org/t/p/w500`;

  if (mediaType.poster_path !== null) createAndAppendElement("img", imgBaseUrl + mediaType.poster_path, contentCardEl);
  else createAndAppendElement("img", "./images/404-image.svg", contentCardEl);

  if(mediaType.media_type === 'movie') {
    const recommendationBtn = getAndCreateRecommendationBtn(contentCardEl);
    recommendationBtn.id = mediaType.id;
    recommendationBtn.value = 'movieId';
    createAndAppendElement("h3", mediaType.title, contentCardEl);
    createAndAppendElement("p", mediaType.release_date, contentCardEl);
    createAndAppendElement("p", mediaType.overview, contentCardEl);
  }
  else if(mediaType.media_type === 'tv') {
    const recommendationBtn = getAndCreateRecommendationBtn(contentCardEl);
    recommendationBtn.id = mediaType.id;
    recommendationBtn.value = 'seriesId';
    createAndAppendElement("h3", mediaType.name, contentCardEl);
    createAndAppendElement("p", mediaType.first_air_date, contentCardEl);
    createAndAppendElement("p", mediaType.overview, contentCardEl);
  }
}
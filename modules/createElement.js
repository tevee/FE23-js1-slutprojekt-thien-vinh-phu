function createAndAppendElement(type, content, container) {
  const el = document.createElement(type);
  container.append(el);

  if (type === "img") el.src = content;
  else el.innerText = content;

  return el;
}

function createContentCard() {
    const movieCardEl = document.createElement("div");
    movieCardEl.classList.add("content-card");
    contentContainer.append(movieCardEl);

    return movieCardEl
}

export function createElementForTopTenMovies(movie, imgBaseUrl) {
    const a = createContentCard()

    createAndAppendElement("img", imgBaseUrl + movie.poster_path, a);
    createAndAppendElement("h3", movie.title, a);
    createAndAppendElement("p", movie.release_date, a);
}

export function createElementForMovieTitles(movie, imgBaseUrl) {
  const contentCardEl = document.createElement("div");
  contentCardEl.classList.add("content-card");
  contentContainer.append(contentCardEl);

  createAndAppendElement("img", imgBaseUrl + movie.poster_path, contentCardEl);
  createAndAppendElement("h3", movie.title, contentCardEl);
  createAndAppendElement("p" ,movie.release_date, contentCardEl);
  createAndAppendElement("p", movie.overview, contentCardEl);
}

export function createElementForCelebrities(person, imgBaseUrl) {
  const contentCardEl = document.createElement("div");
  contentCardEl.classList.add("content-card");
  contentContainer.append(contentCardEl);

  createAndAppendElement("img", imgBaseUrl + person.profile_path, contentCardEl);
  createAndAppendElement("h3", person.name, contentCardEl);
  createAndAppendElement("p", `Known for: ${person.known_for_department}`, contentCardEl);

  const ulEl = createAndAppendElement("ul", "", contentCardEl);

  person.known_for.forEach((obj) => {
    if (obj.media_type == "movie") {
      createAndAppendElement("li", `${obj.media_type}: ${obj.title}`, ulEl);
    } else if (obj.media_type == "tv") {
      createAndAppendElement("li", `${obj.media_type}: ${obj.name}`, ulEl);
    }
  });
}

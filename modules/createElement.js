function createAndAppendElement(type, content, container) {
  const el = document.createElement(type);
  container.append(el);

  if (type === "img") el.src = content;
  else el.innerText = content;

  return el;
}

function getContentContainerAndCreateContentCard() {
    const contentContainerEl = document.querySelector("#contentContainer");
    contentContainerEl.classList.add("contentContainer");

    const contentCardEl = document.createElement("div");
    contentCardEl.classList.add("content-card");
    contentContainerEl.append(contentCardEl);

    return contentCardEl;
}

export function createElementForTopTenMovies(movie) {
    const contentCardEl = getContentContainerAndCreateContentCard();
    const imgBaseUrl = `https://image.tmdb.org/t/p/w300`;

    createAndAppendElement("img", imgBaseUrl + movie.poster_path, contentCardEl);
    createAndAppendElement("h3", movie.title, contentCardEl);
    createAndAppendElement("p", movie.release_date, contentCardEl);
}

export function createElementForMovieTitles(movie, imgBaseUrl) {
    const contentCardEl = getContentContainerAndCreateContentCard();

  createAndAppendElement("img", imgBaseUrl + movie.poster_path, contentCardEl);
  createAndAppendElement("h3", movie.title, contentCardEl);
  createAndAppendElement("p" ,movie.release_date, contentCardEl);
  createAndAppendElement("p", movie.overview, contentCardEl);
}

export function createElementForCelebrities(person, imgBaseUrl) {
    const contentCardEl = getContentContainerAndCreateContentCard();

  createAndAppendElement("img", imgBaseUrl + person.profile_path, contentCardEl);
  createAndAppendElement("h3", person.name, contentCardEl);
  createAndAppendElement("p", `Department: ${person.known_for_department}`, contentCardEl);

  const ulEl = createAndAppendElement("ul", "", contentCardEl);

  person.known_for.forEach((obj) => {
    if (obj.media_type == "movie") {
      createAndAppendElement("li", `${obj.media_type}: ${obj.title}`, ulEl);
    } else if (obj.media_type == "tv") {
      createAndAppendElement("li", `${obj.media_type}: ${obj.name}`, ulEl);
    }
  });
}

const BEARER_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDFkM2I0ZWZjMTc3Zjg5YzkwNjZlMTk5ZGI5ZmRjNSIsInN1YiI6IjY1ODA5MDY1ODc1ZDFhMDdiYmFlYTk5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GVrIp6HOM5Bj5B_rfph3oD0XBy4X11p3Top9_zZHihQ";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${BEARER_KEY}`,
  },
};

export async function fetchTopTenMoviesBy(target) {
  const url = `https://api.themoviedb.org/3/movie/${target}`;

  const response = await fetch(url, options);
  
  const movies = await response.json();

  if (response.ok && movies.results.length > 0) return movies.results;
  else throw "error";
}

export async function fetchMoviesOrCelebs(input, selectedOption) {
  const url = `https://api.themoviedb.org/3/search/${selectedOption}`;
  const queries = `?query=${input}&include_adult=false&language=en-US&page=1`;
  const finalUrl = url + queries;

  const response = await fetch(finalUrl, options);

  const dataObj = await response.json();

  if (response.ok && dataObj.results.length > 0) return dataObj.results;
  else if (dataObj.results.length === 0) throw "no result";
  else throw "error";
}
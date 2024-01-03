const BEARER_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDFkM2I0ZWZjMTc3Zjg5YzkwNjZlMTk5ZGI5ZmRjNSIsInN1YiI6IjY1ODA5MDY1ODc1ZDFhMDdiYmFlYTk5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GVrIp6HOM5Bj5B_rfph3oD0XBy4X11p3Top9_zZHihQ";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${BEARER_KEY}`,
  },
};

export async function fetchMoviesOrCelebsByType(type, input='') {
  let url;

  if(type === 'movie') url = `https://api.themoviedb.org/3/search/${type}?query=${input}&include_adult=false&language=en-US&page=1`;
  else if(type === 'person') url = `https://api.themoviedb.org/3/search/${type}?query=${input}&include_adult=false&language=en-US&page=1`;
  else if(type === 'top_rated') url = `https://api.themoviedb.org/3/movie/${type}`;
  else if(type === 'popular') url = `https://api.themoviedb.org/3/movie/${type}`;

  const response = await fetch(url, options);

  const dataObj = await response.json();

  if (response.ok && dataObj.results.length > 0) return dataObj.results;
  else if (dataObj.results.length === 0) throw "no result";
  else throw "error";
}
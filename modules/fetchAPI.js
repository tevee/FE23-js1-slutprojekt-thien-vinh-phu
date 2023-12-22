const BEARER_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDFkM2I0ZWZjMTc3Zjg5YzkwNjZlMTk5ZGI5ZmRjNSIsInN1YiI6IjY1ODA5MDY1ODc1ZDFhMDdiYmFlYTk5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GVrIp6HOM5Bj5B_rfph3oD0XBy4X11p3Top9_zZHihQ';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${BEARER_KEY}`
  }
};

export async function fetchTopTenMoviesBy(target) {

  const url = `https://api.themoviedb.org/3/movie/${target}`;

  const response = await fetch(url, options);

  if(response.ok) {
    const movies = await response.json();
    return movies.results;
  }
  else if(response.status === 404) {
    if(target === 'top_rated') throw '404 top rated';
    else if(target === 'popular') throw '404 popular';
  }
  else throw 'error';

}

export async function fetchMoviesOrCelebs(input, selectedOption) {

  const url = `https://api.themoviedb.org/3/search/${selectedOption}`;
  const queries = `?query=${input}&include_adult=false&language=en-US&page=1`;
  const finalUrl = url+queries;

  const response = await fetch(finalUrl, options);
  
  if(response.ok) {
    const dataObj = await response.json();
    return dataObj.results;
  }
  else if(response.status === 404) {
    if(selectedOption === 'movie') throw '404 movie';
    else if(selectedOption === 'person') throw '404 person';
  }
  else throw 'error';

}
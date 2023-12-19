// export function test() {

// const BEARER_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDFkM2I0ZWZjMTc3Zjg5YzkwNjZlMTk5ZGI5ZmRjNSIsInN1YiI6IjY1ODA5MDY1ODc1ZDFhMDdiYmFlYTk5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GVrIp6HOM5Bj5B_rfph3oD0XBy4X11p3Top9_zZHihQ';

// const url1 = 'https://api.themoviedb.org/3/configuration';

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: `Bearer ${BEARER_KEY}`
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));

// }

const BEARER_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDFkM2I0ZWZjMTc3Zjg5YzkwNjZlMTk5ZGI5ZmRjNSIsInN1YiI6IjY1ODA5MDY1ODc1ZDFhMDdiYmFlYTk5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GVrIp6HOM5Bj5B_rfph3oD0XBy4X11p3Top9_zZHihQ';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${BEARER_KEY}`
  }
};

export async function fetchTopRatedMovies() {
  
  const url = 'https://api.themoviedb.org/3/movie/top_rated'

  const response = await fetch(url, options);
  
  const moviesObj = await response.json();
  
  return moviesObj;

}

export function fetchMoviesOrCelebs(input, selectedOption) {

  const url = `https://api.themoviedb.org/3/search/${selectedOption}?query=${input}&include_adult=false&language=en-US&page=1`

  fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(error => console.error('error:' + error));

}
const API_KEY=process.env.REACT_APP_API_KEY

export const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';

const requests = {
  Trending: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  NetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  TopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  ActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  RomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  ComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  HorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  Drama: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  Upcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  TVShows: `/tv/popular?api_key=${API_KEY}&language=en-US&page=${3}`,
};

export default requests;
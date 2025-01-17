import { FETCH_OPTIONS, TMDB_MOVIE_LISTS } from "./Constant";

export const fetchPopularMovies = async () => {
  const response = await fetch(TMDB_MOVIE_LISTS.popular, FETCH_OPTIONS);
  const data = await response.json();

  return data;
};

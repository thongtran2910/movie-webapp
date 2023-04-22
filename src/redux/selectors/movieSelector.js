import { createSelector } from "reselect";

const selectMovieReducer = (state) => state.movie;

export const selectMovieTrending = createSelector(
  [selectMovieReducer],
  (movie) => movie.movieTrendingList
);
export const selectMoviePopular = createSelector(
  [selectMovieReducer],
  (movie) => movie.moviePopularList
);
export const selectMovieTopRated = createSelector(
  [selectMovieReducer],
  (movie) => movie.movieTopRatedList
);
export const selectMovieUpcoming = createSelector(
  [selectMovieReducer],
  (movie) => movie.movieUpcomingList
);
export const selectMovieAiring = createSelector(
  [selectMovieReducer],
  (movie) => movie.movieAiringList
);
export const selectMovieSimilar = createSelector(
  [selectMovieReducer],
  (movie) => movie.movieSimilarList
);
export const selectMovieDetail = createSelector(
  [selectMovieReducer],
  (movie) => movie.movieDetail
);

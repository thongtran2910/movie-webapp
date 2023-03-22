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
// export const selectMovieExplore = createSelector(
//   [selectMovieReducer],
//   (movie) => movie.movieExploreList
// );

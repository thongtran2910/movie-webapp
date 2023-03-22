import { createSelector } from "reselect";

const selectTvShowReducer = (state) => state.tvShow;

export const selectTvShowTrending = createSelector(
  [selectTvShowReducer],
  (tvShow) => tvShow.tvShowTrendingList
);
export const selectTvShowPopular = createSelector(
  [selectTvShowReducer],
  (tvShow) => tvShow.tvShowPopularList
);
export const selectTvShowTopRated = createSelector(
  [selectTvShowReducer],
  (tvShow) => tvShow.tvShowTopRatedList
);
export const selectTvShowAiring = createSelector(
  [selectTvShowReducer],
  (tvShow) => tvShow.tvShowAiringList
);
export const selectTvShowExplore = createSelector(
  [selectTvShowReducer],
  (tvShow) => tvShow.tvShowExploreList
);

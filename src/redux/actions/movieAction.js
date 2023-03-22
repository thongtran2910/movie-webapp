import {
  SET_MOVIE_POPULAR,
  SET_MOVIE_TOPRATED,
  SET_MOVIE_TRENDING,
  SET_MOVIE_UPCOMING,
} from "../constants/movieConstant";

export const setMovieTrendingAction = (trendingMovie) => {
  return {
    type: SET_MOVIE_TRENDING,
    payload: trendingMovie,
  };
};

export const setMoviePopularAction = (popularMovie) => {
  return {
    type: SET_MOVIE_POPULAR,
    payload: popularMovie,
  };
};

export const setMovieTopRatedAction = (topRatedMovie) => {
  return {
    type: SET_MOVIE_TOPRATED,
    payload: topRatedMovie,
  };
};

export const setMovieUpcomingAction = (upcomingMovie) => {
  return {
    type: SET_MOVIE_UPCOMING,
    payload: upcomingMovie,
  };
};

// export const setMovieExploreAction = (movies) => {
//   return {
//     type: SET_MOVIE_EXPLORE,
//     payload: movies,
//   };
// };

import {
  SET_MOVIE_POPULAR,
  SET_MOVIE_TOPRATED,
  SET_MOVIE_TRENDING,
  SET_MOVIE_UPCOMING,
} from "../constants/movieConstant";

let initialState = {
  movieTrendingList: [],
  moviePopularList: [],
  movieTopRatedList: [],
  movieUpcomingList: [],
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIE_TRENDING: {
      state.movieTrendingList = action.payload;
      return { ...state };
    }
    case SET_MOVIE_POPULAR: {
      state.moviePopularList = action.payload;
      return { ...state };
    }
    case SET_MOVIE_TOPRATED: {
      state.movieTopRatedList = action.payload;
      return { ...state };
    }
    case SET_MOVIE_UPCOMING: {
      state.movieUpcomingList = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};

import { movieService } from "../../services/movieService";
import {
  SET_MOVIE_POPULAR,
  SET_MOVIE_TOPRATED,
  SET_MOVIE_TRENDING,
  SET_MOVIE_UPCOMING,
} from "../constants/movieConstant";

export const setMovieTrendingActionService = () => {
  return (dispatch) => {
    movieService
      .getTrendingMovie()
      .then((res) => {
        dispatch({
          type: SET_MOVIE_TRENDING,
          payload: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const setMoviePopularActionService = () => {
  return (dispatch) => {
    movieService
      .getPopularMovie()
      .then((res) => {
        dispatch({
          type: SET_MOVIE_POPULAR,
          payload: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const setMovieTopRatedActionService = () => {
  return (dispatch) => {
    movieService
      .getTopRatedMovie()
      .then((res) => {
        dispatch({
          type: SET_MOVIE_TOPRATED,
          payload: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const setMovieUpcomingActionService = () => {
  return (dispatch) => {
    movieService
      .getUpcomingMovie()
      .then((res) => {
        dispatch({
          type: SET_MOVIE_UPCOMING,
          payload: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  };
};

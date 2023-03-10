import { tvShowService } from "../../services/tvShowService";
import {
  SET_TVSHOW_AIRING,
  SET_TVSHOW_POPULAR,
  SET_TVSHOW_TOPRATED,
  SET_TVSHOW_TRENDING,
} from "../constants/tvShowConstant";

export const setTvShowTrendingActionService = () => {
  return (dispatch) => {
    tvShowService
      .getTrendingTvShow()
      .then((res) => {
        dispatch({
          type: SET_TVSHOW_TRENDING,
          payload: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const setTvShowPopularActionService = () => {
  return (dispatch) => {
    tvShowService
      .getPopularTvShow()
      .then((res) => {
        dispatch({
          type: SET_TVSHOW_POPULAR,
          payload: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const setTvShowTopRatedActionService = () => {
  return (dispatch) => {
    tvShowService
      .getTopRatedTvShow()
      .then((res) => {
        dispatch({
          type: SET_TVSHOW_TOPRATED,
          payload: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const setTvShowAiringActionService = () => {
  return (dispatch) => {
    tvShowService
      .getAiringTvShow()
      .then((res) => {
        dispatch({
          type: SET_TVSHOW_AIRING,
          payload: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  };
};

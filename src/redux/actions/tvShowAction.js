import {
  SET_TVSHOW_AIRING,
  SET_TVSHOW_EXPLORE,
  SET_TVSHOW_POPULAR,
  SET_TVSHOW_TOPRATED,
  SET_TVSHOW_TRENDING,
} from "../constants/tvShowConstant";

export const setTvShowTrendingAction = (trendingTv) => {
  return {
    type: SET_TVSHOW_TRENDING,
    payload: trendingTv,
  };
};

export const setTvShowPopularAction = (popularTv) => {
  return {
    type: SET_TVSHOW_POPULAR,
    payload: popularTv,
  };
};

export const setTvShowTopRatedAction = (topRatedTv) => {
  return {
    type: SET_TVSHOW_TOPRATED,
    payload: topRatedTv,
  };
};

export const setTvShowAiringAction = (airingTv) => {
  return {
    type: SET_TVSHOW_AIRING,
    payload: airingTv,
  };
};

export const setTvShowExploreAction = (tvShow) => {
  return {
    type: SET_TVSHOW_EXPLORE,
    payload: tvShow,
  };
};

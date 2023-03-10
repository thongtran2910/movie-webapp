import {
  SET_TVSHOW_AIRING,
  SET_TVSHOW_POPULAR,
  SET_TVSHOW_TOPRATED,
  SET_TVSHOW_TRENDING,
} from "../constants/tvShowConstant";

let initialState = {
  tvShowTrendingList: [],
  tvShowPopularList: [],
  tvShowTopRatedList: [],
  tvShowAiringList: [],
};

export const tvShowReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TVSHOW_TRENDING: {
      state.tvShowTrendingList = action.payload;
      return { ...state };
    }
    case SET_TVSHOW_POPULAR: {
      state.tvShowPopularList = action.payload;
      return { ...state };
    }
    case SET_TVSHOW_TOPRATED: {
      state.tvShowTopRatedList = action.payload;
      return { ...state };
    }
    case SET_TVSHOW_AIRING: {
      state.tvShowAiringList = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};

import axiosClient from "./axiosClient";

export const category = {
  movie: "movie",
  tv: "tv",
};

export const movieType = {
  popular: "popular",
  top_rated: "top_rated",
  upcoming: "upcoming",
};

export const tvType = {
  airing_today: "airing_today",
  popular: "popular",
  top_rated: "top_rated",
};

const tmdbApi = {
  getTrendingList: (cate, params) => {
    const url = "trending/" + category[cate] + "/week";
    return axiosClient.get(url, params);
  },
  getMoviesList: (type, params) => {
    const url = "movie/" + movieType[type];
    return axiosClient.get(url, params);
  },
  getTvList: (type, params) => {
    const url = "tv/" + tvType[type];
    return axiosClient.get(url, params);
  },
  getDiscoverList: (cate, params) => {
    const url = "discover/" + category[cate];
    return axiosClient.get(url, params);
  },
};

export default tmdbApi;

import axiosClient from "./axiosClient";

export const category = {
  movie: "movie",
  tv: "tv",
};

export const type = {
  popular: "popular",
  top_rated: "top_rated",
  upcoming: "upcoming",
  airing_today: "airing_today",
};

const tmdbApi = {
  getTrendingList: (cate, params) => {
    const url = "trending/" + category[cate] + "/week";
    return axiosClient.get(url, params);
  },
  getMoviesList: (cate, movieType, params) => {
    const url = category[cate] + "/" + type[movieType];
    return axiosClient.get(url, params);
  },
  getDiscoverList: (cate, params) => {
    const url = "discover/" + category[cate];
    return axiosClient.get(url, params);
  },
  getMultiSearch: (params) => {
    const url = "search/multi";
    return axiosClient.get(url, params);
  },
  getMovieSearch: (params) => {
    const url = "search/movie";
    return axiosClient.get(url, params);
  },
  getTvSearch: (params) => {
    const url = "search/tv";
    return axiosClient.get(url, params);
  },
  getDetails: (cate, id, params) => {
    const url = category[cate] + "/" + id;
    return axiosClient.get(url, params);
  },
  getCredits: (cate, id) => {
    const url = category[cate] + "/" + id + "/credits";
    return axiosClient.get(url, { params: {} });
  },
  getSimilar: (cate, id) => {
    const url = category[cate] + "/" + id + "/similar";
    return axiosClient.get(url, { params: {} });
  },
  getRecommendations: (cate, id) => {
    const url = category[cate] + "/" + id + "/recommendations";
    return axiosClient.get(url, { params: {} });
  },
  getVideos: (cate, id) => {
    const url = category[cate] + "/" + id + "/videos";
    return axiosClient.get(url, { params: {} });
  },
  getSeasons: (id, number) => {
    const url = "tv/" + id + "/season/" + number;
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdbApi;

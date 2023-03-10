import axios from "axios";
import { API_KEY, BASE_URL } from "./configURL";

export const tvShowService = {
  getTrendingTvShow: () => {
    return axios.get(`${BASE_URL}/trending/tv/day?api_key=${API_KEY}`);
  },
  getAiringTvShow: () => {
    return axios.get(
      `${BASE_URL}/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`
    );
  },
  getPopularTvShow: () => {
    return axios.get(
      `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
  },
  getTopRatedTvShow: () => {
    return axios.get(
      `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );
  },
};

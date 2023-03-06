import axios from "axios";
import { API_KEY, BASE_URL } from "./configURL";

export const movieService = {
  getTrendingMovie: () => {
    return axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  },
  getPopularMovie: () => {
    return axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
  },
  getTopRatedMovie: () => {
    return axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );
  },
  getUpcomingMovie: () => {
    return axios.get(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    );
  },
};

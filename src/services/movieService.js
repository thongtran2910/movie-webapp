import axios from "axios";
import { API_KEY, BASE_URL } from "./configURL";

export const movieService = {
  getTrendingMovie: () => {
    return axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  },
};

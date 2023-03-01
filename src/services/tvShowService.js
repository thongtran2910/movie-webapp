import axios from "axios";
import { API_KEY, BASE_URL } from "./configURL";

export const movieService = {
  getTrendingTvShow: () => {
    return axios.get(`${BASE_URL}/trending/tv/day?api_key=${API_KEY}`);
  },
};

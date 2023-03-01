import axios from "axios";

export const BASE_URL = "https://api.themoviedb.org/3";
export const API_KEY = "1b43222817e29bc02221b6d65c638ce8";

export const httpService = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

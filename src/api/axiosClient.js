import axios from "axios";
import apiConfig from "./apiConfig";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: {
    serialize: (params) =>
      queryString.stringify({ ...params, api_key: apiConfig.apiKey }),
  },
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use(
  (res) => {
    if (res && res.data) {
      return res.data;
    }
    return res;
  },
  (err) => {
    throw err;
  }
);

export default axiosClient;

const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "1b43222817e29bc02221b6d65c638ce8",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;

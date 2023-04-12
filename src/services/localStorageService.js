const MOVIE = "movie";

export const localStorageService = {
  setMovie: (movie) => {
    const dataJson = JSON.stringify(movie);
    localStorage.setItem(MOVIE, dataJson);
  },
  getMovie: () => {
    const dataJson = localStorage.getItem(MOVIE);
    if (dataJson) {
      return JSON.parse(dataJson);
    } else {
      return null;
    }
  },
};

import { useEffect, useState } from "react";
import { movieService } from "../../services/movieService";
import Carousel from "../carousel/CarouselComponent";
import MoviePopular from "../movie-slider/MoviePopularComponent";
import MovieTopRated from "../movie-slider/MovieTopRatedComponent";
import "./movie.scss";

const Movie = () => {
  const [movieBanner, setMovieBanner] = useState([]);
  const [popularMovie, setPopularMovie] = useState([]);
  const [topRatedMovie, setTopRatedMovie] = useState([]);

  useEffect(() => {
    let fetchTrendingMovie = async () => {
      let res = await movieService.getTrendingMovie();
      setMovieBanner(res.data.results);
    };
    fetchTrendingMovie();
  }, []);

  useEffect(() => {
    let fetchPopularMovie = async () => {
      let res = await movieService.getPopularMovie();
      setPopularMovie(res.data.results);
    };
    fetchPopularMovie();
  }, []);

  useEffect(() => {
    let fetchTopRatedMovie = async () => {
      let res = await movieService.getTopRatedMovie();
      setTopRatedMovie(res.data.results);
    };
    fetchTopRatedMovie();
  }, []);

  return (
    <>
      <div className="movie__carousel">
        <Carousel bannerList={movieBanner} />
      </div>
      <div className="movie__container">
        <div className="movie__popular">
          <h2>Popular</h2>
          <MoviePopular popularList={popularMovie} />
        </div>
        <div className="movie__toprated">
          <h2>Top rated</h2>
          <MovieTopRated topRatedList={topRatedMovie} />
        </div>
        <div className="movie__upcoming"></div>
      </div>
    </>
  );
};

export default Movie;

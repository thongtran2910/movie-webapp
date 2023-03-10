import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setMovieTrendingActionService } from "../../redux/actions/movieAction";
import { movieService } from "../../services/movieService";
import MovieCarousel from "../carousel/MovieCarouselComponent";
import MoviePopular from "../movie-slider/MoviePopularComponent";
import MovieTopRated from "../movie-slider/MovieTopRatedComponent";
import MovieUpcoming from "../movie-slider/MovieUpcomingComponent";
import "./movie.scss";

const Movie = () => {
  return (
    <>
      <div className="movie__carousel">
        <MovieCarousel />
      </div>
      <div className="movie__container">
        <div className="movie__popular">
          <h2>Popular</h2>
          <MoviePopular />
        </div>
        <div className="movie__toprated">
          <h2>Top rated</h2>
          <MovieTopRated />
        </div>
        <div className="movie__upcoming">
          <h2>Upcoming</h2>
          <MovieUpcoming />
        </div>
      </div>
    </>
  );
};

export default Movie;

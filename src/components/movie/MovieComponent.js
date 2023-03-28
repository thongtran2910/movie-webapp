import { type } from "../../api/tmdbApi";
import Carousel from "../carousel/CarouselComponent";
import MoviePopular from "../movie-list/PopularMovieComponent";
import TopRatedMovie from "../movie-list/TopRatedMovieComponent";
import UpcomingMovie from "../movie-list/UpcomingMovieComponent";
import "./movie.scss";

const Movie = ({ category }) => {
  return (
    <>
      <div className="movie__carousel">
        <Carousel category={category} />
      </div>
      <div className="movie__container">
        <div className="movie__popular">
          <h2>Popular</h2>
          <MoviePopular category={category} type={type.popular} />
        </div>
        <div className="movie__toprated">
          <h2>Top rated</h2>
          <TopRatedMovie category={category} type={type.top_rated} />
        </div>
        <div className="movie__upcoming">
          <h2>Upcoming</h2>
          <UpcomingMovie category={category} type={type.upcoming} />
        </div>
      </div>
    </>
  );
};

export default Movie;

import Carousel from "../carousel/CarouselComponent";
import { type } from "../../api/tmdbApi";
import "./movie.scss";
import TopRatedMovie from "../movie-list/TopRatedMovieComponent";
import PopularMovie from "../movie-list/PopularMovieComponent";
import AiringMovie from "../movie-list/AiringMovieComponent";

const TvShow = ({ category }) => {
  return (
    <>
      <div className="movie__carousel">
        <Carousel category={category} />
      </div>
      <div className="movie__container">
        <div className="movie__airing">
          <h2>Airing Today</h2>
          <AiringMovie category={category} type={type.airing_today} />
        </div>
        <div className="movie__popular">
          <h2>Popular</h2>
          <PopularMovie category={category} type={type.popular} />
        </div>
        <div className="movie__toprated">
          <h2>Top rated</h2>
          <TopRatedMovie category={category} type={type.top_rated} />
        </div>
      </div>
    </>
  );
};

export default TvShow;

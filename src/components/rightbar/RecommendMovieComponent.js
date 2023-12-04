import { useEffect, useState } from "react";
import tmdbApi from "../../api/tmdbApi";
import { Link } from "react-router-dom";
import { ReactComponent as StarIcon } from "../../assets/star.svg";
import "./recommendMovie.scss";
import apiConfig from "../../api/apiConfig";

const RecommendMovie = ({ category, id }) => {
  const [recommendMovie, setRecommendMovie] = useState([]);
  useEffect(() => {
    const getRecommendMovie = async () => {
      const res = await tmdbApi.getRecommendations(category, id);
      setRecommendMovie(res.results);
    };
    getRecommendMovie();
  }, [id, category]);
  return (
    <div className="recommend__movie-container">
      <h3>Recommendations</h3>
      {recommendMovie &&
        recommendMovie.map((movie, index) => {
          return (
            <Link to={`/${category}/watch/${movie.id}`}>
              <div key={index} className="recommend__movie-card">
                <img
                  src={apiConfig.w500Image(movie.poster_path)}
                  alt={movie.original_title || movie.original_name}
                />
                <div className="recommend__movie-card-info">
                  <div className="recommend__movie-card-info-header">
                    <h4>{movie.title || movie.name}</h4>
                    <span>{movie.release_date || movie.first_air_date}</span>
                  </div>
                  <div className="recommend__movie-card-info-footer">
                    <span>{movie.vote_average.toFixed(1)}</span>
                    <StarIcon />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default RecommendMovie;

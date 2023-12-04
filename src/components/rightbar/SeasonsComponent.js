import { Link } from "react-router-dom";
import { ReactComponent as StarIcon } from "../../assets/star.svg";
import "./recommendMovie.scss";
import apiConfig from "../../api/apiConfig";

const Seasons = ({ seasons, category, id }) => {
  return (
    <div className="recommend__movie-container">
      <h3>Seasons</h3>
      {seasons &&
        seasons.map((season, index) => {
          return (
            <Link to={`/${category}/watch/${season.id}`}>
              <div key={index} className="recommend__movie-card">
                <img
                  src={apiConfig.w500Image(season.poster_path)}
                  alt={season.original_title || season.original_name}
                />
                <div className="recommend__movie-card-info">
                  <div className="recommend__movie-card-info-header">
                    <h4>{season.title || season.name}</h4>
                    <span>{season.release_date || season.first_air_date}</span>
                  </div>
                  <div className="recommend__movie-card-info-footer">
                    <span>{season.vote_average.toFixed(1)}</span>
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

export default Seasons;

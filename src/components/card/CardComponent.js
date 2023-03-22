import apiConfig from "../../api/apiConfig";
import { Link } from "react-router-dom";
import "./card.scss";

const Card = ({ item }) => {
  const link = "/detail/" + item.id;
  return (
    <Link to={link}>
      <div className="movie__card">
        <img
          alt={item.original_title || item.original_name}
          src={apiConfig.w500Image(item.poster_path)}
          loading="lazy"
        />
        <h3>{item.title || item.name}</h3>
      </div>
    </Link>
  );
};
export default Card;

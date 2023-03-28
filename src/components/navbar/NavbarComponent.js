import { useState } from "react";
import "./navbar.scss";

const Navbar = ({ setIsMovie }) => {
  const [isActive, setIsActive] = useState(true);

  const handleMovieBtn = () => {
    setIsActive(true);
    setIsMovie(true);
  };
  const handleTvShowBtn = () => {
    setIsActive(false);
    setIsMovie(false);
  };

  return (
    <div className="navbar__content">
      <p
        className={`navbar__item ${isActive ? "navbar__item-active" : ""}`}
        onClick={handleMovieBtn}
      >
        Movies
      </p>
      <p
        className={`navbar__item ${isActive ? "" : "navbar__item-active"}`}
        onClick={handleTvShowBtn}
      >
        Tv Shows
      </p>
    </div>
  );
};

export default Navbar;

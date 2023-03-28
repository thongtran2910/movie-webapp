import { useState } from "react";
import { category } from "../../api/tmdbApi";
import MovieGrid from "../../components/grid/MovieGridComponent";
import Navbar from "../../components/navbar/NavbarComponent";
import "./explorePage.scss";

const ExplorePage = () => {
  const [isMovie, setIsMovie] = useState(true);

  return (
    <div className="explore__content">
      <div className="explore__header">
        <h2>explore</h2>
      </div>
      <div className="navbar__container">
        <Navbar setIsMovie={setIsMovie} />
      </div>
      <div className="explore__container">
        <MovieGrid category={isMovie ? category.movie : category.tv} />
      </div>
    </div>
  );
};

export default ExplorePage;

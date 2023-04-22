import { useState } from "react";
import { category } from "../../api/tmdbApi";
import Movie from "../../components/movie/MovieComponent";
import Navbar from "../../components/navbar/NavbarComponent";
import TvShow from "../../components/movie/TvShowComponent";
import "./homePage.scss";

const HomePage = () => {
  const [isMovie, setIsMovie] = useState(true);
  return (
    <div className="home__container">
      <div className="navbar__container">
        <Navbar setIsMovie={setIsMovie} />
      </div>
      <div className="home__body">
        {isMovie ? (
          <Movie category={category.movie} />
        ) : (
          <TvShow category={category.tv} />
        )}
      </div>
    </div>
  );
};

export default HomePage;

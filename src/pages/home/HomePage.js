import { useState } from "react";
import Movie from "../../components/movie/MovieComponent";
import Navbar from "../../components/navbar/NavbarComponent";
import TvShow from "../../components/tvshow/TvShowComponent";
import "./homePage.scss";

const HomePage = () => {
  const [isMovie, setIsMovie] = useState(true);
  return (
    <div className="home__container">
      <div className="navbar__container">
        <Navbar setIsMovie={setIsMovie} />
        <div className="navbar__icon">
          <p className="navbar__usertab">menu</p>
        </div>
      </div>
      <div className="home__body">{isMovie ? <Movie /> : <TvShow />}</div>
    </div>
  );
};

export default HomePage;

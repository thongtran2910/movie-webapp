import { useState } from "react";
import { useSelector } from "react-redux";
import { category } from "../../api/tmdbApi";
import Movie from "../../components/movie/MovieComponent";
import Navbar from "../../components/navbar/NavbarComponent";
import TvShow from "../../components/movie/TvShowComponent";
import "./homePage.scss";
import { selectCurrentUser } from "../../redux/selectors/userSelector";

const HomePage = () => {
  const [isMovie, setIsMovie] = useState(true);
  const currentUser = useSelector(selectCurrentUser);
  return (
    <div className="home__container">
      <div className="navbar__container">
        <Navbar setIsMovie={setIsMovie} />
        <div className="navbar__icon">
          {currentUser ? (
            currentUser.email
          ) : (
            <p className="navbar__usertab">menu</p>
          )}
        </div>
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

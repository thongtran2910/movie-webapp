import "./homePage.scss";
import Sidebar from "../../components/sidebar/SidebarComponent";
import Movie from "../../components/movie/MovieComponent";
import { useEffect, useState } from "react";
import TvShow from "../../components/tvshow/TvShowComponent";
import { useDispatch } from "react-redux";
import {
  setMoviePopularActionService,
  setMovieTopRatedActionService,
  setMovieTrendingActionService,
  setMovieUpcomingActionService,
} from "../../redux/actions/movieAction";
import {
  setTvShowAiringActionService,
  setTvShowPopularActionService,
  setTvShowTopRatedActionService,
  setTvShowTrendingActionService,
} from "../../redux/actions/tvShowAction";

const HomePage = () => {
  const [isMovie, setIsMovie] = useState(true);
  // const [isActive, setIsActive] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMovieTrendingActionService());
    dispatch(setMoviePopularActionService());
    dispatch(setMovieTopRatedActionService());
    dispatch(setMovieUpcomingActionService());
  }, []);

  const handleTvShowOnclick = () => {
    dispatch(setTvShowTrendingActionService());
    dispatch(setTvShowPopularActionService());
    dispatch(setTvShowTopRatedActionService());
    dispatch(setTvShowAiringActionService());
    setIsMovie(false);
  };
  const handleMovieOnclick = () => {
    setIsMovie(true);
  };

  return (
    <div className="mainview__container">
      <div className="mainview__sidebar">
        <Sidebar />
      </div>
      <div className="mainview__content">
        <div className="nav__container">
          <div className="nav__menu">
            <p
              onClick={handleMovieOnclick}
              className={`nav__tab nav__movie ${
                isMovie ? "nav__tab-active" : ""
              }`}
            >
              Movies
            </p>
            <p
              onClick={handleTvShowOnclick}
              className={`nav__tab nav__tvshow ${
                isMovie ? "" : "nav__tab-active"
              }`}
            >
              TV Shows
            </p>
          </div>
          <div className="nav__icon">
            <p className="nav__usertab">menu</p>
          </div>
        </div>
        <div className="body__container">
          {isMovie ? <Movie /> : <TvShow />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

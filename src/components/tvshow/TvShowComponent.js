import TvShowCarousel from "../carousel/TvShowCarouselComponent";
import TvShowAiring from "../tvshow-slider/TvShowAiringComponent";
import TvShowPopular from "../tvshow-slider/TvShowPopularComponent";
import TvShowTopRated from "../tvshow-slider/TvShowTopRatedComponent";

import "./tvShow.scss";

const TvShow = () => {
  return (
    <>
      <div className="tvshow__carousel">
        <TvShowCarousel />
      </div>
      <div className="tvshow__container">
        <div className="tvshow__upcoming">
          <h2>Airing Today</h2>
          <TvShowAiring />
        </div>
        <div className="tvshow__popular">
          <h2>Popular</h2>
          <TvShowPopular />
        </div>
        <div className="tvshow__toprated">
          <h2>Top rated</h2>
          <TvShowTopRated />
        </div>
      </div>
    </>
  );
};

export default TvShow;

import { useEffect, useState } from "react";
import { movieService } from "../../services/movieService";
import Carousel from "../../components/carousel/CarouselComponent";
import Navigate from "../../components/navigate/NavigateComponent";
import "./homePage.scss";
import Sidebar from "../../components/sidebar/SidebarComponent";

const HomePage = () => {
  const [movieBanner, setMovieBanner] = useState([]);

  useEffect(() => {
    let fetchTrendingMovie = async () => {
      let res = await movieService.getTrendingMovie();
      setMovieBanner(res.data.results);
    };
    fetchTrendingMovie();
  }, []);
  return (
    <div className="mainview__container">
      <div className="mainview__sidebar">
        <Sidebar />
      </div>
      <div className="mainview__content">
        <Navigate />
        <div className="carousel__container">
          <Carousel bannerList={movieBanner} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

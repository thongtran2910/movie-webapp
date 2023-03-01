import { useEffect, useState } from "react";
import { movieService } from "../../services/movieService";
import Carousel from "../../components/carousel/CarouselComponent";
import Navigate from "../../components/navigate/NavigateComponent";
import "./homePage.scss";

const HomePage = () => {
  const [movieBanner, setMovieBanner] = useState([]);

  useEffect(() => {
    let fetchTrendingMovie = async () => {
      let res = await movieService.getTrendingMovie();
      setMovieBanner(res.data.results);
      console.log(res);
    };
    fetchTrendingMovie();
  }, []);
  return (
    <div className="mainview__container">
      <Navigate />
      <div className="carousel__container">
        <Carousel bannerList={movieBanner} />
      </div>
    </div>
  );
};

export default HomePage;

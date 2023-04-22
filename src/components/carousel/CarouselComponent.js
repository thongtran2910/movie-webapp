import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useEffect } from "react";
import { ReactComponent as StarIcon } from "../../assets/star.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectMovieTrending } from "../../redux/selectors/movieSelector";
import { setMovieTrendingAction } from "../../redux/actions/movieAction";
import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import "swiper/scss";
import "./carousel.scss";
import { Link } from "react-router-dom";

const Carousel = ({ category }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    let fetchTrendingMovie = async () => {
      const params = {};
      let res = await tmdbApi.getTrendingList(category, { params });
      dispatch(setMovieTrendingAction(res.results));
    };
    fetchTrendingMovie();
  }, [category, dispatch]);

  const bannerList = useSelector(selectMovieTrending);

  return (
    <div className="carousel__slider">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {bannerList.map((movie, index) => {
          return (
            <SwiperSlide key={index}>
              <Link to={`/${category}/${movie.id}`}>
                <CarouselItem item={movie} category={category} />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

const CarouselItem = ({ item }) => {
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  return (
    <div
      className="carousel__slider-item"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="carousel__slider-item-content">
        <div className="carousel__slider-item-content-info">
          <h3 className="movie__title">{item.title || item.name}</h3>
          <p className="movie__release">
            Release date: {item.release_date || item.first_air_date}
          </p>
          <p className="movie__overview">{item.overview}</p>
          <div className="movie__rating">
            <span>{item.vote_average.toFixed(1)}</span>
            <StarIcon />
          </div>
        </div>
        <div className="carousel__slider-item-content-poster">
          <img
            src={apiConfig.w500Image(item.poster_path)}
            alt={item.original_title || item.original_name}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;

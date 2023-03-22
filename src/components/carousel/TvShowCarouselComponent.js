import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs, Navigation } from "swiper";
import { useEffect, useState } from "react";
import { ReactComponent as StarIcon } from "../../assets/star.svg";
import { ReactComponent as PrevBtn } from "../../assets/prev-btn.svg";
import { ReactComponent as NextBtn } from "../../assets/next-btn.svg";
import "swiper/scss";
import "./carousel.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectTvShowTrending } from "../../redux/selectors/tvShowSelector";
import tmdbApi, { category } from "../../api/tmdbApi";
import { setTvShowTrendingAction } from "../../redux/actions/tvShowAction";
import apiConfig from "../../api/apiConfig";

const TvShowCarousel = () => {
  const [activeThumb, setActiveThumb] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    let fetchTrendingTv = async () => {
      const params = {};
      let res = await tmdbApi.getTrendingList(category.tv, { params });
      dispatch(setTvShowTrendingAction(res.results));
    };
    fetchTrendingTv();
  }, [dispatch]);

  const bannerList = useSelector(selectTvShowTrending);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        navigation={{
          nextEl: ".swiper__button-next",
          prevEl: ".swiper__button-prev",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Thumbs, Autoplay, Navigation]}
        thumbs={{
          swiper: activeThumb,
        }}
        className="movie__banner"
      >
        {bannerList.map((movie, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                loading="lazy"
                src={apiConfig.originalImage(movie.backdrop_path)}
                alt={movie.original_name}
              />
              <div className="swiper-lazy-preloader"></div>
              <div className="img__backdrop"></div>
              <div className="banner__content">
                <h3 className="movie__title">{movie.name}</h3>
                <p className="movie__release">
                  On air date: {movie.first_air_date}
                </p>
                <p className="movie__overview">{movie.overview}</p>
                <div className="movie__rating">
                  <span>{movie.vote_average.toFixed(1)}</span>
                  <StarIcon />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <PrevBtn className="swiper__button swiper__button-prev" />
        <NextBtn className="swiper__button swiper__button-next" />
      </Swiper>

      <Swiper
        onSwiper={setActiveThumb}
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Thumbs, Autoplay]}
        className="banner__slider"
      >
        {bannerList.map((movie, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={apiConfig.originalImage(movie.backdrop_path)}
                alt={movie.original_title}
                loading="lazy"
              />
              <div className="swiper-lazy-preloader"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TvShowCarousel;

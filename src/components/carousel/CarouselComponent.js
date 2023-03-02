import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs } from "swiper";
import "swiper/scss";
import "./carousel.scss";
import { useState } from "react";

const Carousel = ({ bannerList }) => {
  const [activeThumb, setActiveThumb] = useState();

  const getBannerUrl = (path) => {
    return `https://image.tmdb.org/t/p/w1280${path}`;
  };
  // const getPosterUrl = (path) => {
  //   return `https://www.themoviedb.org/t/p/w440_and_h660_face${path}`;
  // };

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Thumbs, Autoplay]}
        thumbs={{
          swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
        }}
        className="movie__carousel"
      >
        {bannerList.map((movie, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                loading="lazy"
                src={getBannerUrl(movie.backdrop_path)}
                alt=""
              />
              <div className="swiper-lazy-preloader"></div>
              <div className="banner__content">
                <h3 className="movie__title">{movie.title}</h3>
                <p className="movie__release">
                  Release date: {movie.release_date}
                </p>
                <p className="movie__overview">{movie.overview}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Swiper
        onSwiper={setActiveThumb}
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        modules={[Thumbs]}
        className="movie__slider"
      >
        {bannerList.map((movie, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={getBannerUrl(movie.backdrop_path)} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Carousel;

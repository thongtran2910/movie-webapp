import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { ReactComponent as PrevBtn } from "../../assets/prev-btn.svg";
import { ReactComponent as NextBtn } from "../../assets/next-btn.svg";

import "swiper/scss";
import { useSelector } from "react-redux";
import { selectTvShowPopular } from "../../redux/selectors/tvShowSelector";

const TvShowPopular = () => {
  const getPosterUrl = (path) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${path}`;
  };

  const popularList = useSelector(selectTvShowPopular);

  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={30}
      navigation={{
        nextEl: ".swiper__button-next",
        prevEl: ".swiper__button-prev",
        disabledClass: "swiper__button-disabled",
      }}
      modules={[Navigation]}
    >
      {popularList.map((movie, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="movie__card">
              <img
                alt={movie.original_name}
                src={getPosterUrl(movie.poster_path)}
                loading="lazy"
              />
              <div className="swiper-lazy-preloader"></div>
              <h3>{movie.name}</h3>
            </div>
          </SwiperSlide>
        );
      })}
      <div className="slider__backdrop"></div>
      <PrevBtn className="swiper__button swiper__button-prev" />
      <NextBtn className="swiper__button swiper__button-next" />
    </Swiper>
  );
};

export default TvShowPopular;

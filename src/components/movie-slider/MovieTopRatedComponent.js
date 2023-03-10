import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { ReactComponent as PrevBtn } from "../../assets/prev-btn.svg";
import { ReactComponent as NextBtn } from "../../assets/next-btn.svg";

import "swiper/scss";
import { useSelector } from "react-redux";
import { selectMovieTopRated } from "../../redux/selectors/movieSelector";

const MovieTopRated = () => {
  const topRatedList = useSelector(selectMovieTopRated);

  const getPosterUrl = (path) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${path}`;
  };
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
      {topRatedList.map((movie, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="movie__card">
              <img
                alt={movie.original_title}
                src={getPosterUrl(movie.poster_path)}
              />

              <h3>{movie.title}</h3>
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

export default MovieTopRated;

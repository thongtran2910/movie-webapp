import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { ReactComponent as PrevBtn } from "../../assets/prev-btn.svg";
import { ReactComponent as NextBtn } from "../../assets/next-btn.svg";

import "swiper/scss";
import { useDispatch, useSelector } from "react-redux";
import { selectMoviePopular } from "../../redux/selectors/movieSelector";
import tmdbApi, { movieType } from "../../api/tmdbApi";
import { setMoviePopularAction } from "../../redux/actions/movieAction";
import Card from "../card/CardComponent";

const MoviePopular = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let fetchPopularMovie = async () => {
      const params = {};
      let res = await tmdbApi.getMoviesList(movieType.popular, { params });
      dispatch(setMoviePopularAction(res.results));
    };
    fetchPopularMovie();
  }, [dispatch]);

  const popularList = useSelector(selectMoviePopular);

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
            <Card item={movie} />
          </SwiperSlide>
        );
      })}
      <div className="slider__backdrop"></div>
      <PrevBtn className="swiper__button swiper__button-prev" />
      <NextBtn className="swiper__button swiper__button-next" />
    </Swiper>
  );
};

export default MoviePopular;

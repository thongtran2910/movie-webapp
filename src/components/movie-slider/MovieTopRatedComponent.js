import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { ReactComponent as PrevBtn } from "../../assets/prev-btn.svg";
import { ReactComponent as NextBtn } from "../../assets/next-btn.svg";

import "swiper/scss";
import { useDispatch, useSelector } from "react-redux";
import { selectMovieTopRated } from "../../redux/selectors/movieSelector";
import tmdbApi, { movieType } from "../../api/tmdbApi";
import { setMovieTopRatedAction } from "../../redux/actions/movieAction";
import Card from "../card/CardComponent";

const MovieTopRated = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTopRatedMovie = async () => {
      const params = {};
      const res = await tmdbApi.getMoviesList(movieType.top_rated, { params });
      dispatch(setMovieTopRatedAction(res.results));
    };
    fetchTopRatedMovie();
  }, [dispatch]);

  const topRatedList = useSelector(selectMovieTopRated);

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

export default MovieTopRated;

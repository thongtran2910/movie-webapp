import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { ReactComponent as PrevBtn } from "../../assets/prev-btn.svg";
import { ReactComponent as NextBtn } from "../../assets/next-btn.svg";

import "swiper/scss";
import { useDispatch, useSelector } from "react-redux";
import { selectTvShowPopular } from "../../redux/selectors/tvShowSelector";
import tmdbApi, { tvType } from "../../api/tmdbApi";
import { setTvShowPopularAction } from "../../redux/actions/tvShowAction";
import Card from "../card/CardComponent";

const TvShowPopular = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTvPopular = async () => {
      const params = {};
      const res = await tmdbApi.getTvList(tvType.popular, { params });
      dispatch(setTvShowPopularAction(res.results));
    };
    fetchTvPopular();
  }, [dispatch]);

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

export default TvShowPopular;

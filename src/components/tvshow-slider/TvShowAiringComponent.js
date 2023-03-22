import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { ReactComponent as PrevBtn } from "../../assets/prev-btn.svg";
import { ReactComponent as NextBtn } from "../../assets/next-btn.svg";

import "swiper/scss";
import { useDispatch, useSelector } from "react-redux";
import { selectTvShowAiring } from "../../redux/selectors/tvShowSelector";
import tmdbApi, { tvType } from "../../api/tmdbApi";
import { setTvShowAiringAction } from "../../redux/actions/tvShowAction";
import Card from "../card/CardComponent";

const TvShowAiring = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAiringTv = async () => {
      const params = {};
      const res = await tmdbApi.getTvList(tvType.airing_today, { params });
      dispatch(setTvShowAiringAction(res.results));
    };
    fetchAiringTv();
  }, [dispatch]);

  const airingList = useSelector(selectTvShowAiring);

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
      {airingList.map((movie, index) => {
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

export default TvShowAiring;

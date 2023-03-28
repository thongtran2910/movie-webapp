import Card from "../card/CardComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import { ReactComponent as PrevBtn } from "../../assets/prev-btn.svg";
import { ReactComponent as NextBtn } from "../../assets/next-btn.svg";
import "swiper/scss";
import "./slider.scss";

const Slider = ({ category, list }) => {
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
      {list.map((movie, index) => {
        return (
          <SwiperSlide key={index}>
            <Card category={category} item={movie} />
          </SwiperSlide>
        );
      })}
      <div className="slider__backdrop"></div>
      <PrevBtn className="swiper__button swiper__button-prev" />
      <NextBtn className="swiper__button swiper__button-next" />
    </Swiper>
  );
};

export default Slider;

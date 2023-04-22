import Card from "../card/CardComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import { ReactComponent as PrevBtn } from "../../assets/prev-btn.svg";
import { ReactComponent as NextBtn } from "../../assets/next-btn.svg";
import "swiper/scss";
import "./slider.scss";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../Hook/useWindowDimensions";

const Slider = ({ category, list }) => {
  const { width } = useWindowDimensions();
  const [slidesPerView, setSlidesPerView] = useState(6);

  useEffect(() => {
    const onDimensionsChange = () => {
      // width < 600 ? setSlidesPerView(3) : setSlidesPerView(6);
      if (width < 640) {
        setSlidesPerView(3);
      } else if (width < 1024) {
        setSlidesPerView(4);
      } else if (width < 1366) {
        setSlidesPerView(5);
      } else {
        setSlidesPerView(6);
      }
    };
    onDimensionsChange();
  }, [width]);

  return (
    <Swiper
      slidesPerView={slidesPerView}
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

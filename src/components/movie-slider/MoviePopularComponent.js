import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Card } from "antd";

import "swiper/scss";
import "swiper/scss/navigation";

const MoviePopular = ({ popularList }) => {
  const getPosterUrl = (path) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${path}`;
  };
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={30}
      loop={true}
      navigation={true}
      modules={[Navigation]}
    >
      {popularList.map((movie, index) => {
        return (
          <SwiperSlide key={index}>
            <Card
              hoverable
              style={{
                width: 200,
                height: 380,
              }}
              cover={
                <img
                  alt={movie.original_title}
                  src={getPosterUrl(movie.poster_path)}
                />
              }
            >
              <h3>{movie.title}</h3>
            </Card>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MoviePopular;

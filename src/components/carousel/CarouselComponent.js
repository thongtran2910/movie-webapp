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

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Thumbs, Autoplay]}
        thumbs={{
          swiper: activeThumb,
        }}
        className="movie__banner"
      >
        {bannerList.map((movie, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                loading="lazy"
                src={getBannerUrl(movie.backdrop_path)}
                alt={movie.original_title}
              />
              <div className="swiper-lazy-preloader"></div>
              <div className="banner__content">
                <h3 className="movie__title">{movie.title}</h3>
                <p className="movie__release">
                  Release date: {movie.release_date}
                </p>
                <p className="movie__overview">{movie.overview}</p>
                <div className="movie__rating">
                  <span>{movie.vote_average.toFixed(1)}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </div>
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
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Thumbs, Autoplay]}
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

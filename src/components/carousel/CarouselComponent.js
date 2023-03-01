import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "./carousel.scss";

const getBannerUrl = (path) => {
  return `https://image.tmdb.org/t/p/w1280${path}`;
};

const Carousel = ({ bannerList }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation={true}
      modules={[Navigation, Autoplay]}
    >
      {bannerList.map((movie, index) => {
        return (
          <SwiperSlide className="banner__container">
            <img
              loading="lazy"
              src={getBannerUrl(movie.backdrop_path)}
              key={index}
              alt=""
            />
            <div class="swiper-lazy-preloader"></div>
            <div className="banner__content">
              <h3>{movie.title}</h3>
              <p>{movie.release_date}</p>
              <p>{movie.genre_ids}</p>
              <p>{movie.overview}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;

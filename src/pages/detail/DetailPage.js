import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import tmdbApi from "../../api/tmdbApi";
import SimilarMovie from "../../components/movie-list/SimilarMovieComponent";
import CastList from "./CastList";
import "./detailPage.scss";

const DetailPage = () => {
  const [movie, setMovie] = useState(null);
  let { category, id } = useParams();
  useEffect(() => {
    const fetchDetails = async () => {
      const res = await tmdbApi.getDetails(category, id, { params: {} });
      setMovie(res);
    };
    fetchDetails();
  }, [category, id]);
  return (
    <>
      {movie && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                movie.backdrop_path || movie.poster_path
              )})`,
            }}
          ></div>
          <div className="detail__content">
            <div className="detail__content-poster">
              <div
                className="detail__content-poster-img"
                style={{
                  backgroundImage: `url(${apiConfig.w500Image(
                    movie.poster_path || movie.backdrop_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="detail__content-info">
              <h2 className="title">{movie.title || movie.name}</h2>
              <div className="genres">
                {movie.genres &&
                  movie.genres.slice(0, 5).map((genre, index) => {
                    return (
                      <span key={index} className="genres__item">
                        {genre.name}
                      </span>
                    );
                  })}
              </div>
              <p className="overview">{movie.overview}</p>
              <div className="castlist">
                <div className="section__header">
                  <h3>Casts</h3>
                </div>
                <CastList id={movie.id} />
              </div>
            </div>
          </div>
          <div className="detail__body">
            <div className="detail__body-videos"></div>
            <div className="detail__body-similar">
              <div className="detail__body-similar-header">
                <h3>Similar</h3>
              </div>
              <SimilarMovie category={category} id={movie.id} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DetailPage;

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import apiConfig from "../../api/apiConfig";
import tmdbApi from "../../api/tmdbApi";
import SimilarMovie from "../../components/movie-list/SimilarMovieComponent";
import CastList from "./CastList";
import "./detailPage.scss";
import { ReactComponent as HeartIcon } from "../../assets/heart-icon.svg";
import Button, {
  InvertedButton,
} from "../../components/button/ButtonComponent";
import { selectCurrentUser } from "../../redux/selectors/userSelector";
import {
  arrayRemove,
  arrayUnion,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { notification, Modal } from "antd";

const DetailPage = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [movie, setMovie] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [videos, setVideos] = useState(null);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  let { category, id } = useParams();
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  const [api, contextHolder] = notification.useNotification();

  const showModal = () => {
    setIsTrailerOpen(true);
  };
  const handleCancel = () => {
    setIsTrailerOpen(false);
  };

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await tmdbApi.getDetails(category, id, { params: {} });
      setMovie(res);
    };
    fetchDetails();
  }, [category, id]);

  useEffect(() => {
    const fetchSeasonDetail = async () => {
      const res = await tmdbApi.getSeasons(id, movie?.seasons, { params: {} });
      setEpisodes(res.episodes);
    };
    fetchSeasonDetail();
  }, [id, movie]);

  useEffect(() => {
    if (!currentUser) {
      return;
    }

    const unSubDoc = onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
      setIsFavorited(
        doc.data()?.favorites.some((item) => item.id === movie?.id)
      );
    });
    return () => unSubDoc();
  }, [currentUser, movie?.id]);

  const addToFavorite = async () => {
    if (!movie) return;
    if (!currentUser) {
      api["error"]({
        message: "Cannot add to favorite",
        description: "Please Sign-in before using this function",
        duration: 3,
      });
    }
    await updateDoc(doc(db, "users", currentUser.uid), {
      favorites: !isFavorited
        ? arrayUnion({
            poster_path: movie?.poster_path,
            id: movie?.id,
            media_type: category,
            ...(category === "movie" && { title: movie?.title }),
            ...(category === "tv" && { title: movie?.name }),
          })
        : arrayRemove({
            poster_path: movie.poster_path,
            id: movie.id,
            media_type: category,
            ...(category === "movie" && { title: movie?.title }),
            ...(category === "tv" && { title: movie?.name }),
          }),
    });
  };

  const onTrailerBtnClicked = () => {
    const fetchVideos = async () => {
      const res = await tmdbApi.getVideos(category, id, { params: {} });
      setVideos(res.results[0].key);
    };
    fetchVideos();
    showModal();
  };

  const onWatchBtnClicked = () => {
    if (!currentUser) {
      api["error"]({
        message: "Cannot watch",
        description: "Please Sign-in before using this function",
        duration: 3,
      });
    } else if (category === "movie") {
      navigate(`/${category}/watch/${id}`);
    } else {
      navigate(
        `/${category}/watch/${id}/${movie?.seasons[0].season_number}/${episodes[0].episode_number}`
      );
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      {contextHolder}
      {movie && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                movie.backdrop_path || movie.poster_path
              )})`,
            }}
          >
            <div className="icon">
              <div
                className={`${
                  isFavorited ? "icon__favorite-active" : "icon__favorite"
                }`}
              >
                <HeartIcon onClick={addToFavorite} />
                <span className="icon__favorite-tooltip">Mark as favorite</span>
              </div>
            </div>
          </div>
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
              <div className="watch_btn">
                <Button onClick={onTrailerBtnClicked}>Trailer</Button>
                <Modal
                  title={false}
                  open={isTrailerOpen}
                  closeIcon={false}
                  onCancel={handleCancel}
                  footer={null}
                  width={900}
                  closable={false}
                  bodyStyle={{ height: 600 }}
                  destroyOnClose={true}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${videos}`}
                    title="Film Video Player"
                    width="100%"
                    height="100%"
                    allowFullScreen
                  ></iframe>
                </Modal>
                <InvertedButton onClick={onWatchBtnClicked}>
                  Watch
                </InvertedButton>
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

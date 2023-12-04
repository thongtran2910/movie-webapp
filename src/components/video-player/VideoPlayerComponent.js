import { useSelector } from "react-redux";
import { useEffect } from "react";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { selectCurrentUser } from "../../redux/selectors/userSelector";
import { ReactComponent as StarIcon } from "../../assets/star.svg";
import { ReactComponent as CalendarIcon } from "../../assets/calendar-icon.svg";
import "./videoPlayer.scss";

const VideoPlayer = ({ category, id, season, ep, movie }) => {
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (!currentUser) return;
    if (!movie) return;

    getDoc(doc(db, "users", currentUser?.uid)).then((docSnap) => {
      const isAlreadyStored = docSnap
        .data()
        ?.recentlyWatch.some((item) => item.id === movie.id);

      if (!isAlreadyStored) {
        updateDoc(doc(db, "users", currentUser?.uid), {
          recentlyWatch: arrayUnion({
            poster_path: movie?.poster_path,
            id: movie?.id,
            media_type: category,
            ...(category === "movie" && { title: movie?.title }),
            ...(category === "tv" && { title: movie?.name }),
          }),
        });
      } else {
        const updatedRecentlyWatch = docSnap
          .data()
          ?.recentlyWatch.filter((item) => item.id !== movie.id)
          .concat({
            poster_path: movie?.poster_path,
            id: movie?.id,
            media_type: category,
            ...(category === "movie" && { title: movie?.title }),
            ...(category === "tv" && { title: movie?.name }),
          });
        updateDoc(doc(db, "users", currentUser?.uid), {
          recentlyWatch: updatedRecentlyWatch,
        });
      }
    });
  }, [currentUser, movie, category]);

  return (
    <>
      {movie && (
        <div className="video__player-container">
          <div className="video__player-video">
            <iframe
              src={
                category === "movie"
                  ? `https://www.2embed.cc/embed/${id}`
                  : `https://www.2embed.cc/embedtv/${id}&s=${season}&e=${ep}`
              }
              title="Film Video Player"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video__player-info">
            <h3>{movie?.title || movie?.name}</h3>
            <div className="video__player-info-body">
              <div className="video__player-info-body-rating">
                <StarIcon />
                <span>{movie?.vote_average.toFixed(1)}</span>
              </div>
              <div className="video__player-info-body-date">
                <CalendarIcon />
                <span>{movie?.release_date || movie.first_air_date}</span>
              </div>
            </div>
            <div className="video__player-info-genres">
              {movie.genres &&
                movie.genres.slice(0, 5).map((genre, index) => {
                  return (
                    <span
                      key={index}
                      className="video__player-info-genres-item"
                    >
                      {genre.name}
                    </span>
                  );
                })}
            </div>
            <div className="video__player-info-overview">
              <h4>Overview:</h4>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPlayer;

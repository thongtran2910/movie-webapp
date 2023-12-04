import RecommendMovie from "../../components/rightbar/RecommendMovieComponent";
import VideoPlayer from "../../components/video-player/VideoPlayerComponent";
import { ReactComponent as BackBtn } from "../../assets/back-btn.svg";
import "./watchPage.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import tmdbApi from "../../api/tmdbApi";
import Seasons from "../../components/rightbar/SeasonsComponent";

const WatchPage = () => {
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const { category, id, season, ep } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await tmdbApi.getDetails(category, id, { params: {} });
      setMovie(res);
    };
    fetchDetails();
  }, [category, id]);

  const handleNavigate = () => {
    navigate(`/${category}/${id}`);
  };
  return (
    <div className="watchpage__container">
      <div className="watchpage__container-btn">
        <BackBtn onClick={handleNavigate} />
      </div>
      <VideoPlayer
        movie={movie}
        season={season}
        ep={ep}
        category={category}
        id={id}
      />
      {category === "movie" ? (
        <RecommendMovie category={category} id={id} />
      ) : (
        <Seasons
          seasons={movie?.seasons}
          episodes={season.episodes}
          category={category}
          id={id}
        />
      )}
    </div>
  );
};

export default WatchPage;

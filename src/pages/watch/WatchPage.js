import RightBar from "../../components/rightbar/RightBarComponent";
import VideoPlayer from "../../components/video-player/VideoPlayerComponent";
import { ReactComponent as BackBtn } from "../../assets/back-btn.svg";
import "./watchPage.scss";
import { useNavigate, useParams } from "react-router-dom";

const WatchPage = () => {
  const navigate = useNavigate();
  const { category, id } = useParams();
  const handleNavigate = () => {
    navigate(`/${category}/${id}`);
  };
  return (
    <div className="watchpage__container">
      <div className="watchpage__container-btn">
        <BackBtn onClick={handleNavigate} />
      </div>
      <VideoPlayer />
      <RightBar />
    </div>
  );
};

export default WatchPage;

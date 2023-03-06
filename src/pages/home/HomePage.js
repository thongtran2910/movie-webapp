import Navigate from "../../components/navigate/NavigateComponent";
import "./homePage.scss";
import Sidebar from "../../components/sidebar/SidebarComponent";
import Movie from "../../components/movie/MovieComponent";

const HomePage = () => {
  return (
    <div className="mainview__container">
      <div className="mainview__sidebar">
        <Sidebar />
      </div>
      <div className="mainview__content">
        <Navigate />
        <div className="body__container">
          <Movie />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

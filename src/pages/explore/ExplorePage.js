import { useState } from "react";
import { useParams } from "react-router-dom";
import MovieGrid from "../../components/grid/MovieGridComponent";
import TvGrid from "../../components/grid/TvGridComponent";
import Navbar from "../../components/navbar/NavbarComponent";
import SearchBox from "../../components/searchbox/SearchBoxComponent";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import "./explorePage.scss";

const ExplorePage = () => {
  const [isMovie, setIsMovie] = useState(true);
  const { keyword } = useParams();

  return (
    <div className="explore__content">
      <div className="explore__header">
        <h2>explore</h2>
        <div className="searchbox">
          <SearchIcon />
          <SearchBox type="text" value={keyword} placeholder="Search" />
        </div>
      </div>
      <div className="navbar__container">
        <Navbar setIsMovie={setIsMovie} />
      </div>
      <div className="explore__container">
        {isMovie ? <MovieGrid /> : <TvGrid />}
      </div>
    </div>
  );
};

export default ExplorePage;

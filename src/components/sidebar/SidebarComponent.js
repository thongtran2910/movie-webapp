import { ReactComponent as HomeIcon } from "../../assets/home-icon.svg";
import { ReactComponent as ExploreIcon } from "../../assets/explore-icon.svg";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { ReactComponent as FavoriteIcon } from "../../assets/favorite-icon.svg";
import { ReactComponent as BookmarkIcon } from "../../assets/bookmark-icon.svg";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar__container">
      <div className="logo__container">Logo</div>
      <div className="sidebar__content">
        <h2>menu</h2>
        <div className="navlink__container">
          <a href="/">
            <HomeIcon />
            <p>Home</p>
          </a>
          <a href="/explore">
            <ExploreIcon />
            <p>Explore</p>
          </a>
          <a href="/search">
            <SearchIcon />
            <p>Search</p>
          </a>
        </div>
        <div className="nav__split"></div>
        <h2>personal</h2>
        <div className="navlink__container">
          <a href="">
            <FavoriteIcon />
            <p>Favorite</p>
          </a>
          <a href="">
            <BookmarkIcon />
            <p>Watchlist</p>
          </a>
        </div>
        <div className="nav__split"></div>
        <h2>general</h2>
        <div className="navlink__container">
          <a href="/login">
            <p>Login</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

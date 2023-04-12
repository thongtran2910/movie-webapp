import { ReactComponent as HomeIcon } from "../../assets/home-icon.svg";
import { ReactComponent as ExploreIcon } from "../../assets/explore-icon.svg";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { ReactComponent as FavoriteIcon } from "../../assets/favorite-icon.svg";
import { ReactComponent as BookmarkIcon } from "../../assets/bookmark-icon.svg";
import "./sidebar.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/selectors/userSelector";
import { signOutUser } from "../../firebase/firebaseConfig";

const Sidebar = () => {
  const route = window.location.pathname;
  const sidebarClassName =
    route === "/explore" ? "sidebar__container-minimize" : "sidebar__container";

  const currentUser = useSelector(selectCurrentUser);
  console.log(currentUser);

  const handleSignOut = () => {
    signOutUser();
  };

  return (
    <div className={`${sidebarClassName}`}>
      <div className="logo__container">Logo</div>
      <div className="sidebar__content">
        <h2>menu</h2>
        <div className="navlink__container">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navlink__item-active" : "navlink__item"
            }
          >
            <HomeIcon />
            <p>Home</p>
          </NavLink>
          <NavLink
            to="/explore"
            className={({ isActive }) =>
              isActive ? "navlink__item-active" : "navlink__item"
            }
          >
            <ExploreIcon />
            <p>Explore</p>
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? "navlink__item-active" : "navlink__item"
            }
          >
            <SearchIcon />
            <p>Search</p>
          </NavLink>
        </div>
        <div className="nav__split"></div>
        <h2>personal</h2>
        <div className="navlink__container">
          <NavLink
            to={`/${currentUser?.uid}/favorite`}
            className={({ isActive }) =>
              isActive ? "navlink__item-active" : "navlink__item"
            }
          >
            <FavoriteIcon />
            <p>Favorite</p>
          </NavLink>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? "navlink__item-active" : "navlink__item"
            }
          >
            <BookmarkIcon />
            <p>Watchlist</p>
          </NavLink>
        </div>
        <div className="nav__split"></div>
        <h2>general</h2>
        <div className="navlink__container">
          {currentUser ? (
            <p onClick={handleSignOut}>Sign out</p>
          ) : (
            <NavLink to="/auth" className="navlink__item">
              <p>Login</p>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import { ReactComponent as HomeIcon } from "../../assets/home-icon.svg";
import { ReactComponent as ExploreIcon } from "../../assets/explore-icon.svg";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { ReactComponent as FavoriteIcon } from "../../assets/favorite-icon.svg";
import { ReactComponent as HistoryIcon } from "../../assets/history-icon.svg";
import "./sidebar.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/selectors/userSelector";
import { signOutUser } from "../../firebase/firebaseConfig";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";

const { confirm } = Modal;

const Sidebar = ({ isSidebarActive, onMenuClicked }) => {
  const currentUser = useSelector(selectCurrentUser);

  const showPromiseConfirm = () => {
    confirm({
      title: "Do you really want to log out?",
      icon: <ExclamationCircleFilled />,
      content: "You need to sign in again to use all the features",
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          setTimeout(() => {
            signOutUser();
            onMenuClicked();
          }, 1000);
        }).catch(() => console.log("Oops errors!"));
      },
      onCancel() {},
    });
  };

  return (
    <>
      <div
        className={
          isSidebarActive ? "sidebar__container-active" : "sidebar__container"
        }
      >
        <div className="sidebar__content">
          <h2>menu</h2>
          <div className="navlink__container">
            <NavLink
              to="/"
              onClick={onMenuClicked}
              className={({ isActive }) =>
                isActive ? "navlink__item-active" : "navlink__item"
              }
            >
              <HomeIcon />
              <p>Home</p>
            </NavLink>
            <NavLink
              to="/explore"
              onClick={onMenuClicked}
              className={({ isActive }) =>
                isActive ? "navlink__item-active" : "navlink__item"
              }
            >
              <ExploreIcon />
              <p>Explore</p>
            </NavLink>
            <NavLink
              to="/search"
              onClick={onMenuClicked}
              className={({ isActive }) =>
                isActive ? "navlink__item-active" : "navlink__item"
              }
            >
              <SearchIcon />
              <p>Search</p>
            </NavLink>
          </div>
          <div className="nav__split"></div>
          {currentUser ? (
            <>
              <h2>personal</h2>
              <div className="navlink__container">
                <NavLink
                  to="/favorite"
                  onClick={onMenuClicked}
                  className={({ isActive }) =>
                    isActive ? "navlink__item-active" : "navlink__item"
                  }
                >
                  <FavoriteIcon />
                  <p>Favorite</p>
                </NavLink>
                <NavLink
                  to="/history"
                  onClick={onMenuClicked}
                  className={({ isActive }) =>
                    isActive ? "navlink__item-active" : "navlink__item"
                  }
                >
                  <HistoryIcon />
                  <p>Recently Watch</p>
                </NavLink>
              </div>
              <div className="nav__split"></div>
            </>
          ) : null}
          <h2>general</h2>
          <div className="navlink__container">
            {currentUser ? (
              <>
                <p className="user__email">{currentUser.email}</p>
                <p className="signout__btn" onClick={showPromiseConfirm}>
                  Sign out
                </p>
              </>
            ) : (
              <NavLink
                onClick={onMenuClicked}
                to="/auth"
                className="navlink__item"
              >
                <p>Login</p>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

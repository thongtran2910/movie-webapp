import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/selectors/userSelector";
import { ReactComponent as UserIcon } from "../../assets/user-icon.svg";
import "./userNav.scss";
import Sidebar from "../sidebar/SidebarComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import mainLogo from "../../assets/logo.png";

const UserNav = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  const onMenuClicked = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  const handleNavigate = () => {
    navigate("/auth");
  };

  const onLogoClicked = () => {
    navigate("/");
  };

  return (
    <>
      <div className="nav__container">
        <div onClick={onLogoClicked} className="nav__logo">
          <img src={mainLogo} alt="logo" />
        </div>
        <div className="nav__user">
          {currentUser ? (
            <>
              <span>{currentUser.email}</span>
            </>
          ) : (
            <UserIcon onClick={handleNavigate} />
          )}
        </div>
      </div>
      <div className="nav__menu">
        <div
          className={
            isSidebarActive ? "nav__menu-icon-active" : "nav__menu-icon"
          }
          onClick={onMenuClicked}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Sidebar
          onMenuClicked={onMenuClicked}
          isSidebarActive={isSidebarActive}
        />
      </div>
    </>
  );
};

export default UserNav;

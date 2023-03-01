import "./navigate.scss";

const Navigate = () => {
  return (
    <div className="nav__container">
      <div className="nav__menu">
        <p className="nav__tab">Movies</p>
        <p className="nav__tab">TV Shows</p>
      </div>
      <div className="nav__icon">
        <p className="nav__usertab">menu</p>
      </div>
    </div>
  );
};

export default Navigate;

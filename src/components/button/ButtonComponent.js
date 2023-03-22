import "./button.scss";

const Button = (props) => {
  return (
    <button
      className="btn"
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  );
};

export default Button;

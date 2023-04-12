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

export const InvertedButton = (props) => {
  return (
    <button
      className="btn__inverted"
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  );
};

export default Button;

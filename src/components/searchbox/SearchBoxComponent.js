import "./searchbox.scss";

const SearchBox = (props) => {
  return (
    <input
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange ? (e) => props.onChange(e) : null}
    />
  );
};

export default SearchBox;

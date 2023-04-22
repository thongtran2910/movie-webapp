import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import Input from "../input/InputComponent";

const Searchbox = (props) => {
  const enterEvent = (e) => {
    if (e.key === "Enter") {
      //   props.onClick();
    }
  };

  return (
    <>
      <SearchIcon onClick={props.onClick ? () => props.onClick() : null} />
      <Input
        type="text"
        placeholder="Search"
        value={props.input}
        onChange={props.handleChange}
        onKeyDown={enterEvent}
      />
    </>
  );
};

export default Searchbox;

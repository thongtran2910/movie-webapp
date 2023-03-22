import { useParams } from "react-router-dom";

const DetailPage = () => {
  let { id } = useParams();
  return <div>{id}</div>;
};

export default DetailPage;

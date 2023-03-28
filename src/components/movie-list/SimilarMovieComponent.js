import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import tmdbApi from "../../api/tmdbApi";
import { setMovieSimilarAction } from "../../redux/actions/movieAction";
import { selectMovieSimilar } from "../../redux/selectors/movieSelector";
import Slider from "../slider/SliderComponent";

const SimilarMovie = ({ category, id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSimilarMovie = async () => {
      const res = await tmdbApi.getSimilar(category, id);
      console.log(res);
      dispatch(setMovieSimilarAction(res.results));
    };
    fetchSimilarMovie();
  }, [dispatch, category, id]);

  const similarList = useSelector(selectMovieSimilar);
  return (
    <>
      <Slider category={category} list={similarList} />
    </>
  );
};

export default SimilarMovie;

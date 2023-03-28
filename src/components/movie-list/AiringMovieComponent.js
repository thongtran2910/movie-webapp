import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import tmdbApi from "../../api/tmdbApi";
import { setMovieAiringAction } from "../../redux/actions/movieAction";
import { selectMovieAiring } from "../../redux/selectors/movieSelector";
import Slider from "../slider/SliderComponent";

const AiringMovie = ({ category, type }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAiringTv = async () => {
      const params = {};
      const res = await tmdbApi.getMoviesList(category, type, { params });
      dispatch(setMovieAiringAction(res.results));
    };
    fetchAiringTv();
  }, [dispatch, category, type]);

  const airingList = useSelector(selectMovieAiring);
  return (
    <>
      <Slider category={category} list={airingList} />
    </>
  );
};

export default AiringMovie;

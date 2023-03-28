import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMovieTopRated } from "../../redux/selectors/movieSelector";
import tmdbApi from "../../api/tmdbApi";
import { setMovieTopRatedAction } from "../../redux/actions/movieAction";
import Slider from "../slider/SliderComponent";

const TopRatedMovie = ({ category, type }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTopRatedMovie = async () => {
      const params = {};
      const res = await tmdbApi.getMoviesList(category, type, { params });
      dispatch(setMovieTopRatedAction(res.results));
    };
    fetchTopRatedMovie();
  }, [dispatch, category, type]);

  const topRatedList = useSelector(selectMovieTopRated);
  return (
    <>
      <Slider category={category} list={topRatedList} />
    </>
  );
};

export default TopRatedMovie;

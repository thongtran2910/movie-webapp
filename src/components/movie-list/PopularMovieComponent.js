import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMoviePopular } from "../../redux/selectors/movieSelector";
import tmdbApi from "../../api/tmdbApi";
import { setMoviePopularAction } from "../../redux/actions/movieAction";
import Slider from "../slider/SliderComponent";

const PopularMovie = ({ category, type }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    let fetchPopularMovie = async () => {
      const params = {};
      let res = await tmdbApi.getMoviesList(category, type, { params });
      dispatch(setMoviePopularAction(res.results));
    };
    fetchPopularMovie();
  }, [dispatch, category, type]);

  const popularList = useSelector(selectMoviePopular);
  return (
    <>
      <Slider category={category} list={popularList} />
    </>
  );
};

export default PopularMovie;

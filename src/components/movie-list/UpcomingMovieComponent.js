import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMovieUpcoming } from "../../redux/selectors/movieSelector";
import tmdbApi from "../../api/tmdbApi";
import { setMovieUpcomingAction } from "../../redux/actions/movieAction";
import Slider from "../slider/SliderComponent";

const UpcomingMovie = ({ category, type }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUpcomingMovie = async () => {
      const params = {};
      const res = await tmdbApi.getMoviesList(category, type, { params });
      dispatch(setMovieUpcomingAction(res.results));
    };
    fetchUpcomingMovie();
  }, [dispatch, category, type]);

  const upcomingList = useSelector(selectMovieUpcoming);
  return (
    <>
      <Slider category={category} list={upcomingList} />
    </>
  );
};

export default UpcomingMovie;

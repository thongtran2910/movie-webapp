import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Lottie from "lottie-react";
import tmdbApi from "../../api/tmdbApi";
import Button from "../button/ButtonComponent";
import Card from "../card/CardComponent";
import Searchbox from "../searchbox/SearchboxComponent";
import notFoundAnimation from "../../assets/not-found.json";
import "./movieGrid.scss";

const MovieGrid = ({ category }) => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [input, setInput] = useState("");
  const [notfound, setNotfound] = useState(false);
  const [keyword, setKeyword] = useSearchParams();

  const value = keyword.get("query" || "");

  const handleChange = (e) => setInput(e.target.value);

  useEffect(() => {
    const fetchMovieList = async () => {
      const params = {};
      const res = await tmdbApi.getDiscoverList(category, { params });
      setMovieList(res.results);
      setTotalPage(res.total_pages);
    };
    fetchMovieList();
  }, [category]);

  const loadMoreHandler = async () => {
    if (value === null) {
      const fetchNextPage = async () => {
        const params = {
          page: page + 1,
        };
        const res = await tmdbApi.getDiscoverList(category, { params });
        setMovieList([...movieList, ...res.results]);
      };
      fetchNextPage();
    } else {
      const fetchSearchNextPage = async () => {
        const params = {
          query: input,
          page: page + 1,
        };
        const res = await tmdbApi.getMovieSearch({ params });
        setMovieList([...movieList, ...res.results]);
      };
      fetchSearchNextPage();
    }
    setPage(page + 1);
  };

  const searchHandler = async () => {
    const params = {
      query: input,
    };
    const res = await tmdbApi.getMovieSearch({ params });
    setMovieList(res.results);
    if (res.total_results === 0) {
      setNotfound(true);
    }
    let search;
    if (input) {
      search = {
        query: input,
      };
    } else {
      search = undefined;
    }
    setKeyword(search, { replace: true });
  };

  return (
    <>
      <div className="movie__search">
        <Searchbox
          onClick={searchHandler}
          input={input}
          handleChange={handleChange}
        />
      </div>
      <div className="movie__grid">
        {movieList.map((movie, index) => {
          return <Card item={movie} key={index} category={category} />;
        })}
      </div>
      {notfound ? (
        <div className="movie__notfound">
          <h3>No result</h3>
          <Lottie animationData={notFoundAnimation} loop={true} />
        </div>
      ) : null}
      {movieList.length > 10 && page < totalPage ? (
        <Button onClick={loadMoreHandler}>Load more</Button>
      ) : null}
    </>
  );
};

export default MovieGrid;

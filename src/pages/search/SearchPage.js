import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Lottie from "lottie-react";
import tmdbApi, { category } from "../../api/tmdbApi";
import Card from "../../components/card/CardComponent";
import Searchbox from "../../components/searchbox/SearchboxComponent";
import "./searchPage.scss";
import notFoundAnimation from "../../assets/not-found.json";
import Button from "../../components/button/ButtonComponent";

const SearchPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [keyword, setKeyword] = useSearchParams();
  const [input, setInput] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [notfound, setNotfound] = useState(false);

  const value = keyword.get("query" || "");

  const handleChange = (e) => setInput(e.target.value);

  const searchHandler = async () => {
    const params = {
      query: input,
    };
    const res = await tmdbApi.getMultiSearch({ params });
    setMovieList(res.results);
    setTotalPage(res.total_pages);
    setTotalResults(res.total_results);
    if (res.total_results === 0) {
      setNotfound(true);
    } else {
      setNotfound(false);
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

  const loadMoreHandler = async () => {
    const params = {
      page: page + 1,
      query: value,
    };
    const res = await tmdbApi.getMultiSearch({ params });
    setMovieList([...movieList, ...res.results]);
    setPage(page + 1);
  };

  return (
    <div className="search__container">
      <h2>Find your favorite movies, TV shows, people and more..</h2>
      <div className="searchbox">
        <Searchbox
          onClick={searchHandler}
          input={input}
          handleChange={handleChange}
        />
      </div>
      {totalResults !== 0 ? (
        <p className="total__results">{`Search results for "${value}" (${totalResults} found)`}</p>
      ) : null}
      <div className="moviesearch__grid">
        {movieList.length > 0
          ? movieList.map((movie, index) => {
              return (
                <Card
                  category={category.movie || category.tv}
                  item={movie}
                  key={index}
                />
              );
            })
          : null}
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
    </div>
  );
};

export default SearchPage;

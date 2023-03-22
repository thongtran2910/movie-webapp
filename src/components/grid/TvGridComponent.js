import { useEffect, useState } from "react";
import tmdbApi, { category } from "../../api/tmdbApi";
import Button from "../button/ButtonComponent";
import Card from "../card/CardComponent";
import "./movieGrid.scss";

const MovieGrid = () => {
  const [tvList, setTvList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const fetchMovieList = async () => {
      const params = {};
      const res = await tmdbApi.getDiscoverList(category.tv, { params });
      setTvList(res.results);
      setTotalPage(res.total_pages);
    };
    fetchMovieList();
  }, []);

  const loadMoreHandler = async () => {
    const fetchNextpage = async () => {
      const params = { page: page + 1 };
      const res = await tmdbApi.getDiscoverList(category.tv, { params });
      setTvList([...tvList, ...res.results]);
    };
    fetchNextpage();
    setPage(page + 1);
  };

  return (
    <>
      <div className="movie__grid">
        {tvList.map((movie, index) => {
          return <Card item={movie} key={index} />;
        })}
      </div>
      {page < totalPage ? (
        <Button onClick={loadMoreHandler}>Load more</Button>
      ) : null}
    </>
  );
};
export default MovieGrid;

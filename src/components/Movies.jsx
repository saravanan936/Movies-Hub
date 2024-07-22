import React, { useContext, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesMiddleware } from "../redux/middleware/moviesMiddleware";
import { MovieContext } from "../context/MovieContext";

const Movies = () => {
  const [pageNo, setPageNo] = useState(1);
  const { movies, loading, error } = useSelector((store) => store.movieState);
  const { watchlist, setWatchlist, addToWatchlist, removeFromWatchList } =
    useContext(MovieContext);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMoviesMiddleware(pageNo));
  }, [pageNo]);

  useEffect(() => {
    const watchlist = localStorage.getItem("watchlist");
    if (watchlist) {
      setWatchlist(JSON.parse(watchlist));
    }
  }, []);

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  const handlePrevious = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong...</h1>;
  }

  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
      </div>
      <div className="flex justify-evenly flex-wrap gap-8">
        {movies &&
          movies.map((movie) => {
            return (
              <MovieCard
                key={movie.id} // Added key for each MovieCard
                movie={movie}
                addToWatchlist={addToWatchlist}
                removeFromWatchList={removeFromWatchList}
                watchlist={watchlist}
              />
            );
          })}
      </div>
      <Pagination
        pageNo={pageNo}
        nextPageFn={handleNext}
        previousPageFn={handlePrevious}
      />
    </div>
  );
};

export default Movies;

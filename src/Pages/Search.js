import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MoviesDetail from "../components/MoviesDetail/MoviesDetail";
import SearchMovies from "../components/SearchMovies/SearchMovies";

function Search() {
  const { MovieDetail } = useSelector((state) => state.infoMovies);
  const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);
  useEffect(() => {
    setIsShowMovieDetail(MovieDetail ? true : false);
  }, [MovieDetail]);

  return (
    <div>
      <SearchMovies />
      <MoviesDetail movie={MovieDetail} showModal={isShowMovieDetail} />
    </div>
  );
}

export default Search;

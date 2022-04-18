import "./SearchMovies.scss";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getSearchMovies, setMovieDetail } from "../store/actions";

const useQuery = () => new URLSearchParams(useLocation().search);

function SearchMovies(props) {
  const dispatch = useDispatch();
  const { SearchMovies } = useSelector((state) => state.infoMovies);
  const keyword = useQuery().get("keywords");

  useEffect(() => {
    if (keyword) {
      dispatch(getSearchMovies(keyword));
    }
  }, [keyword, dispatch]);

  const handleSetMovie = (movie) => {
    dispatch(setMovieDetail(movie));
  };

  return (
    <div className="searchPane">
      {SearchMovies && SearchMovies.length > 0 ? (
        <div className="searchContent">
          {SearchMovies.map((movie, index) => {
            if (movie.backdrop_path !== null && movie.media_type !== "person") {
              const imageUrl = `http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
              return (
                <div
                  className="movieItem"
                  key={index}
                  onClick={() => handleSetMovie(movie)}
                >
                  <img src={imageUrl} alt="" />
                  <span>{movie.name || movie.title}</span>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <div className="notFound">
          <h3>Your search for "keyword" did not have any matches.</h3>
        </div>
      )}
    </div>
  );
}

export default SearchMovies;

import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { SmoothHorizontalScrolling } from "../../utils/index";
import { setMovieDetail } from "../store/actions";
import "./MovieRow.scss";

function MovieRow(props) {
  const { movies, title, isNetflix } = props;
  const sliderRef = useRef();
  const movieRef = useRef();

  const handelScrollRight = () => {
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (sliderRef.current.scrollLeft < maxScrollLeft) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        movieRef.current.clientWidth * 3,
        sliderRef.current.scrollLeft
      );
    }
  };

  const handelScrollLeft = () => {
    if (sliderRef.current.scrollLeft > 0) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        -movieRef.current.clientWidth * 3,
        sliderRef.current.scrollLeft
      );
    }
  };

  const dispatch = useDispatch();

  const handleSetMovie = (movie) => {
    // console.log(movie);
    dispatch(setMovieDetail(movie));
  };

  return (
    <div className="movieContainer">
      <h1 className="movieHeading">{title}</h1>
      <div
        className="movieSlider"
        ref={sliderRef}
        // style={
        //   movies && movies.lenght > 0
        //     ? { gridTemplateColumns: `repeat(${movies.length},300px)` }
        //     : {}
        // }
      >
        {movies &&
          movies.length > 0 &&
          movies.map((movie, index) => {
            if (movie.poster_path && movie.backdrop_path !== null) {
              let imageUrl = isNetflix
                ? `http://image.tmdb.org/t/p/original/${movie.poster_path}`
                : `http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
              return (
                <div
                  key={index}
                  className="movieItem"
                  ref={movieRef}
                  onClick={() => handleSetMovie(movie)}
                >
                  <img src={imageUrl} alt="" />
                  <div className="movieName">{movie.name || movie.title}</div>
                </div>
              );
            }
          })}
      </div>

      <div className="btnLeft" onClick={handelScrollLeft}>
        <FiChevronLeft />
      </div>
      <div className="btnRight" onClick={handelScrollRight}>
        <FiChevronRight />
      </div>
    </div>
  );
}

export default MovieRow;

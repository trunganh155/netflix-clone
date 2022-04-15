import { useDispatch } from "react-redux";
import { setMovieDetail } from "../store/actions";
import "./MoviesDetail.scss";
import moment from "moment";

function MoviesDetail(props) {
  const { movie, showModal } = props;

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(setMovieDetail(null));
  };

  return (
    <div>
      <div className={`modal ${showModal ? "showModal" : "hideModal"}`}>
        <div
          className={`modal__close ${showModal ? "showModal" : "hideModal"}`}
          onClick={handleCloseModal}
        ></div>
        <div
          className={`modal__content  ${showModal ? "showModal" : "hideModal"}`}
          style={
            movie
              ? {
                  backgroundImage: `url("http://image.tmdb.org/t/p/w500/${movie.backdrop_path}")`,
                  backgroundSize: "cover",
                  // backgroundPosition: "center",
                }
              : {}
          }
        >
          <div className="modal__content__background">
            <div className="modal__content__title">
              {movie && (movie.name || movie.title)}
            </div>
            <div className="modal__content__detail">
              <p className="rating">Rating: {movie && movie.vote_average}</p>
              <p className="release">
                Release:{" "}
                {movie &&
                  (moment(movie.release_date).format("DD/MM/YYYY") ||
                    moment(movie.first_air_date).format("DD/MM/YYYY"))}
              </p>
              <p className="overview">{movie && movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesDetail;

import { useDispatch } from "react-redux";
import { setMovieDetail } from "../store/actions";
import { CgClose } from "react-icons/cg";
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
        >
          <div className="modal__content__background">
            <img
              src={
                movie
                  ? `http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                  : {}
              }
              alt=""
            />
            <CgClose className="btnClose" onClick={handleCloseModal} />
          </div>

          <div className="modal__content__detail">
            <div className="left">
              <span className="title">
                {movie && (movie.name || movie.title)}
              </span>
              <span className="quality">HD</span>
              <p className="overview">{movie && movie.overview}</p>
            </div>

            <div className="right">
              <span className="rating">
                {movie && movie.vote_average * 10}% Match
              </span>
              <span className="release">
                {" "}
                {movie &&
                  (moment(movie.release_date).format("DD-MM-YYYY") ||
                    moment(movie.first_air_date).format("DD-MM-YYYY"))}
              </span>
              <p>
                <span style={{ color: "#726a72" }}>Total vote:</span>{" "}
                {movie && movie.vote_count}
              </p>
              <p>
                <span style={{ color: "#726a72" }}>Original language:</span>{" "}
                {movie && movie.original_language}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesDetail;

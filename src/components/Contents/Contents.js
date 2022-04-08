import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNetflixOriginals } from "../store/actions";
import MovieRow from "./MovieRow";
import * as ACTIONS from "../store/actions";

function Contents() {
  const dispatch = useDispatch();
  const {
    NetflixOriginals,
    TrendingMovies,
    UpcomingMovies,
    NowPlayingMovies,
    TopRateMovies,
  } = useSelector((state) => state.infoMovies);

  useEffect(() => {
    dispatch(ACTIONS.getNetflixOriginals());
    dispatch(ACTIONS.getNowPlayingMovies());
    dispatch(ACTIONS.getTopRateMovies());
    dispatch(ACTIONS.getUpcomingMovies());
    dispatch(ACTIONS.getTrendingMovies());
  }, [dispatch]);

  return (
    <div>
      <MovieRow
        movies={NetflixOriginals}
        title="Netflix Originals"
        isNetflix={true}
      />
      <MovieRow movies={NowPlayingMovies} title="Now Playing Movies" />
      <MovieRow movies={UpcomingMovies} title="Upcoming Movies" />
      <MovieRow movies={TrendingMovies} title="Trending Movies" />
      <MovieRow movies={TopRateMovies} title="Top Rate Movies" />
    </div>
  );
}

export default Contents;

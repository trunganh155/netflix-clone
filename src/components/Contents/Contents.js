import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNetflixOriginals } from "../store/actions";
import MovieRow from "./MovieRow";
import * as ACTIONS from "../store/actions";

function Contents() {
  const dispatch = useDispatch();
  const {
    NetflixOriginals,
    NowPlayingMovies,
    TopRateMovies,
    ActionMovies,
    TrendingMovies,
  } = useSelector((state) => state.infoMovies);

  useEffect(() => {
    dispatch(ACTIONS.getNetflixOriginals());
    dispatch(ACTIONS.getNowPlayingMovies());
    dispatch(ACTIONS.getTopRateMovies());
    dispatch(ACTIONS.getActionMovies());
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
      <MovieRow movies={TrendingMovies} title="Trending Movies" />
      <MovieRow movies={TopRateMovies} title="Top Rate Movies" />
      <MovieRow movies={ActionMovies} title="Action Movies" />
    </div>
  );
}

export default Contents;

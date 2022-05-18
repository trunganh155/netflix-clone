import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as ACTIONS from "../store/actions";
import MovieRow from "./MovieRow";  

function Contents() {
  const dispatch = useDispatch();
  const {
    NetflixOriginals,
    TrendingMovies,
    UpcomingMovies,
    NowPlayingMovies,
    TopRateMovies,
    ActionMovies,
    ComedyMovies,
  } = useSelector((state) => state.infoMovies);

  useEffect(() => {
    dispatch(ACTIONS.getNetflixOriginals());
    dispatch(ACTIONS.getNowPlayingMovies());
    dispatch(ACTIONS.getTopRateMovies());
    dispatch(ACTIONS.getUpcomingMovies());
    dispatch(ACTIONS.getTrendingMovies());
    dispatch(ACTIONS.getActionMovies());
    dispatch(ACTIONS.getComedyMovies());
  }, [dispatch]);

  return (
    <div>
      <MovieRow movies={ActionMovies} title="Action Movies" isNetflix={true} />
      <MovieRow
        movies={NetflixOriginals}
        title="Netflix Originals"
        isNetflix={true}
      />
      <MovieRow movies={ComedyMovies} title="Comedy Movies" />
      <MovieRow movies={NowPlayingMovies} title="Now Playing Movies" />
      <MovieRow movies={UpcomingMovies} title="Upcoming Movies" />
      <MovieRow movies={TrendingMovies} title="Trending Movies" />
      <MovieRow movies={TopRateMovies} title="Top Rate Movies" />
    </div>
  );
}

export default Contents;

import * as Types from "../types";

const reducerMoviesInitialState = {
  NetflixOriginals: null,
  TrendingMovies: null,
  NowPlayingMovies: null,
  UpcomingMovies: null,
  TopRateMovies: null,
};

const reducerMovies = (state = reducerMoviesInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.GET_NETFLIX_ORIGINALS:
      return { ...state, NetflixOriginals: payload };

    case Types.GET_TRENDING_MOVIES:
      return { ...state, TrendingMovies: payload };

    case Types.GET_NOWPLAYING_MOVIES:
      return { ...state, NowPlayingMovies: payload };

    case Types.GET_UPCOMING_MOVIES:
      return { ...state, UpcomingMovies: payload };
      console.log(payload);

    case Types.GET_TOPRATE_MOVIES:
      return { ...state, TopRateMovies: payload };

    default:
      return state;
  }
};

export default reducerMovies;

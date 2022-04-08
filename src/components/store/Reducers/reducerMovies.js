import * as Types from "../types";

const reducerMoviesInitialState = {
  NetflixOriginals: null,
  TrendingMovies: null,
  NowPlayingMovies: null,
  ActionMovies: null,
  TopRateMovies: null,
};

const reducerMovies = (state = reducerMoviesInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.GET_NETFLIX_ORIGINALS:
      return { ...state, NetflixOriginals: payload };

    case Types.GET_TRENDING_MOVIES:
      // console.log(payload);
      return { ...state, TrendingMovies: payload };

    case Types.GET_NOWPLAYING_MOVIES:
      return { ...state, NowPlayingMovies: payload };

    case Types.GET_ACTION_MOVIES:
      return { ...state, ActionMovies: payload };

    case Types.GET_TOPRATE_MOVIES:
      return { ...state, TopRateMovies: payload };

    default:
      return state;
  }
};

export default reducerMovies;

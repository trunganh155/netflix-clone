import * as Types from "../types";

const reducerMoviesInitialState = {
  NetflixOriginals: null,
  TrendingMovies: null,
  NowPlayingMovies: null,
  UpcomingMovies: null,
  TopRateMovies: null,
  MovieDetail: null,
  SearchMovies: null,
  ActionMovies: null,
  ComedyMovies: null,
};

const reducerMovies = (state = reducerMoviesInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.GET_NETFLIX_ORIGINALS:
      console.log(payload);
      return { ...state, NetflixOriginals: payload };

    case Types.GET_TRENDING_MOVIES:
      return { ...state, TrendingMovies: payload };

    case Types.GET_NOWPLAYING_MOVIES:
      return { ...state, NowPlayingMovies: payload };

    case Types.GET_UPCOMING_MOVIES:
      return { ...state, UpcomingMovies: payload };

    case Types.GET_TOPRATE_MOVIES:
      return { ...state, TopRateMovies: payload };

    case Types.SET_MOVIE_DETAIL:
      return { ...state, MovieDetail: payload };

    case Types.GET_SEARCH_MOVIES:
      return { ...state, SearchMovies: payload };

    case Types.GET_ACTION_MOVIES:
      return { ...state, ActionMovies: payload };

    case Types.GET_COMEDY_MOVIES:
      return { ...state, ComedyMovies: payload };

    default:
      return state;
  }
};

export default reducerMovies;

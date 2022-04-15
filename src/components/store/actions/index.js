import axios from "axios";
import * as Types from "../types";

const API_KEY = "ba892525f1584a97a3116207adc90401";
const BASE_URL = "https://api.themoviedb.org/3";

export const getNetflixOriginals = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_network=213`
    );
    dispatch({
      type: Types.GET_NETFLIX_ORIGINALS,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Netflix API error", error);
  }
};

export const getTrendingMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-us`
    );
    dispatch({ type: Types.GET_TRENDING_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get Trending Movies API error", error);
  }
};

export const getTopRateMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-us`
    );
    dispatch({ type: Types.GET_TOPRATE_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get Top Rated Movies API error", error);
  }
};

export const getUpcomingMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-us`
    );
    dispatch({ type: Types.GET_UPCOMING_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get Upcoming Movies API error", error);
  }
};

export const getNowPlayingMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US`
    );
    dispatch({
      type: Types.GET_NOWPLAYING_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Now Playing Movies API error", error);
  }
};

export const setMovieDetail = (movie) => (dispatch) => {
  try {
    dispatch({
      type: Types.SET_MOVIE_DETAIL,
      payload: movie,
    });
  } catch (error) {
    console.log("Set Movie Detail error", error);
  }
};

export const getSearchMovies = (keyword) => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keyword}`
    );
    dispatch({
      type: Types.GET_SEARCH_MOVIES,
      payload: result.data.results,
    });
    console.log(result.data.results);
  } catch (error) {
    console.log("Get Search Movie error", error);
  }
};

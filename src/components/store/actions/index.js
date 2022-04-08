import axios from "axios";
import {
  GET_NETFLIX_ORIGINALS,
  GET_TOPRATE_MOVIES,
  GET_TRENDING_MOVIES,
} from "../types";

const API_KEY = "ba892525f1584a97a3116207adc90401";
const BASE_URL = "https://api.themoviedb.org/3";

export const getNetflixOriginals = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_network=213`
    );
    dispatch({ type: GET_NETFLIX_ORIGINALS, payload: result.data.results });
  } catch (error) {
    console.log("Get Netflix API error", error);
  }
};

export const getTrendingMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-us`
    );
    dispatch({ type: GET_TRENDING_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get Trending Movies API error", error);
  }
};

export const getTopRateMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-us`
    );
    dispatch({ type: GET_TOPRATE_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get Top Rated Movies API error", error);
  }
};

export const getActionMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
    );
    dispatch({ type: GET_TRENDING_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get Action Movies API error", error);
  }
};

export const getNowPlayingMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/now?api_key=${API_KEY}&language=en-us`
    );
    dispatch({ type: GET_TRENDING_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("Get Now Playing Movies API error", error);
  }
};

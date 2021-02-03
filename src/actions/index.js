import axios from "axios";

export const START_FETCHING = "START_FETCHING";
export const MOVIE_RETRIEVED = "MOVIE_RETRIEVED";
export const FETCH_FAILED = "FETCH_FAILED";
export const CLEAR_ERROR = "CLEAR_ERROR";

//--Actions--//
export const getMovie = () => (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
  dispatch({ type: START_FETCHING });

  console.log("Calling axios");
  axios.get("https://ghibliapi.herokuapp.com/films/").then((res) => {
    console.log(res, "res");
  });
};

import axios from "axios";

export const START_FETCHING = "START_FETCHING";
export const MOVIE_RETRIEVED = "MOVIE_RETRIEVED";
export const FETCH_FAILED = "FETCH_FAILED";
export const CLEAR_ERROR = "CLEAR_ERROR";

//--Actions--//

// function outer() {
//   function inner(dispatch) {
//  axios call bla bla
//   }
//   return inner
// }

// const clearError = ()=>(dispatch)=>{
//   dispatch({ type: CLEAR_ERROR });
// }

export const getMovie = () => (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
  dispatch({ type: START_FETCHING });

  console.log("Calling axios");
  //Acyn logic
  axios
    .get("https://ghibliapi.herokuapp.com/films/")
    .then((res) => {
      console.log(res.data, "res.data");
      dispatch({ type: MOVIE_RETRIEVED, payload: res.data });
    })
    .catch((err) => {
      console.error("error getting a movie title from api: ", err);
      dispatch({ type: FETCH_FAILED, payload: err.message });
    });
};

//First grab and store all the data.
//The component will hold the title,

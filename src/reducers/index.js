import {
  MOVIE_RETRIEVED,
  START_FETCHING,
  FETCH_FAILED,
  CLEAR_ERROR,
} from "../actions";

const initialState = {
  title: null,
  description: null,
  movie: null,
  isFetching: false,
  error: `Nope, can't find what you were looking for`,
};
//if the action is coming in correctly
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ERROR: {
      return {
        ...state,
        error: "",
      };
    }
    case START_FETCHING: {
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    }
    case MOVIE_RETRIEVED: {
      return {
        ...state,
        movie: action.payload,
        //action is movie
        isFetching: false,
      };
    }
    case FETCH_FAILED: {
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    }
    default:
      return state;
  }
};

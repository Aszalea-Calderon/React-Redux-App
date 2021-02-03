import {
  MOVIE_RETRIEVED,
  START_FETCHING,
  FETCH_FAILED,
  CLEAR_ERROR,
} from "../actions";

const initialState = {
  movieName: null,
  description: null,
  isFetching: false,
  error: `Nope, can't find what you were looking for`,
};

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
        quote: action.payload,
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

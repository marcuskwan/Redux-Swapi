/* we need our action types here*/ "../actions";
import { IS_FETCHING, FETCHING_SUCCESS, FETCHING_FAILED } from "../actions";

const initialState = {
  // Array characters, Boolean fetching, null error.
  characters: [],
  isFetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case IS_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isFetching: false,
        error: null
      };
    case FETCHING_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

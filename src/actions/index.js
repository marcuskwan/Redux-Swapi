// we'll need axios
import axios from "axios";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const IS_FETCHING = "IS_FETCHING";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILED = "FETCHING_FAILED";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controls over our thunk-based action creator

export const getData = () => dispatch => {
  dispatch({ type: IS_FETCHING });
  axios
    .get(`https://swapi.co/api/people/`)
    .then(response => {
      console.log(response);
      dispatch({ type: FETCHING_SUCCESS, payload: response.data.results });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: FETCHING_FAILED, payload: error });
    });
};

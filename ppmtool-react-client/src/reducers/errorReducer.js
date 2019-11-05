/**
 * first import action type
 */
import { GET_ERRORS } from "../actions/types";

/**
 * errors always have an initial state
 */
const initialState = {};

/**
 * dispatch function to get the errors in redux
 * @param {*} state
 * @param {*} action
 */
export default function(state = initialState, action) {
  //whenever dispatch we have the type to know what to do
  switch (action.type) {
    //if there are errors
    case GET_ERRORS:
      //return the errors to the action
      //check the index.js file in reducers errors: errorReducer for how to access this
      return action.payload;
    default:
      //the default state is an empty object
      //makes sense for the error object when no errors are present
      return state;
  }
}

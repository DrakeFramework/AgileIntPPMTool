import { GET_PROJECTS } from "../actions/types";

//an array of projects and a single project in the def of the state
const initialState = {
  projects: [],
  project: {}
};

// this works the same as the error reducer (boilerplate)
export default function(state = initialState, action) {
  switch (action.type) {
    //when called using the GET_PROJECTS type defined in types.js
    case GET_PROJECTS:
      //an array of states
      return {
        ...state,
        projects: action.payload
      };
    default:
      return state;
  }
}

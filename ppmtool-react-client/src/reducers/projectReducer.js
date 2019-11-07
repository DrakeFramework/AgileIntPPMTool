import { GET_PROJECTS, GET_PROJECT, DELETE_PROJECT } from "../actions/types";

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
    //return a single project
    case GET_PROJECT:
      return {
        ...state,
        project: action.payload
      };
    //Return a fresh list of projects
    //rather than returning the response from the server we can just return the updated state
    case DELETE_PROJECT:
      return {
        ...state,
        //filter out the object where id === payload passed from the action
        projects: state.projects.filter(
          project => project.projectIdentifier !== action.payload
        )
      };
    default:
      return state;
  }
}

import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectReducer from "./projectReducer";

//combineReducers is the meeting place for all of the reducers
//includes rootReducer and in the {} any custom reducers
export default combineReducers({
  //this is what goes into the store
  errors: errorReducer,
  //the project state also here
  project: projectReducer
});

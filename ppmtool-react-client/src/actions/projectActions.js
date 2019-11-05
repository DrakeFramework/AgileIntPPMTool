/**
 * library used to talk to the back end
 */
import axios from "axios";
/**
 * import the types to be used
 */
import { GET_ERRORS } from "./types";
import { connect } from "http";
import AddProject from "../components/Project/AddProject";

/**
 * create var to hold the project es6 constant object def
 * async makes the dispatch asynchronous and when used with await it always returns a promise (js will wait until the promise is settled)
 *
 * returns a natural function
 */
export const createProject = (project, history) => async dispatch => {
  // i will stick with his axios for now to learn new stuff but I think i still prefer jquery
  // await $.postJSON(
  //   "http://localhost:8080/api/project",
  //   project,
  //   function(data) {
  //      history.push("/dashboard");
  //   },
  //   function(xhr, textStatus, errorThrown) {
  //      dispatch({
  //        type: GET_ERRORS,
  //        payload: JSON.parse(xhr.responseText)
  //      });
  //   }
  // );

  //this is the axios way of doing it
  try {
    //res is server response
    //take the history parameter from the component and push the dashboard to see the new render
    //await makes it a promise
    const res = await axios.post("http://localhost:8080/api/project", project);
    history.push("/dashboard");
  } catch (err) {
    //if there is an error
    //dispatch to GET_ERRORS reducer
    //send with the response data to extract onto the form
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

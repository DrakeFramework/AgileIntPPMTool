import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
/**
 * the rootReducer can be found in the /reducers/index.js file
 */
import rootReducer from "./reducers";

/**
 * set up the initial state for the application
 */
const initialState = {};

/**
 * the redux thunk middleware is wired in for setting displacer to store
 */
const middleware = [thunk];

/**
 * hold the store
 */
let store;

/**
 * the setup is specific for chrome and then adjusted for cross compatability
 *
 * the redux devTools plugin has a link to the github
 * https://github.com/zalmoxisus/redux-devtools-extension#usage
 * in section 1.1 there is a basic use guide
 *
 * the line that follows is added as a secondary parameter after the middleware to the enhancer parameter of the createStore method
 * window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 */
if (window.navigator.userAgent.includes("Chrome")) {
  //takes a root reducer, the state of the application, and the enhancer - middleware
  store = createStore(
    //./reducers/index.js
    rootReducer,
    //state object open definition above
    initialState,
    //the enhancer composition
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  // when it's not "chrome" we don't have the chrome DevTools Extension
  store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );
}

/**
 * with this in place the store exists
 */
export default store;

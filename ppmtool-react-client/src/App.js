import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Layout/Header";
import Dashboard from "./components/Dashboard";
//note that it does not start with package identifier
//this is how packages can be imported from npm_modules
import "bootstrap/dist/css/bootstrap.min.css";
//browserrouter
//this is what we need to bring in for react routing
//it has two aliases Router and Route  Router is the app.js wrapping and individual routes will be created for each component call
//note that the router has become the outer wrapping of the app div
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProject from "./components/Project/AddProject";
import UpdateProject from "./components/Project/UpdateProject";

/**
 *the provider allows us to wire up react with redux
 *note that provider has become the outer wrapping of the app div
 */
import { Provider } from "react-redux";
/**
 * bring in store.js defined in the src folder  configuration of src is in this file and now the chrome DevTools will display it
 *
 * this error will appear until reducers are defined
 * Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.
 */
import store from "./store";
//jquery
import $ from "jquery";

//this is a template method i like to use for my jquery ajax calls
$.postJSON = function(url, data, callback, err) {
  return $.ajax({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    type: "POST",
    url: url,
    data: JSON.stringify(data),
    dataType: "json",
    success: callback,
    error: err
  });
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          {/*<Dashboard /> this allows you to set a path to the add project object
                           use the exact path with route instead to have hard definitions of the path and not wildcard pathing
              the route component is the element and the props can pass with the state*/}
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addProject" component={AddProject} />
          {/* the :id allows param named id to be passed to the route */}
          <Route exact path="/updateProject/:id" component={UpdateProject} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;

// *** auto generated removed ***
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

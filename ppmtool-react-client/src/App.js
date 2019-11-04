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
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProject from "./components/Project/AddProject";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/*<Dashboard />
         this allows you to set a path to the add project object*/}
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/addProject" component={AddProject} />
      </div>
    </Router>
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

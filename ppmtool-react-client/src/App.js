import React from "react";
//import logo from "./logo.svg";
import "./App.css";
/* note the import of dashboard comes from the component in the current directory */
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;

/*
// template code is removed from app.js function app()
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload. (edited)
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
*/

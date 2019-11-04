import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Layout/Header";
import Dashboard from "./components/Dashboard";
//note that it does not start with package identifier
//this is how packages can be imported from npm_modules
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
    </div>
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

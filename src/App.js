import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./Components/Table";
import ReadingLevel from "./Components/ReadingLevel";
import "./Components/index.css";
import Todolist from "./Components/Todolist";

// const destination = document.querySelector("#container");

// ReactDOM.render(
//   <div className="container">
//     {/* <div className="mainorigin">
//       <p>Hello everyone!! Welcome to my page to create to do list. :)</p>
//     </div> */}
//     {/* <Todolist /> */}
//   </div>,
//   destination
// );

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Myanmar Extensive Reading Programme (M.E.R.P)
          </h1>
          <h2>Students Scores and Reading Level Inventory</h2>
        </header>
        <p className="App-intro">
          {/* <Table /> */}
          {/* <Todolist /> */}
          <ReadingLevel />
        </p>
      </div>
    );
  }
}

export default App;

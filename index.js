import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Todolist from "./Todolist";

const destination = document.querySelector("#container");

ReactDOM.render(
  <div className="container">
    {/* <div className="mainorigin">
      <p>Hello everyone!! Welcome to my page to create to do list. :)</p>
    </div> */}
    <Todolist />
  </div>,
  destination
);

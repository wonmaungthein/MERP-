import React, { Component, Fragment } from "react";
import "./inputForm.css";
class InputForm extends Component {
  handleInput = e => {
    const inputValue = e.target.value;
    console.log(inputValue);
  };

  handleSubmit = e => {
    console.log( `Submit bottom is being clicked`);
  };
  render() {
    return (
      <Fragment>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={this.handleInput}
        />
        <input
          type="number"
          name="rawScore"
          placeholder="Raw Score"
          onChange={this.handleInput}
        />
        <button className="submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </Fragment>
    );
  }
}

export default InputForm;

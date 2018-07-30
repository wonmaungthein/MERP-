import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return (
      <li onClick={() => this.delete(item.key)} key={item.key}>
        {item.text}
      </li>
    );
  }

  delete(key) {
    console.log("key is " + key);
    this.props.delete(key);
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
    return (
      <div>
        <ul className="thelist">
          <FlipMove duration={250} easing="ease-out">
            {listItems}
          </FlipMove>
        </ul>
      </div>
    );
  }
}

export default TodoItems;

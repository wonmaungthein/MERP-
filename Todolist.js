import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./Todolist.css";

class Todolist extends Component {
  constructor(props) {
    super();

    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }

    this._inputElement.value = "";

    console.log(this.state.items);

    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function(item) {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems
    });
  }
  render() {
    return (
      <div className="todolistMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              ref={a => (this._inputElement = a)}
              placeholder="Enter task here"
            />
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default Todolist;

import React, { Component } from "react";
import "./Table.css";
import "./ReadingLevel";
import ReadingLevel from "./ReadingLevel";

class Table extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col" />
            <div class="col">
              <header>
                <h1>The title of the Excel</h1>
              </header>
            </div>
            <div class="col" />
          </div>

          <table>
            <tr>
              <th>Name</th>
              <th>Raw Score</th>
              <th>Standing Score</th>
              <th>Reading Level</th>
            </tr>
            <tr>
              <td>Won Maung Thein</td>
              <td>68</td>
              <td />
              <td>A3</td>
            </tr>
            {/* <tr>
              <td>Khine Mg </td>
              <td>82</td>
              <td />
              <td>B3</td>
            </tr> */}
            <ReadingLevel />
          </table>
        </div>
      </div>
    );
  }
}

export default Table;

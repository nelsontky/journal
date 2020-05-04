import React from "react";
import { remove } from "../api/entries";

export default class MyEntries extends React.Component {
  deleteEntry = (id) => remove.call({ id });

  render() {
    return (
      <ul>
        {this.props.entries.map((entry) => (
          <li key={entry._id}>
            <button onClick={() => this.deleteEntry(entry._id)}>&times;</button>
            <a href={"/" + entry._id}>{entry.title}</a>
          </li>
        ))}
      </ul>
    );
  }
}

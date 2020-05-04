import React from "react";

export default class MyEntries extends React.Component {
  render() {
    return (
      <ul>
        {this.props.entries.map((entry) => (
          <li key={entry._id}>
            <a href={"/" + entry._id}>{entry.title}</a>
          </li>
        ))}
      </ul>
    );
  }
}

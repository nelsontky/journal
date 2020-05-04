import React from "react";

export default class Entry extends React.Component {
  render() {
    const entry = this.props.entry;
    return (
      <div>
        <h1>{entry.title}</h1>
        <p>{entry.writtenBy}</p>
        <p>{entry.date.toString()}</p>
        <p>{entry.content}</p>
      </div>
    );
  }
}

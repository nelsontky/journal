import React from "react";

export default class Entry extends React.Component {
  render() {
    const indexOfEntry = this.props.entries
      .map((entry) => entry._id)
      .indexOf(this.props.id);

    if (indexOfEntry === -1) {
      return <p>Not found</p>;
    } else {
      const entry = this.props.entries[indexOfEntry];
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
}

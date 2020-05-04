import React from "react";
import { insert } from "../api/entries";

export default class AddEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      writtenBy: "",
      content: "",
    };
  }

  handleChange = (event) => {
    const field = event.target.name;

    this.setState({
      [field]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    insert.call({
      title: this.state.title,
      writtenBy: this.state.writtenBy,
      content: this.state.content,
    });

    this.setState({
      title: "",
      writtenBy: "",
      content: "",
    });
  };

  render() {
    return (
      <div>
        <div className="text-center">
          <h4>My Journal</h4>
        </div>
        <hr />

        <div
          className="jumbotron"
          style={{ maxWidth: "500px", textAlign: "center", margin: "0 auto" }}
        >
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter title"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Written By:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="writtenBy"
                value={this.state.writtenBy}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Content:</label>
              <textarea
                type="text"
                className="form-control"
                placeholder="Enter your content here"
                name="content"
                value={this.state.content}
                onChange={this.handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Add Journal Entry
            </button>
          </form>
        </div>
      </div>
    );
  }
}

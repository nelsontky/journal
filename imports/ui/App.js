import React from "react";
import AddEntry from "./AddEntry";
import { withTracker } from "meteor/react-meteor-data";
import { Entries } from "../api/entries.js";

// App component - represents the whole app

class App extends React.Component {
  render() {
    return <AddEntry />;
  }
}

export default withTracker(() => {
  return {
    entires: Entries.find({}).fetch(),
  };
})(App);

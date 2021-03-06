import React from "react";
import { Router, Route, Switch } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";

import AddEntry from "./AddEntry";
import MyEntries from "./MyEntries";
import Entry from "./Entry";

import { withTracker } from "meteor/react-meteor-data";
import { Entries } from "../api/entries.js";

const browserHistory = createBrowserHistory();

// App component - represents the whole app

class App extends React.Component {
  renderEntry = (routerProps) => {
    const indexOfEntry = this.props.entries
      .map((entry) => entry._id)
      .indexOf(routerProps.match.params.id);

    if (indexOfEntry == -1) {
      return <p>Not found</p>;
    } else {
      return <Entry entry={this.props.entries[indexOfEntry]} />;
    }
  };

  render() {
    return (
      <Router history={browserHistory}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <AppContainer entries={this.props.entries} />}
          />
          <Route exact path="/:id" render={this.renderEntry} />
        </Switch>
      </Router>
    );
  }
}

class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <AddEntry />
        <MyEntries entries={this.props.entries} />
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("entries");
  
  return {
    entries: Entries.find({}).fetch(),
  };
})(App);

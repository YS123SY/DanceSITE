import React from "react";
import { Route } from "react-router-dom";

import Inscription from "./component/Inscription";
import Connection from "./component/Connection";
import HomePage from "./component/HomePage";
import Swiped from "./component/Swiped";
import Dancer from "./component/Dancer";

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/inscription" component={Inscription} />
        <Route exact path="/connection" component={Connection} />
        <Route
          path="/dancer/:id"
          render={props => <Dancer id={props.match.params.id} />}
        />
      </div>
    );
  }
}
export default Routes;

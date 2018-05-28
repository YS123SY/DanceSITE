import React from "react";
import { Route } from "react-router-dom";

import Inscription from "./component/Inscription";
import Connection from "./component/Connection";
import HomePage from "./component/HomePage";
import CardDancer from "./component/CardDancer";
import Swiped from "./component/Swiped";

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/accueil" component={HomePage} />
        <Route exact path="/inscription" component={Inscription} />
        <Route exact path="/connection" component={Connection} />
        <Route exact path="/dancer" component={Swiped} />
        <Route
          exact
          path="/user/:id"
          render={props => <CardDancer id={props.match.params.id} />}
        />
      </div>
    );
  }
}
export default Routes;
